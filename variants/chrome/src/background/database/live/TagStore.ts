import randomColor from "randomcolor";

const BG_PREFIX = "BG_";
const FG_PREFIX = "FG_";

function getRandomLightColor() {
    return randomColor({
        luminosity: 'light',
        hue: 'random'
    });
}

function getRandomDarkColor() {
    return randomColor({
        luminosity: 'dark',
        hue: 'random'
    });
}

export default new class TagStore {
    private _tagMap: Map<string, string>;

    constructor() {
        this._tagMap = new Map();
    }

    public getBgColor(tag: string) {
        if(this._tagMap.has(BG_PREFIX + tag)) {
            return this._tagMap.get(BG_PREFIX + tag);
        }

        const color = getRandomDarkColor();

        this._tagMap.set(BG_PREFIX + tag, color);

        return color;
    }

    public getFgColor(tag: string) {
        if(this._tagMap.has(FG_PREFIX + tag)) {
            return this._tagMap.get(FG_PREFIX + tag);
        }

        const color = getRandomLightColor();

        this._tagMap.set(FG_PREFIX + tag, color);

        return color;
    }
}();