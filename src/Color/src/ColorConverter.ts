import { _ColorConverter } from "./interfaces/ColorConverter.interface";
import { HSLAcolor } from "./HSLAcolor";
import { RGBAcolor } from "./RGBAcolor";


/**
 * Util class used for converting colors between different color spaces
 */
export class ColorConverter implements _ColorConverter {
    /**
     * Converts a HSLA color to RGBA color
     * @param color HSLA color to convert
     * @returns RGBA formatted color
     */
    hslaToRgba(color: HSLAcolor): RGBAcolor {
        // Implementation of mathematic formulas taken from Wikipedia
        // Source: https://en.wikipedia.org/wiki/HSL_and_HSV#To_RGB
        const H: number = color.hue;
        const S: number = color.saturation;
        const L: number = color.lightness;

        const C: number = (1 - Math.abs(2 * L - 1)) * S;
        const h: number = H / 60;
        const X: number = C * (1 - Math.abs(h % 2 - 1));
        const m: number = L - C * 0.5;

        let r: number, g: number, b: number;

        if (h >= 0 && h < 1)
            r = C+m, g = X+m, b = m;
        else if (h >= 1 && h < 2)
            r = X+m, g = C+m, b = m;
        else if (h >= 2 && h < 3)
            r = m,   g = C+m, b = X+m;
        else if (h >= 3 && h < 4)
            r = m,   g = X+m, b = C+m;
        else if (h >= 4 && h < 5)
            r = X+m, g = m,   b = C+m;
        else if (h >= 4 && h < 6)
            r = C+m, g = m,   b = X+m;

        r = Math.min(255, Math.round(r * 255));
        g = Math.min(255, Math.round(g * 255));
        b = Math.min(255, Math.round(b * 255));
        
        return new RGBAcolor(r, g, b, color.alpha)
    }

    /**
     * Converts an RGBA color to a HLSA color
     * @param color RGBA color to convert
     * @returns HSLA formatted color
     */
    rgbaToHsla(color: RGBAcolor): HSLAcolor {
        // Implementation of mathematical formulas taken from Wikipedia
        // Source: https://en.wikipedia.org/wiki/HSL_and_HSV#General_approach

        // Normalizes channels between [0, 1]
        const r: number = color.red   / 255;
        const g: number = color.green / 255;
        const b: number = color.blue  / 255;
        // Finds min and max channels
        const M: number = Math.max(r, g, b);
        const m: number = Math.min(r, g, b);
        // Computes delta between min and max channels
        const c: number = M - m;
        // Solves for Hue
        let   h: number = 0;
        if (c == 0)
            h = 0;
        else if (M == r)
            h = (g - b) / c % 6;
        else if (M == g)
            h = (b - r) / c + 2;
        else if (M == b)
            h = (r - g) / c + 4;
        const H: number = 60 * h;
        // Solves for lightness
        const L: number = (M + m) * 0.5;
        // Solves for saturation
        const S: number = (L == 1 || L == 0) ? 0 : c / (1 - Math.abs(2 * L - 1));

        return new HSLAcolor(
            Math.min(360, Math.round(H)),
            +S.toFixed(2),
            +L.toFixed(2),
            color.alpha
        )
    }

    /**
     * Formats an rgba color to hex
     * @param color rgba color to format
     * @returns hex formatted color
     */
    rgbaToHex(color: RGBAcolor): string {
        let rgba: string = "#";
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
    hexToRGBA(color: string): RGBAcolor {
        let hex: string = color.startsWith('#') ? color.slice(1) : color;
        let r: number = parseInt(hex.slice(0, 2), 16);
        let g: number = parseInt(hex.slice(2, 4), 16);
        let b: number = parseInt(hex.slice(4, 6), 16);
        let a: number = hex.length == 8 ? parseInt(hex.slice(6), 16) / 255 : 1;

        return new RGBAcolor(r, g, b, a);
    }
}
