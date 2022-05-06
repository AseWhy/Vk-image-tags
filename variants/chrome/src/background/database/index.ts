import Dexie, { Table } from "dexie";
import { TagEntryDescriptor } from "./descriptor/TagEntryDescriptor";
import { TagEntry } from "./entities/TagEntry";

export const Store = new class Store extends Dexie {
    private _tagEntries: Table<TagEntryDescriptor>;

    constructor() {
        super("vkTagsStore");

        this.version(1).stores({
            _tagEntries: TagEntry.schema()
        });
    }

    public get tagEntries() {
        return this._tagEntries;
    }
}();