import { Color } from "../../Color";
import { Points4 } from "../../Geometry";
/** Random Colored Cyclic Quad object */
export declare class RandomColoredCyclicQuad {
    points: Points4;
    color: Color;
    /**
     * Creates a new instance of random colored cyclic quad
     * @param maxX maximum horizontal value for circle center
     * @param maxY maximum vertical value for circle center
     * @param maxR maximum radius for circle
     * @param colorType type of the color, HSLA or RGBA
     */
    constructor(maxX: number, maxY: number, maxR: number, colorType: "hsla" | "rgba");
}
