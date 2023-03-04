import { _Context2D } from "./interfaces/Context2D.interface";
import { _ImageData } from "./interfaces/ImageData.interface";
/**
 * Abstract class used as an agnostic extension on CanvasRenderingContext2D objects
 */
export declare abstract class Context2D implements _Context2D {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    lineWidth: number;
    abstract beginPath(): void;
    abstract closePath(): void;
    abstract moveTo(x: number, y: number): void;
    abstract lineTo(x: number, y: number): void;
    abstract arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise: boolean): void;
    abstract clearRect(x: number, y: number, width: number, height: number): void;
    abstract fillRect(x: number, y: number, width: number, height: number): void;
    abstract fill(): void;
    abstract stroke(): void;
    abstract getImageData(x: number, y: number, width: number, height: number): _ImageData;
}
