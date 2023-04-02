import { HSLAcolor, RGBAcolor, Color } from "../../Color";
import { Circle, CyclicQuad, Point, Points4 } from "../../Geometry";

/** Random Colored Cyclic Quad object */
export class RandomColoredCyclicQuad {
    points: Points4 // Four points that define the quad geometry
    color: Color    // Color of the quad

    /**
     * Creates a new instance of random colored cyclic quad
     * @param maxX maximum horizontal value for circle center
     * @param maxY maximum vertical value for circle center
     * @param maxR maximum radius for circle
     * @param colorType type of the color, HSLA or RGBA
     */
    constructor(maxX: number, maxY: number, maxR: number, colorType: "hsla" | "rgba") {
        // Creates random circle
        const refCircle: Circle = new Circle(
            new Point(
                Math.random() * maxX,
                Math.random() * maxY
            ),
            maxR
        )
        // Computes 4 points that lay on the circle to create a cyclic quad
        this.points = new CyclicQuad(refCircle).points;
        // Creates random color
        if (colorType == "hsla") {
            this.color = new HSLAcolor(
                Math.random() * 360,
                Math.random(),
                Math.random(),
                Math.random()
            )
        } else if (colorType == "rgba") {
            this.color = new RGBAcolor(
                Math.random() * 255,
                Math.random() * 255,
                Math.random() * 255,
                Math.random()
            )
        }
    }
}