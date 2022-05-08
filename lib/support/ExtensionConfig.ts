import ExtensionConfigField from "./ExtensionConfigField";

const CONFIG_PREFIX = "_config_";

export default new class ExtensionConfig {
    public readonly TagsSearchIntervalKey = new ExtensionConfigField("TagsSearchIntervalKey", 500);
    public readonly LoadAllItemWhenSearch = new ExtensionConfigField("LoadAllItemWhenSearch", true);
    public readonly KeyGoToNextSelection = new ExtensionConfigField("KeyGoToNextSelection", "Tab");

    public getField<T = any>(field: string | ExtensionConfigField, def: any = null): Promise<T> {
        const name = field instanceof ExtensionConfigField ? field.name : field;
        const key = "_config_" + name;

        return new Promise((res, rej) => {
            chrome.storage.sync.get(key, items => {
                res(items[key] ?? def ?? this[name].def);
            });
        });
    }

    public getFields() {
        const fields = this.getAllFieldSet();

        return new Promise((res, rej) => {
            chrome.storage.sync.get(fields.map(e => CONFIG_PREFIX + e), items => {
                res(Object.fromEntries(fields.map(name => [ name, items[CONFIG_PREFIX + name] ?? this[name].def ])));
            });
        });
    }

    public setField(field: string | ExtensionConfigField, value: any) {
        const name = field instanceof ExtensionConfigField ? field.name : field;

        return new Promise((res, rej) => {
            chrome.storage.sync.set({ [CONFIG_PREFIX + name ]: value }, () => {
                res(undefined);
            });
        })
    }

    public setValues(value: Record<string, any>) {
        return new Promise((res, rej) => {
            chrome.storage.sync.set(Object.fromEntries(Object.entries(value).map(e => [CONFIG_PREFIX + e[0], e[1]])), () => {
                res(undefined);
            });
        })
    }

    public getAllFieldSet() {
        return Object.entries(this).filter(([ key, value ]) => value instanceof ExtensionConfigField).map(e => e[0]);
    }
}();