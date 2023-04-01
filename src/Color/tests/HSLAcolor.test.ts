import { HSLAcolor } from "../src/HSLAcolor";

describe("Testing RGBAcolor", () => {
    
    // Tests error at instantiation

    it("Should throw an error if instantiating with hue value out of range", () => {
        expect(() => { new HSLAcolor(361, 0.5, 0.5, 1) }).toThrow(
            "Value for hue must be in range [0, 360], received : 361"
        )
        expect(() => { new HSLAcolor(-1, 0.5, 0.5, 1) }).toThrow(
            "Value for hue must be in range [0, 360], received : -1"
        )
    })

    it("Should throw an error if instantiating with saturation value out of range", () => {
        expect(() => { new HSLAcolor(10, 1.1, 0.5, 1) }).toThrow(
            "Value for saturation must be in range [0, 1], received : 1.1"
        )
        expect(() => { new HSLAcolor(10, -0.1, 0.5, 1) }).toThrow(
            "Value for saturation must be in range [0, 1], received : -0.1"
        )
    })

    it("Should throw an error if instantiating with lightness value out of range", () => {
        expect(() => { new HSLAcolor(10, 0.5, 1.1, 1) }).toThrow(
            "Value for lightness must be in range [0, 1], received : 1.1"
        )
        expect(() => { new HSLAcolor(10, 0.5, -0.1, 1) }).toThrow(
            "Value for lightness must be in range [0, 1], received : -0.1"
        )
    })

    it("Should throw an error if instantiating with alpha value out of range", () => {
        expect(() => { new HSLAcolor(10, 0.5, 0.5, 1.1) }).toThrow(
            "Value for alpha must be in range [0, 1], received : 1.1"
        )
        expect(() => { new HSLAcolor(10, 0.5, 0.5, -0.1) }).toThrow(
            "Value for alpha must be in range [0, 1], received : -0.1"
        )
    })

    // Tests setters error

    it("Should throw an error if setting hue value out of range", () => {
        const color = new HSLAcolor(0, 0, 0, 1);
        expect(() => { color.hue = 361 }).toThrow(
            "Value for hue must be in range [0, 360], received : 361"
        )
        expect(() => { color.hue = -1 }).toThrow(
            "Value for hue must be in range [0, 360], received : -1"
        )
    })

    it("Should throw an error if setting saturation value out of range", () => {
        const color = new HSLAcolor(0, 0, 0, 1);
        expect(() => { color.saturation = 1.1 }).toThrow(
            "Value for saturation must be in range [0, 1], received : 1.1"
        )
        expect(() => { color.saturation = -0.1 }).toThrow(
            "Value for saturation must be in range [0, 1], received : -0.1"
        )
    })

    it("Should throw an error if setting lightness value out of range", () => {
        const color = new HSLAcolor(0, 0, 0, 1);
        expect(() => { color.lightness = 1.1 }).toThrow(
            "Value for lightness must be in range [0, 1], received : 1.1"
        )
        expect(() => { color.lightness = -0.1 }).toThrow(
            "Value for lightness must be in range [0, 1], received : -0.1"
        )
    })

    it("Should throw an error if setting alpha value out of range", () => {
        const color = new HSLAcolor(0, 0, 0, 1);
        expect(() => { color.alpha = 1.1 }).toThrow(
            "Value for alpha must be in range [0, 1], received : 1.1"
        )
        expect(() => { color.alpha = -0.1  }).toThrow(
            "Value for alpha must be in range [0, 1], received : -0.1"
        )
    })

    // Tests css string formating

    it("Should format a HSLAcolor object to a CSS color string", () => {
        const color: HSLAcolor = new HSLAcolor(233, 0.75, 0.01, 0.6);
        expect(color.toCssString()).toBe("hsla(233, 75%, 1%, 0.6)")
    })
})