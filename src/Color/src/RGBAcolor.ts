import { Color } from "./Color";
import { _RGBAcolor } from "./interfaces/RGBAcolor.interface";

export class RGBAcolor extends Color implements _RGBAcolor {
    _red:   number
    _green: number
    _blue:  number
    _alpha: number

    /**
     * Ensures that the RGBA color does have legal values, ie in range
     * @param hue hue must be in [0, 255] range
     * @param saturation saturation must be in range [0, 255] 
     * @param lightness lightness must be in range [0, 255]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(red: number, green: number, blue: number, alpha: number = 1) {
        super();
        this.setIfInRange(0, 255, red,   "_red");
        this.setIfInRange(0, 255, green, "_green");
        this.setIfInRange(0, 255, blue,  "_blue");
        this.setIfInRange(0,   1, alpha, "_alpha");
    }

    get red():   number { return this._red; }
    get green(): number { return this._green; }
    get blue():  number { return this._blue; }
    get alpha(): number { return this._alpha; }

    set red(n: number)   { this.setIfInRange(0, 255, n, "_red"); }
    set green(n: number) { this.setIfInRange(0, 255, n, "_green"); }
    set blue(n: number)  { this.setIfInRange(0, 255, n, "_blue"); }
    set alpha(n: number) { this.setIfInRange(0,   1, n, "_alpha"); }

    setIfInRange(
        min: number, max: number, value: number,
        attr: ("_red"|"_green"|"_blue"|"_alpha")
    ) {
        if (value < min || value > max)
            throw new Error(
                `Value for ${attr.slice(1)} must be in range [${min}, ${max}], received : ${value}`
            )
        this[attr] = value;
    }

    toCssString() {
        return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
    }
}