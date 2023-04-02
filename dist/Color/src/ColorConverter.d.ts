import { _ColorConverter } from "./interfaces/ColorConverter.interface";
import { HSLAcolor } from "./HSLAcolor";
import { RGBAcolor } from "./RGBAcolor";
/**
 * Util class used for converting colors between different color spaces
 */
export declare class ColorConverter implements _ColorConverter {
    /**
     * Converts a HSLA color to RGBA color
     * @param color HSLA color to convert
     * @returns RGBA formatted color
     */
    hslaToRgba(color: HSLAcolor): RGBAcolor;
    /**
     * Converts an RGBA color to a HLSA color
     * @param color RGBA color to convert
     * @returns HSLA formatted color
     */
    rgbaToHsla(color: RGBAcolor): HSLAcolor;
    /**
     * Formats an rgba color to hex
     * @param color rgba color to format
     * @returns hex formatted color
     */
    rgbaToHex(color: RGBAcolor): string;
    /**
     * Converts a hex color string to rgba color object
     * @param color hex color to convert
     * @returns rgba color
     */
    hexToRGBA(color: string): RGBAcolor;
}
