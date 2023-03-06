import { _Circle } from "./Circle.interface";
import { _Quad } from "./Quad.interface";

export interface _CyclicQuad extends _Quad {
    circle: _Circle
}