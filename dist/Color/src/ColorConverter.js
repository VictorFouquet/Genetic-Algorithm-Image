"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorConverter = void 0;
const HSLAcolor_1 = require("./HSLAcolor");
const RGBAcolor_1 = require("./RGBAcolor");
/**
 * Util class used for converting colors between different color spaces
 */
class ColorConverter {
    /**
     * Converts a HSLA color to RGBA color
     * @param color HSLA color to convert
     * @returns RGBA formatted color
     */
    hslaToRgba(color) {
        // Implementation of mathematic formulas taken from Wikipedia
        // Source: https://en.wikipedia.org/wiki/HSL_and_HSV#To_RGB
        const H = color.hue;
        const S = color.saturation;
        const L = color.lightness;
        const C = (1 - Math.abs(2 * L - 1)) * S;
        const h = H / 60;
        const X = C * (1 - Math.abs(h % 2 - 1));
        const m = L - C * 0.5;
        let r, g, b;
        if (h >= 0 && h < 1)
            r = C + m, g = X + m, b = m;
        else if (h >= 1 && h < 2)
            r = X + m, g = C + m, b = m;
        else if (h >= 2 && h < 3)
            r = m, g = C + m, b = X + m;
        else if (h >= 3 && h < 4)
            r = m, g = X + m, b = C + m;
        else if (h >= 4 && h < 5)
            r = X + m, g = m, b = C + m;
        else if (h >= 4 && h < 6)
            r = C + m, g = m, b = X + m;
        r = Math.min(255, Math.round(r * 255));
        g = Math.min(255, Math.round(g * 255));
        b = Math.min(255, Math.round(b * 255));
        return new RGBAcolor_1.RGBAcolor(r, g, b, color.alpha);
    }
    /**
     * Converts an RGBA color to a HLSA color
     * @param color RGBA color to convert
     * @returns HSLA formatted color
     */
    rgbaToHsla(color) {
        // Implementation of mathematical formulas taken from Wikipedia
        // Source: https://en.wikipedia.org/wiki/HSL_and_HSV#General_approach
        // Normalizes channels between [0, 1]
        const r = color.red / 255;
        const g = color.green / 255;
        const b = color.blue / 255;
        // Finds min and max channels
        const M = Math.max(r, g, b);
        const m = Math.min(r, g, b);
        // Computes delta between min and max channels
        const c = M - m;
        // Solves for Hue
        let h = 0;
        if (c == 0)
            h = 0;
        else if (M == r)
            h = (g - b) / c % 6;
        else if (M == g)
            h = (b - r) / c + 2;
        else if (M == b)
            h = (r - g) / c + 4;
        const H = 60 * h;
        // Solves for lightness
        const L = (M + m) * 0.5;
        // Solves for saturation
        const S = (L == 1 || L == 0) ? 0 : c / (1 - Math.abs(2 * L - 1));
        return new HSLAcolor_1.HSLAcolor(Math.min(360, Math.round(H)), +S.toFixed(2), +L.toFixed(2), color.alpha);
    }
    /**
     * Formats an rgba color to hex
     * @param color rgba color to format
     * @returns hex formatted color
     */
    rgbaToHex(color) {
        let rgba = "#";
        rgba += color.red.toString(16).padStart(2, '0');
        rgba += color.green.toString(16).padStart(2, '0');
        rgba += color.blue.toString(16).padStart(2, '0');
        rgba += (color.alpha * 255).toString(16).padStart(2, '0');
        return rgba;
    }
    /**
     * Converts a hex color string to rgba color object
     * @param color hex color to convert
     * @returns rgba color
     */
    hexToRGBA(color) {
        let hex = color.startsWith('#') ? color.slice(1) : color;
        let r = parseInt(hex.slice(0, 2), 16);
        let g = parseInt(hex.slice(2, 4), 16);
        let b = parseInt(hex.slice(4, 6), 16);
        let a = hex.length == 8 ? parseInt(hex.slice(6), 16) / 255 : 1;
        return new RGBAcolor_1.RGBAcolor(r, g, b, a);
    }
}
exports.ColorConverter = ColorConverter;
