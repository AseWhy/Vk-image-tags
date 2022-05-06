export abstract class HtmlLiveCont<T = any> {
    private _cache: HTMLElement;
    private _key: string;

    constructor() {
        this._cache = null;
        this._key = null;
    }

    public abstract getRenderedElement(data: any, inner: T): HTMLElement;

    protected getRenderCont(data: any, innder: T) {
        if(this._cache) {
            const currentKey = JSON.stringify(data);

            if(currentKey == this._key) {
                return this._cache;
            }

            this._key = currentKey;

            this._cache.parentNode?.removeChild(this._cache);
        }

        return this._cache = this.getRenderedElement(data, innder);
    }

    public render(data: any, innder: T, to: Element, render?: (rendered: Element, container: Element) => void): void {
        if(to != null) {
            const rendered = this.getRenderCont(data, innder);

            if(rendered != null && !to.contains(rendered)) {
                if(render != null) {
                    render(rendered, to);
                } else {
                    to.append(rendered);
                }
            }
        }
    }
}