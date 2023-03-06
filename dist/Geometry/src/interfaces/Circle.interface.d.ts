import { _Point } from "./Point.interface";
import { _Shape } from "./Shape.interface";
export interface _Circle extends _Shape {
    center: _Point;
    radius: number;
}
