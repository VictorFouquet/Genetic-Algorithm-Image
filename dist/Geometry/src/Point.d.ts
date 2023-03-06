import { _Point } from "./interfaces/Point.interface";
export declare class Point implements _Point {
    protected _x: number;
    protected _y: number;
    constructor(x?: number, y?: number);
    get x(): number;
    get y(): number;
}
