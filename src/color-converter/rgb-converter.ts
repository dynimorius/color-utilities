import { fromRgbConverters } from './convertor-map';
import { RGB, RGBA, RGBA_M, RGB_M } from '../interfaces/color-spaces.interface';
import { RGBResolverMap } from '../interfaces/resolver.interface';
import { RGBConSpaces } from '../types/colors';
import { ColorConverter } from './color-converter';

/**
 * @description
 * A class used to convert a color in RGB color space in to other color spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class RgbConverter extends ColorConverter {
  constructor(color: RGB | RGBA | RGB_M | RGBA_M) {
    super(
      'rgb',
      color,
      fromRgbConverters as unknown as { [key: string]: Function }
    );
  }

  get(converts: RGBConSpaces): any {
    return this.converterMap[converts as keyof RGBResolverMap](this.color);
  }
}
