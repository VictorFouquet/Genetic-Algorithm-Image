import { Color } from "./Color";
import { _RGBAcolor } from "./interfaces/RGBAcolor.interface";
export declare class RGBAcolor extends Color implements _RGBAcolor {
    _red: number;
    _green: number;
    _blue: number;
    _alpha: number;
    /**
     * Ensures that the RGBA color does have legal values, ie in range
     * @param hue hue must be in [0, 255] range
     * @param saturation saturation must be in range [0, 255]
     * @param lightness lightness must be in range [0, 255]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(red: number, green: number, blue: number, alpha?: number);
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number;
    set red(n: number);
    set green(n: number);
    set blue(n: number);
    set alpha(n: number);
    setIfInRange(min: number, max: number, value: number, attr: ("_red" | "_green" | "_blue" | "_alpha")): void;
    toCssString(): string;
}
