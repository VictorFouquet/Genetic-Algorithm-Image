"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomColoredCyclicQuad = void 0;
const Color_1 = require("../../Color");
const Geometry_1 = require("../../Geometry");
/** Random Colored Cyclic Quad object */
class RandomColoredCyclicQuad {
    /**
     * Creates a new instance of random colored cyclic quad
     * @param maxX maximum horizontal value for circle center
     * @param maxY maximum vertical value for circle center
     * @param maxR maximum radius for circle
     * @param colorType type of the color, HSLA or RGBA
     */
    constructor(maxX, maxY, maxR, colorType) {
        // Creates random circle
        const refCircle = new Geometry_1.Circle(new Geometry_1.Point(Math.random() * maxX, Math.random() * maxY), maxR);
        // Computes 4 points that lay on the circle to create a cyclic quad
        this.points = new Geometry_1.CyclicQuad(refCircle).points;
        // Creates random color
        if (colorType == "hsla") {
            this.color = new Color_1.HSLAcolor(Math.random() * 360, Math.random(), Math.random(), Math.random());
        }
        else if (colorType == "rgba") {
            this.color = new Color_1.RGBAcolor(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random());
        }
    }
}
exports.RandomColoredCyclicQuad = RandomColoredCyclicQuad;
