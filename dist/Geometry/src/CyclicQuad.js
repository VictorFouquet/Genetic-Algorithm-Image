"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclicQuad = void 0;
const Point_1 = require("./Point");
const Quad_1 = require("./Quad");
class CyclicQuad extends Quad_1.Quad {
    constructor(circle) {
        super([new Point_1.Point(), new Point_1.Point(), new Point_1.Point(), new Point_1.Point()]);
        this._circle = circle;
        this.computePoints();
    }
    get circle() { return this._circle; }
    computePoints() {
        const t1 = Math.random();
        const t2 = t1 + Math.random();
        const t3 = t2 + Math.random();
        const t4 = t3 + Math.random();
        const sum = t1 + t2 + t3 + t4;
        const offset = Math.random() * 360;
        const angles = [
            t1 / sum * 360 + offset,
            (t1 + t2) / sum * 360 + offset,
            (t1 + t2 + t3) / sum * 360 + offset,
            (t1 + t2 + t3 + t4) / sum * 360 + offset
        ];
        for (let i = 0; i < angles.length; i++) {
            const radAngle = angles[i] * Math.PI / 180;
            this._points[i] = new Point_1.Point(this._circle.radius * Math.cos(radAngle) + this._circle.center.x, this._circle.radius * Math.sin(radAngle) + this._circle.center.y);
        }
    }
}
exports.CyclicQuad = CyclicQuad;
