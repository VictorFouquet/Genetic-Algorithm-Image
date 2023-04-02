"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBAcolor = void 0;
const Color_1 = require("./Color");
class RGBAcolor extends Color_1.Color {
    /**
     * Ensures that the RGBA color does have legal values, ie in range
     * @param hue hue must be in [0, 255] range
     * @param saturation saturation must be in range [0, 255]
     * @param lightness lightness must be in range [0, 255]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(red, green, blue, alpha = 1) {
        super();
        this.setIfInRange(0, 255, red, "_red");
        this.setIfInRange(0, 255, green, "_green");
        this.setIfInRange(0, 255, blue, "_blue");
        this.setIfInRange(0, 1, alpha, "_alpha");
    }
    get red() { return this._red; }
    get green() { return this._green; }
    get blue() { return this._blue; }
    get alpha() { return this._alpha; }
    set red(n) { this.setIfInRange(0, 255, n, "_red"); }
    set green(n) { this.setIfInRange(0, 255, n, "_green"); }
    set blue(n) { this.setIfInRange(0, 255, n, "_blue"); }
    set alpha(n) { this.setIfInRange(0, 1, n, "_alpha"); }
    setIfInRange(min, max, value, attr) {
        if (value < min || value > max)
            throw new Error(`Value for ${attr.slice(1)} must be in range [${min}, ${max}], received : ${value}`);
        this[attr] = value;
    }
    toCssString() {
        return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
    }
}
exports.RGBAcolor = RGBAcolor;
