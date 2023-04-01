import { _Color } from "./Color.interface"

/** Represents a RGBA color */
export interface _RGBAcolor extends _Color {
    red:   number
    green: number
    blue:  number
    alpha: number
}
