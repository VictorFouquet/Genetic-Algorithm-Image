import { ColorConverter } from "../src/ColorConverter";
import { RGBAcolor } from "../src/RGBAcolor";
import { HSLAcolor } from "../src/HSLAcolor";
import { colors } from "./TestColors";

/**
 * Color space conversion can be prone to rounding imprecisions,
 * and one rgba color can sometimes be written with several different
 * hsla values.
 * Testing values used in this test suite were taken from  w3schools color picker 
 * and may differ from corresponding values in other online color pickers apps.
 * https://www.w3schools.com/colors/colors_picker.asp
 */
describe("Testing ColorConverter", () => {
    const colorConverter: ColorConverter = new ColorConverter();

    it("Should convert HSLA color to RGBA color", () => {
        const testedLightCyan: RGBAcolor = colorConverter.hslaToRgba(colors.lightCyan.hsla);
        expect(testedLightCyan).toEqual(colors.lightCyan.rgba);

        const testedDarkCyan: RGBAcolor = colorConverter.hslaToRgba(colors.darkCyan.hsla);
        expect(testedDarkCyan).toEqual(colors.darkCyan.rgba);

        const testedLightBlue: RGBAcolor = colorConverter.hslaToRgba(colors.lightBlue.hsla);
        expect(testedLightBlue).toEqual(colors.lightBlue.rgba);

        const testedDarkBlue: RGBAcolor = colorConverter.hslaToRgba(colors.darkBlue.hsla);
        expect(testedDarkBlue).toEqual(colors.darkBlue.rgba);

        const testedLightMagenta: RGBAcolor = colorConverter.hslaToRgba(colors.lightMagenta.hsla);
        expect(testedLightMagenta).toEqual(colors.lightMagenta.rgba);

        const testedDarkMagenta: RGBAcolor = colorConverter.hslaToRgba(colors.darkMagenta.hsla);
        expect(testedDarkMagenta).toEqual(colors.darkMagenta.rgba);
        
        const testedLightRed: RGBAcolor = colorConverter.hslaToRgba(colors.lightRed.hsla);
        expect(testedLightRed).toEqual(colors.lightRed.rgba);

        const testedDarkRed: RGBAcolor = colorConverter.hslaToRgba(colors.darkRed.hsla);
        expect(testedDarkRed).toEqual(colors.darkRed.rgba);

        const testedLightOrange: RGBAcolor = colorConverter.hslaToRgba(colors.lightOrange.hsla);
        expect(testedLightOrange).toEqual(colors.lightOrange.rgba);

        const testedDarkOrange: RGBAcolor = colorConverter.hslaToRgba(colors.darkOrange.hsla);
        expect(testedDarkOrange).toEqual(colors.darkOrange.rgba);

        const testedLightYellow: RGBAcolor = colorConverter.hslaToRgba(colors.lightYellow.hsla);
        expect(testedLightYellow).toEqual(colors.lightYellow.rgba);

        const testedDarkYellow: RGBAcolor = colorConverter.hslaToRgba(colors.darkYellow.hsla);
        expect(testedDarkYellow).toEqual(colors.darkYellow.rgba);

        const testedLightGreen: RGBAcolor = colorConverter.hslaToRgba(colors.lightGreen.hsla);
        expect(testedLightGreen).toEqual(colors.lightGreen.rgba);

        const testedDarkGreen: RGBAcolor = colorConverter.hslaToRgba(colors.darkGreen.hsla);
        expect(testedDarkGreen).toEqual(colors.darkGreen.rgba);
    })

    it("Should convert RGBA color to HSLA color", () => {
        const testedLightCyan: HSLAcolor = colorConverter.rgbaToHsla(colors.lightCyan.rgba);
        expect(testedLightCyan).toEqual(colors.lightCyan.hsla);

        const testedDarkCyan: HSLAcolor = colorConverter.rgbaToHsla(colors.darkCyan.rgba);
        expect(testedDarkCyan).toEqual(colors.darkCyan.hsla);

        const testedLightBlue: HSLAcolor = colorConverter.rgbaToHsla(colors.lightBlue.rgba);
        expect(testedLightBlue).toEqual(colors.lightBlue.hsla);

        const testedDarkBlue: HSLAcolor = colorConverter.rgbaToHsla(colors.darkBlue.rgba);
        expect(testedDarkBlue).toEqual(colors.darkBlue.hsla);

        const testedLightMagenta: HSLAcolor = colorConverter.rgbaToHsla(colors.lightMagenta.rgba);
        expect(testedLightMagenta).toEqual(colors.lightMagenta.hsla);

        const testedDarkMagenta: HSLAcolor = colorConverter.rgbaToHsla(colors.darkMagenta.rgba);
        expect(testedDarkMagenta).toEqual(colors.darkMagenta.hsla);
        
        const testedLightRed: HSLAcolor = colorConverter.rgbaToHsla(colors.lightRed.rgba);
        expect(testedLightRed).toEqual(colors.lightRed.hsla);

        const testedDarkRed: HSLAcolor = colorConverter.rgbaToHsla(colors.darkRed.rgba);
        expect(testedDarkRed).toEqual(colors.darkRed.hsla);

        const testedLightOrange: HSLAcolor = colorConverter.rgbaToHsla(colors.lightOrange.rgba);
        expect(testedLightOrange).toEqual(colors.lightOrange.hsla);

        const testedDarkOrange: HSLAcolor = colorConverter.rgbaToHsla(colors.darkOrange.rgba);
        expect(testedDarkOrange).toEqual(colors.darkOrange.hsla);

        const testedLightYellow: HSLAcolor = colorConverter.rgbaToHsla(colors.lightYellow.rgba);
        expect(testedLightYellow).toEqual(colors.lightYellow.hsla);

        const testedDarkYellow: HSLAcolor = colorConverter.rgbaToHsla(colors.darkYellow.rgba);
        expect(testedDarkYellow).toEqual(colors.darkYellow.hsla);

        const testedLightGreen: HSLAcolor = colorConverter.rgbaToHsla(colors.lightGreen.rgba);
        expect(testedLightGreen).toEqual(colors.lightGreen.hsla);

        const testedDarkGreen: HSLAcolor = colorConverter.rgbaToHsla(colors.darkGreen.rgba);
        expect(testedDarkGreen).toEqual(colors.darkGreen.hsla);
    })

    it ("Should convert RGBA to hex", () => {
        const testedLightCyan: RGBAcolor = colorConverter.hexToRGBA(colors.lightCyan.hex);
        expect(testedLightCyan).toEqual(colors.lightCyan.rgba);

        const testedDarkCyan: RGBAcolor = colorConverter.hexToRGBA(colors.darkCyan.hex);
        expect(testedDarkCyan).toEqual(colors.darkCyan.rgba);

        const testedLightBlue: RGBAcolor = colorConverter.hexToRGBA(colors.lightBlue.hex);
        expect(testedLightBlue).toEqual(colors.lightBlue.rgba);

        const testedDarkBlue: RGBAcolor = colorConverter.hexToRGBA(colors.darkBlue.hex);
        expect(testedDarkBlue).toEqual(colors.darkBlue.rgba);

        const testedLightMagenta: RGBAcolor = colorConverter.hexToRGBA(colors.lightMagenta.hex);
        expect(testedLightMagenta).toEqual(colors.lightMagenta.rgba);

        const testedDarkMagenta: RGBAcolor = colorConverter.hexToRGBA(colors.darkMagenta.hex);
        expect(testedDarkMagenta).toEqual(colors.darkMagenta.rgba);
        
        const testedLightRed: RGBAcolor = colorConverter.hexToRGBA(colors.lightRed.hex);
        expect(testedLightRed).toEqual(colors.lightRed.rgba);

        const testedDarkRed: RGBAcolor = colorConverter.hexToRGBA(colors.darkRed.hex);
        expect(testedDarkRed).toEqual(colors.darkRed.rgba);

        const testedLightOrange: RGBAcolor = colorConverter.hexToRGBA(colors.lightOrange.hex);
        expect(testedLightOrange).toEqual(colors.lightOrange.rgba);

        const testedDarkOrange: RGBAcolor = colorConverter.hexToRGBA(colors.darkOrange.hex);
        expect(testedDarkOrange).toEqual(colors.darkOrange.rgba);

        const testedLightYellow: RGBAcolor = colorConverter.hexToRGBA(colors.lightYellow.hex);
        expect(testedLightYellow).toEqual(colors.lightYellow.rgba);

        const testedDarkYellow: RGBAcolor = colorConverter.hexToRGBA(colors.darkYellow.hex);
        expect(testedDarkYellow).toEqual(colors.darkYellow.rgba);

        const testedLightGreen: RGBAcolor = colorConverter.hexToRGBA(colors.lightGreen.hex);
        expect(testedLightGreen).toEqual(colors.lightGreen.rgba);

        const testedDarkGreen: RGBAcolor = colorConverter.hexToRGBA(colors.darkGreen.hex);
        expect(testedDarkGreen).toEqual(colors.darkGreen.rgba);
    })

    it ("Should convert hex to RGBA", () => {
        const testedLightCyan: string = colorConverter.rgbaToHex(colors.lightCyan.rgba);
        expect(testedLightCyan).toEqual(colors.lightCyan.hex);

        const testedDarkCyan: string = colorConverter.rgbaToHex(colors.darkCyan.rgba);
        expect(testedDarkCyan).toEqual(colors.darkCyan.hex);

        const testedLightBlue: string = colorConverter.rgbaToHex(colors.lightBlue.rgba);
        expect(testedLightBlue).toEqual(colors.lightBlue.hex);

        const testedDarkBlue: string = colorConverter.rgbaToHex(colors.darkBlue.rgba);
        expect(testedDarkBlue).toEqual(colors.darkBlue.hex);

        const testedLightMagenta: string = colorConverter.rgbaToHex(colors.lightMagenta.rgba);
        expect(testedLightMagenta).toEqual(colors.lightMagenta.hex);

        const testedDarkMagenta: string = colorConverter.rgbaToHex(colors.darkMagenta.rgba);
        expect(testedDarkMagenta).toEqual(colors.darkMagenta.hex);
        
        const testedLightRed: string = colorConverter.rgbaToHex(colors.lightRed.rgba);
        expect(testedLightRed).toEqual(colors.lightRed.hex);

        const testedDarkRed: string = colorConverter.rgbaToHex(colors.darkRed.rgba);
        expect(testedDarkRed).toEqual(colors.darkRed.hex);

        const testedLightOrange: string = colorConverter.rgbaToHex(colors.lightOrange.rgba);
        expect(testedLightOrange).toEqual(colors.lightOrange.hex);

        const testedDarkOrange: string = colorConverter.rgbaToHex(colors.darkOrange.rgba);
        expect(testedDarkOrange).toEqual(colors.darkOrange.hex);

        const testedLightYellow: string = colorConverter.rgbaToHex(colors.lightYellow.rgba);
        expect(testedLightYellow).toEqual(colors.lightYellow.hex);

        const testedDarkYellow: string = colorConverter.rgbaToHex(colors.darkYellow.rgba);
        expect(testedDarkYellow).toEqual(colors.darkYellow.hex);

        const testedLightGreen: string = colorConverter.rgbaToHex(colors.lightGreen.rgba);
        expect(testedLightGreen).toEqual(colors.lightGreen.hex);

        const testedDarkGreen: string = colorConverter.rgbaToHex(colors.darkGreen.rgba);
        expect(testedDarkGreen).toEqual(colors.darkGreen.hex);
    })
})