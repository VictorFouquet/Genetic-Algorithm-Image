import { _Color } from "./interfaces/Color.interface";

/** Class representing an abstract color object */
export abstract class Color implements _Color {
    /**
     * Ensures that any value doesn't get set out of boundaries
     * @param min range's lower bound, inclusive
     * @param max range's upper bound, inclusive
     * @param value updated value
     * @param attr attribute to update
     */
    protected abstract setIfInRange(min: number, max: number, value: number, attr: string): void;
    
    /**
     * Formats a color object to its css string representation
     * @returns css formatted color
     */
    abstract toCssString(): string;
}