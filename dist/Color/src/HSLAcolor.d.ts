import { Color } from "./Color";
import { _HSLAcolor } from "./interfaces/HSLAcolor.interface";
/** Represents a HSLA color */
export declare class HSLAcolor extends Color implements _HSLAcolor {
    _hue: number;
    _saturation: number;
    _lightness: number;
    _alpha: number;
    /**
     * Ensures that the HSLA color does have legal values, ie in range
     * @param hue hue must be in [0, 360] range
     * @param saturation saturation must be in range [0, 1]
     * @param lightness lightness must be in range [0, 1]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(hue: number, saturation: number, lightness: number, alpha?: number);
    get hue(): number;
    get saturation(): number;
    get lightness(): number;
    get alpha(): number;
    set hue(n: number);
    set saturation(n: number);
    set lightness(n: number);
    set alpha(n: number);
    protected setIfInRange(min: number, max: number, value: number, attr: ("_hue" | "_saturation" | "_lightness" | "_alpha")): void;
    toCssString(): string;
}
