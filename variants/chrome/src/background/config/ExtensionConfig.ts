export default new class ExtensionConfig {
    public readonly TagsSearchIntervalKey = "TagsSearchIntervalKey";
    public readonly LoadAllItemWhenSearch = "LoadAllItemWhenSearch";
    public readonly KeyGoToNextSelection = "KeyGoToNextSelection";

    public getField<T = any>(field: string, def: any): Promise<T> {
        return new Promise((res, rej) => {
            const key = "_config_" + field;

            chrome.storage.sync.get(key, items => {
                res(items[key] ?? def);
            })
        });
    }

    public setField(field: string, value: any) {
        return new Promise((res, rej) => {
            chrome.storage.sync.set({ ["_config_" + field]: value }, () => {
                res(undefined);
            });
        })
    }
}();