import { _Polygon } from "./interfaces/Polygon.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";
export declare class Polygon extends Shape implements _Polygon {
    protected _points: Point[];
    protected _area: number;
    protected _perimeter: number;
    constructor(points: Point[]);
    get points(): Point[];
    computePerimeter(): number;
    computeArea(): number;
}
