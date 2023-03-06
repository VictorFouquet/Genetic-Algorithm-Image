import { _CyclicQuad } from "./interfaces/CyclicQuad.interface";
import { Circle } from "./Circle";
import { Point } from "./Point";
import { Quad } from "./Quad";

export class CyclicQuad extends Quad implements _CyclicQuad {
    protected _circle: Circle

    constructor(circle: Circle) {
        super([new Point(), new Point(), new Point(), new Point()])
        this._circle = circle;
        this.computePoints();
    }

    get circle(): Circle { return this._circle; }
    
    private computePoints() {
        const t1:     number = Math.random();
        const t2:     number = t1 + Math.random();
        const t3:     number = t2 + Math.random();
        const t4:     number = t3 + Math.random();
        const sum:    number = t1 + t2 + t3 + t4;
        const offset: number = Math.random() * 360
        const angles: [number, number, number, number] = [
            t1/sum            * 360 + offset,
            (t1+t2)/sum       * 360 + offset,
            (t1+t2+t3)/sum    * 360 + offset,
            (t1+t2+t3+t4)/sum * 360 + offset
        ]

        for (let i = 0; i < angles.length; i++) {
            const radAngle = angles[i] * Math.PI / 180;
            this._points[i] = new Point(
                this._circle.radius * Math.cos(radAngle) + this._circle.center.x,
                this._circle.radius * Math.sin(radAngle) + this._circle.center.y
            )
        }
    }
}