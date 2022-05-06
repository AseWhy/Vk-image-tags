import { TagEntryDescriptor } from "../descriptor/TagEntryDescriptor";

export class TagEntry implements TagEntryDescriptor {
    private _weight: number;
    private _tags: string[];
    private _name: string;
    private _url: string;

    constructor(descriptor: TagEntryDescriptor | string) {
        if(typeof descriptor === 'string') {
            this._name = descriptor;
        } else {
            this._weight = descriptor.weight;
            this._tags = descriptor.tags;
            this._url = descriptor.url;
            this._name = descriptor.name;
        }
    }

    get weight() {
        return this._weight ?? (this._weight = 0);
    }

    get tags() {
        return this._tags ?? (this._tags = []);
    }

    get url() {
        return this._url;
    }

    get name() {
        return this._name;
    }

    public setName(name: string) {
        this._name = name;
    }

    public setUrl(url: string) {
        this._url = url;
    }

    public increment() {
        this._weight = this.weight + 1;
    }

    public removeTag(tag: string) {
        this.tags.splice(this.tags.indexOf(tag), 1);
    }

    public editTag(tag: string, to: string) {
        this.tags.splice(this.tags.indexOf(tag), 1, to);
    }

    public addTag(tag: string) {
        if(this.tags.includes(tag)) {
            return;
        }

        this._tags.push(tag);
    }

    public toJSON(): TagEntryDescriptor {
        return {
            tags: this.tags,
            weight: this.weight,
            url: this._url,
            name: this._name
        }
    }

    public static schema() {
        return "name, weight, *tags";
    }
}