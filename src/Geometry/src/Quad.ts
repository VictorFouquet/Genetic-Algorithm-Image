import { _Quad } from "./interfaces/Quad.interface";
import { Polygon } from "./Polygon";
import { Points4 } from "./types/Points4.type";

export class Quad extends Polygon implements _Quad {
    protected _points: Points4

    constructor(points: Points4) {
        super(points);
    }

    get points() { return this._points; }
}