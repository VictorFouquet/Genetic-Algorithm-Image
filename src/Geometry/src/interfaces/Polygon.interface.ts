import { _Point } from "./Point.interface";
import { _Shape } from "./Shape.interface";

export interface _Polygon extends _Shape {
    points: _Point[]
}