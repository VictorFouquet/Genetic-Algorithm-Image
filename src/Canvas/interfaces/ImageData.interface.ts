/**
 * Wrapper interface used to extend canvas' ImageData objects
 */
export interface _ImageData {
    data: Uint8ClampedArray; // Pixels data of the image
    width: number;           // Width of the image
    height: number;          // Height of the image
}
