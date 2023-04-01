import { RGBAcolor } from "../src/RGBAcolor";

describe("Testing RGBAcolor", () => {
    
    // Tests error at instantiation

    it("Should throw an error if instantiating with red value out of range", () => {
        expect(() => { new RGBAcolor(256, 10, 10, 1) }).toThrow(
            "Value for red must be in range [0, 255], received : 256"
        )
        expect(() => { new RGBAcolor(-1, 10, 10, 1) }).toThrow(
            "Value for red must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if instantiating with green value out of range", () => {
        expect(() => { new RGBAcolor(10, 256, 10, 1) }).toThrow(
            "Value for green must be in range [0, 255], received : 256"
        )
        expect(() => { new RGBAcolor(10, -1, 10, 1) }).toThrow(
            "Value for green must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if instantiating with blue value out of range", () => {
        expect(() => { new RGBAcolor(10, 10, 256, 1) }).toThrow(
            "Value for blue must be in range [0, 255], received : 256"
        )
        expect(() => { new RGBAcolor(10, 10, -1, 1) }).toThrow(
            "Value for blue must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if instantiating with alpha value out of range", () => {
        expect(() => { new RGBAcolor(10, 10, 10, 1.1) }).toThrow(
            "Value for alpha must be in range [0, 1], received : 1.1"
        )
        expect(() => { new RGBAcolor(10, 10, 10, -0.1) }).toThrow(
            "Value for alpha must be in range [0, 1], received : -0.1"
        )
    })

    // Tests setters error

    it("Should throw an error if setting red value out of range", () => {
        const color = new RGBAcolor(0, 0, 0, 1);
        expect(() => { color.red = 256 }).toThrow(
            "Value for red must be in range [0, 255], received : 256"
        )
        expect(() => { color.red = -1 }).toThrow(
            "Value for red must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if setting green value out of range", () => {
        const color = new RGBAcolor(0, 0, 0, 1);
        expect(() => { color.green = 256 }).toThrow(
            "Value for green must be in range [0, 255], received : 256"
        )
        expect(() => { color.green = -1 }).toThrow(
            "Value for green must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if setting blue value out of range", () => {
        const color = new RGBAcolor(0, 0, 0, 1);
        expect(() => { color.blue = 256 }).toThrow(
            "Value for blue must be in range [0, 255], received : 256"
        )
        expect(() => { color.blue = -1 }).toThrow(
            "Value for blue must be in range [0, 255], received : -1"
        )
    })

    it("Should throw an error if setting alpha value out of range", () => {
        const color = new RGBAcolor(0, 0, 0, 1);
        expect(() => { color.alpha = 1.1 }).toThrow(
            "Value for alpha must be in range [0, 1], received : 1.1"
        )
        expect(() => { color.alpha = -0.1  }).toThrow(
            "Value for alpha must be in range [0, 1], received : -0.1"
        )
    })

    // Tests css string formating

    it("Should format a RGBAcolor object to a CSS color string", () => {
        const color: RGBAcolor = new RGBAcolor(233, 26, 132, 0.6);
        expect(color.toCssString()).toBe("rgba(233, 26, 132, 0.6)")
    })
})