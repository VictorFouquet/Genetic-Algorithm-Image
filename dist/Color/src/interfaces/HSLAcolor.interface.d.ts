import { _Color } from "./Color.interface";
export interface _HSLAcolor extends _Color {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
}
