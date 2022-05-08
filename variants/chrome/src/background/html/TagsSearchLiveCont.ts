import { HtmlLiveCont } from ".";
import ExtensionConfig from "../../../../../lib/support/ExtensionConfig";

import "./styles/tags-live-search.css";

export interface IInnerData {
    onSearch(pattern: string): void | Promise<void>;
}

export default new class TagsSearchLiveCont extends HtmlLiveCont<IInnerData> {    
    private _oldTimer: any;

    /**
     * Действие при поиске
     * 
     * @param inner данные для взаимодействия
     * @param event ивент
     */
    private async onSearch(inner: IInnerData, event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;
        const search = input.value;

        if(this._oldTimer != null) {
            clearTimeout(this._oldTimer);

            this._oldTimer = null;
        } else {
            inner.onSearch(search.trim());

            this._oldTimer = setTimeout(() => {
                this._oldTimer = null;
            }, await ExtensionConfig.getField(ExtensionConfig.TagsSearchIntervalKey));
        }

        if(search != null) {
            this._oldTimer = setTimeout(() => {
                this._oldTimer = null;
                inner.onSearch(search.trim());
            }, await ExtensionConfig.getField(ExtensionConfig.TagsSearchIntervalKey));
        }
    }

    /**
     * Получить элемент взаимодействия с пользователем
     * 
     * @param data данные для отображения в элементе
     * @param inner данные для взаимодействия
     * @returns элемент для взаимодействия
     */
    public override getRenderedElement(data: any, inner: IInnerData): HTMLElement {
        const container = document.createElement("div");
        const input = document.createElement("input");

        container.classList.add("search-tags-input-container");
        container.append(input);

        input.classList.add("search-tags-input");
        input.placeholder = "Поиск по тегам";
        input.type = "text";
        input.id = "tag-input-id"

        input.addEventListener("input", this.onSearch.bind(this, inner));

        return container;
    }
}();