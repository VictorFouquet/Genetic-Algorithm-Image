import { _ImageData } from "./ImageData.interface";
/**
 * Wrapper interface used to extend CanvasRenderingContext2D objects
 */
export interface _Context2D {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    lineWidth: number;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise: boolean): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    fill(): void;
    stroke(): void;
    getImageData(x: number, y: number, width: number, height: number): _ImageData;
}
