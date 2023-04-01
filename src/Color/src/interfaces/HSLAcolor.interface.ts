import { _Color } from "./Color.interface";

// Represents a HSLA color
export interface _HSLAcolor extends _Color {
    hue:        number,
    saturation: number,
    lightness:  number,
    alpha:      number
}
