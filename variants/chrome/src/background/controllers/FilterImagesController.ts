import ExtensionConfig from "../../../../../lib/support/ExtensionConfig";
import { Store } from "../database";

export class FilterImagesController {
    private static VK_BOX_LAYER_WRAPPER = "box_layer_wrap";
    private static VK_IMG_PHOTOS_CONT_AFTER_TAGET = "photos_choose_rows";
    private static VK_IMG_PHOTOS_SHOW_MORE_CONT_TAGET = "photos_choose_more";
    private static VK_IMG_PHOTOS_SHOW_MORE_LOADER_TAGET = ".photos_choose_more_loader";

    private static VK_IMG_HIDDEN_CLASS = "two-hidden";
    private static VK_IMG_SELECTED_CLASS = "two-selected";
    
    private _currentVersion: number;
    private _lastSearch: string;
    private _activeElements: Element[];
    private _currentActiveIndex: number;
    private _setuped: boolean;

    constructor() {
        this._currentVersion = 0;
        this._lastSearch = null;
        this._currentActiveIndex = 0;
        this._activeElements = [];
        this._setuped = false;
        this.setupListeners();
    }

    /**
     * Текущая версия набора
     */
    public get currentVersion() {
        return this._currentVersion;
    }

    /**
     * Вернет true если загружается новый набор данных
     * 
     * @param showMore контейнер для поиска
     * @returns true если загружается новый набор данных
     */
    protected isLoading(showMore: Element) {
        return showMore.querySelector(FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_LOADER_TAGET) != null;
    }

    /**
     * Устанавливает слушатели контроллера
     */
    private setupListeners() {
        if(this._setuped) {
            return;
        }

        this._setuped = true;

        const wrapper = document.getElementById(FilterImagesController.VK_BOX_LAYER_WRAPPER);

        wrapper.addEventListener("keydown", async event => {
            if(event.code == await ExtensionConfig.getField(ExtensionConfig.KeyGoToNextSelection)) {
                event.preventDefault();
                this.selectNextActive();
            }
        })
    }

    /**
     * Загружает чанк картинок пользователя
     * 
     * @returns обещание, true обозначает что все загружено
     */
    protected loadMore(): Promise<boolean> {
        const showMore = document.getElementById(FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_CONT_TAGET) as HTMLButtonElement;

        if(this.isLoading(showMore)) {
            return new Promise((res, rej) => {
                const timeout = setTimeout(() => {
                    if(!this.isLoading(showMore)) {
                        clearInterval(timeout);
        
                        res(false);
                    }
                }, 500);
            });
        }

        if(showMore != null && showMore.style.display != "none") {
            showMore.click();
        } else {
            return Promise.resolve(true);
        }

        return new Promise((res, rej) => {
            const timeout = setTimeout(() => {
                if(!this.isLoading(showMore)) {
                    clearInterval(timeout);

                    res(false);
                }
            }, 500);
        });
    }

    /**
     * Обертка для функции загрузить больше, отличие в том что эта функция сверяется с настройками расширения
     * 
     * @returns обещание, true обозначает что все что нужно было уже загружено
     */
    protected async loadMoreWrapper() {
        if(await ExtensionConfig.getField(ExtensionConfig.LoadAllItemWhenSearch)) {
            const result = await this.loadMore();

            console.log("Loading more images to filter", result);
    
            return result;
        } else {
            return Promise.resolve(true);
        }
    }

    /**
     * Выделить совпадения с шаблонов тегов
     * 
     * @param pattern шаблон для поиска
     * @returns обещание, выполнение которого обозначает выделение всех совпадающих элементов
     */
    public async showMathes(pattern: string) {
        const inc = document.getElementById(FilterImagesController.VK_IMG_PHOTOS_CONT_AFTER_TAGET);

        if(this._lastSearch == pattern) {
            return;
        } else {
            this._lastSearch = pattern;
        }

        const version = ++this._currentVersion;
        
        if(pattern.length == 0) {
            for(let i = 0, length = inc.children.length; i < length; i++) {
                const current = inc.children.item(i) as HTMLLinkElement;
                const classList = current.classList;
                
                if(classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                    classList.remove(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                }

                if(classList.contains(FilterImagesController.VK_IMG_SELECTED_CLASS)) {
                    classList.remove(FilterImagesController.VK_IMG_SELECTED_CLASS);
                }
            }

            return;
        }
    
        const tagEntries = Store.tagEntries;
        const descriptor = await tagEntries.where("tags").startsWithAnyOfIgnoreCase(...pattern.split(" ")).toArray();
        const names = new Set(descriptor.map(e => e.name));

        this._activeElements.splice(0, this._activeElements.length);

        this.setupListeners();
        
        do {
            if(this._currentVersion != version) {
                return;
            }

            for(let i = 0, length = inc.children.length; i < length; i++) {
                const current = inc.children.item(i) as HTMLLinkElement;
                const classList = current.classList;
        
                const httpName = current.href?.substring(14);
                const httpsName = current.href?.substring(15);
        
                if(!httpName || !httpsName) {
                    continue;
                }
        
                if(names.has(httpsName) || names.has(httpName)) {
                    if(classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                        classList.remove(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                    }

                    classList.add(FilterImagesController.VK_IMG_SELECTED_CLASS);

                    this._activeElements.push(current);
                } else if(!classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                    if(classList.contains(FilterImagesController.VK_IMG_SELECTED_CLASS)) {
                        classList.remove(FilterImagesController.VK_IMG_SELECTED_CLASS);
                    }

                    classList.add(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                }
            }
        } while(!(await this.loadMoreWrapper()))
    }

    /**
     * Выбрать следующий активный элемент
     */
    protected selectNextActive() {
        if(this._currentActiveIndex > this._activeElements.length) {
            if(this._currentActiveIndex) {

            }

            this._currentActiveIndex = 0;
        }

        const active = this._activeElements[this._currentActiveIndex++];

        if(active) {
            active.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        } else {
            this._currentActiveIndex = 0;
        }
    }
};

export default new FilterImagesController();