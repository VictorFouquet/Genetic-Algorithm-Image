import { _ImageData } from "./ImageData.interface";
export interface _CanvasHandler<Context> {
    context: Context;
    imageData: ImageData;
    width: number;
    height: number;
    beginPath(): void;
    moveTo(x: number, y: number): void;
    clear(color: string): void;
    fill(color: string): void;
    stroke(color: string, width: number): void;
    traceCircle(x: number, y: number, r: number): void;
    traceLine(x1: number, y1: number, x2: number, y2: number): void;
    tracePath(points: number[][]): void;
    tracePolygon(points: number[][], close: boolean): void;
    traceRectangle(x: number, y: number, width: number, height: number): void;
    getImageData(x: number, y: number, width: number, height: number): _ImageData;
}
