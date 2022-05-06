import { MouseEvent } from "react";
import { HtmlLiveCont } from ".";
import TagStore from "../database/live/TagStore";

import "./styles/tags-live-cont.css";

export interface IInnerData {
    onAdd(tag: string): void | Promise<void>;
    onEdit(tag: string, to: string): void | Promise<void>;
    onRemove(tag: string): void | Promise<void>;
}

export default new class TagsLiveCont extends HtmlLiveCont<IInnerData> {
    /**
     * Создает контейнер тега
     * 
     * @param tag название тега
     * @param clickAction действие при клике
     * @param deleteAction действие при удалении
     * @param classList дополнительный список классов
     * @param injectColors нужно ли окрашивать тег?
     * @returns html элемент отображения тега
     */
    private createTagElement(tag: string, clickAction: Function, deleteAction: Function, classList: string[] = [], injectColors = true) {
        const item = document.createElement("div");
        const span = document.createElement("span");

        span.innerText = tag;
        span.classList.add("img_tags_item_text")

        if(injectColors) {
            item.style.backgroundColor = TagStore.getBgColor(tag);
            item.style.color = TagStore.getFgColor(tag);
        }

        item.classList.add("img_tags_item", ...classList);

        if(clickAction) {
            item.addEventListener("click", clickAction.bind(this));
        }
        
        item.append(span);

        if(deleteAction) {
            const del = document.createElement("button");

            del.classList.add("img_tags_item_delete");
            del.addEventListener("click", deleteAction.bind(this));
            del.innerText = "✕";

            item.append(del);
        }

        return item;
    }

    /**
     * Разобрать данные из цели ивента
     * 
     * @param data цель ивента или просто html элемент для разбора
     * @returns спиоск внутренних элементов контейнера тега
     */
    private extractData(data: Element | EventTarget) {
        const dataElement = data as HTMLElement;
        const parent = dataElement.tagName == "div" ? dataElement : dataElement.parentElement;

        return {
            remove: parent.querySelector("button.img_tags_item_delete") as HTMLButtonElement,
            container: parent.querySelector("span.img_tags_item_text") as HTMLSpanElement,
            parent: parent as HTMLDivElement
        }
    }
    
    /**
     * Действие при добавлении тега
     * 
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    private async onAdd(inner: IInnerData, event: MouseEvent) {
        if(event.defaultPrevented) {
            return;
        }

        event.preventDefault();

        const tag = prompt("Добавить тег", "");
        const target = this.extractData(event.target);

        if(tag != null) {
            const trimed = tag.trim();
            
            if(trimed.length > 0) {
                const list = target.parent.parentElement;
                const result = await inner.onAdd(trimed);
                
                if(list != null) {
                    for(let i = 0, length = list.children.length; i < length; i++) {
                        const current = list.children.item(i) as HTMLDivElement;
                        const innerText = current.innerText;

                        if(current != null && innerText != null && innerText.trim() == trimed) {
                            return;
                        }
                    }
                    
                    if(result == null || result) {
                        list.prepend(this.createTagElement(trimed, this.onAdd.bind(this, inner), null));
                    }
                }
            }
        }
    }

    /**
     * Действие при редактировании тега
     * 
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    private async onEdit(inner: IInnerData, event: MouseEvent) {
        if(event.defaultPrevented) {
            return;
        }

        event.preventDefault();

        const target = this.extractData(event.target);
        
        if(target.container == null || target.parent == null) {
            return;
        }

        const from = target.container.innerText;
        const tag = prompt("Редактировать тег", from);

        if(tag != null) {
            const trimed = tag.trim();
            
            if(trimed.length > 0) {
                const result = await inner.onEdit(from, trimed);
                const list = target.parent.parentElement;
                
                if(list != null) {
                    for(let i = 0, length = list.children.length; i < length; i++) {
                        const current = list.children.item(i) as HTMLDivElement;
                        const innerText = current.innerText;

                        if(current != null && innerText != null && innerText.trim() == trimed) {
                            return;
                        }
                    }
                }
                
                if(result == null || result) {
                    target.container.innerText = trimed;
                }
            }
        }
    }

    /**
     * Действие при удалении тега
     * 
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    private async onRemove(inner: IInnerData, event: MouseEvent) {
        if(event.defaultPrevented) {
            return;
        }

        event.preventDefault();

        const target = this.extractData(event.target);

        if(target.container == null || target.parent == null) {
            return;
        }

        const from = target.container.innerText;

        if(confirm("Удалить тег " + from + "?")) {
            const result = await inner.onRemove(from);
                
            if(result == null || result) {
                const parent = target.parent.parentElement;

                if(parent.contains(target.parent)) {
                    parent.removeChild(target.parent);
                }
            }
        }
    }

    /**
     * Получить элемент взаимодействия с пользователем
     * 
     * @param param0 данные для отображения в элементе
     * @param inner данные для взаимодействия
     * @returns элемент для взаимодействия
     */
    public override getRenderedElement({ tags, name }: any, inner: IInnerData): HTMLElement {
        const container = document.createElement("div");
        const list = document.createElement("div");

        container.id = "img_tags_container";
        container.append(list);

        list.classList.add("img_tags_list");

        for(const tag of tags) {
            list.append(this.createTagElement(tag, this.onEdit.bind(this, inner), this.onRemove.bind(this, inner)));
        }

        list.append(this.createTagElement("+", this.onAdd.bind(this, inner), null, [ "add-promt" ], false));

        return container;
    }
}();