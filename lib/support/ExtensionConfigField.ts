export default class ExtensionConfigField {
    readonly name: string;
    readonly def: any;

    constructor(name: string, def: any) {
        this.name = name;
        this.def = def;
    }
}