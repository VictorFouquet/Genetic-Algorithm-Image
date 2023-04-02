"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSLAcolor = void 0;
const Color_1 = require("./Color");
/** Represents a HSLA color */
class HSLAcolor extends Color_1.Color {
    /**
     * Ensures that the HSLA color does have legal values, ie in range
     * @param hue hue must be in [0, 360] range
     * @param saturation saturation must be in range [0, 1]
     * @param lightness lightness must be in range [0, 1]
     * @param alpha alpha must be in range [0, 1]
     */
    constructor(hue, saturation, lightness, alpha = 1) {
        super();
        this.setIfInRange(0, 360, hue, "_hue");
        this.setIfInRange(0, 1, saturation, "_saturation");
        this.setIfInRange(0, 1, lightness, "_lightness");
        this.setIfInRange(0, 1, alpha, "_alpha");
    }
    get hue() { return this._hue; }
    get saturation() { return this._saturation; }
    get lightness() { return this._lightness; }
    get alpha() { return this._alpha; }
    set hue(n) { this.setIfInRange(0, 360, n, "_hue"); }
    set saturation(n) { this.setIfInRange(0, 1, n, "_saturation"); }
    set lightness(n) { this.setIfInRange(0, 1, n, "_lightness"); }
    set alpha(n) { this.setIfInRange(0, 1, n, "_alpha"); }
    setIfInRange(min, max, value, attr) {
        if (value < min || value > max)
            throw new Error(`Value for ${attr.slice(1)} must be in range [${min}, ${max}], received : ${value}`);
        this[attr] = value;
    }
    toCssString() {
        return `hsla(${this._hue}, ${this._saturation * 100}%, ${this._lightness * 100}%, ${this._alpha})`;
    }
}
exports.HSLAcolor = HSLAcolor;
