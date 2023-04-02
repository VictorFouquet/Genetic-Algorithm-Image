import { _HSLAcolor } from "./HSLAcolor.interface";
import { _RGBAcolor } from "./RGBAcolor.interface";
/** Performs conversions between different color spaces */
export interface _ColorConverter {
    hslaToRgba(color: _HSLAcolor): _RGBAcolor;
    rgbaToHsla(color: _RGBAcolor): _HSLAcolor;
    hexToRGBA(color: string): _RGBAcolor;
    rgbaToHex(color: _RGBAcolor): string;
}
