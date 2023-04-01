import { Color } from "./Color";
import { _HSLAcolor } from "./interfaces/HSLAcolor.interface";

/** Represents a HSLA color */
export class HSLAcolor extends Color implements _HSLAcolor {
    _hue:        number
    _saturation: number
    _lightness:  number
    _alpha:      number

    /**
     * Ensures that the HSLA color does have legal values, ie in range
     * @param hue hue must be in [0, 360] range
     * @param saturation saturation must be in range [0, 1] 
     * @param lightness lightness must be in range [0, 1]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(hue: number, saturation: number, lightness: number, alpha: number = 1) {
        super();
        this.setIfInRange(0, 360, hue, "_hue")
        this.setIfInRange(0, 1, saturation, "_saturation");
        this.setIfInRange(0, 1, lightness, "_lightness");
        this.setIfInRange(0, 1, alpha, "_alpha");
    }

    get hue(): number { return this._hue; }
    get saturation(): number { return this._saturation; }
    get lightness(): number { return this._lightness; }
    get alpha(): number { return this._alpha; }

    set hue(n: number) { this.setIfInRange(0, 360, n, "_hue"); }
    set saturation(n: number) { this.setIfInRange(0, 1, n, "_saturation"); }
    set lightness(n: number) { this.setIfInRange(0, 1, n, "_lightness"); }
    set alpha(n: number) { this.setIfInRange(0, 1, n, "_alpha"); }

    protected setIfInRange(
        min: number, max: number, value: number,
        attr: ("_hue"|"_saturation"|"_lightness"|"_alpha")
    ) {
        if (value < min || value > max)
            throw new Error(
                `Value for ${attr.slice(1)} must be in range [${min}, ${max}], received : ${value}`
            )
        this[attr] = value;
    }

    toCssString() {
        return `hsla(${this._hue}, ${this._saturation * 100}%, ${this._lightness * 100}%, ${this._alpha})`;
    }
}