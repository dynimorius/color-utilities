# Color Utilities

#### _Tools for all your color needs_

Color utilities is a collection of tools used to work with colors.

## Features

- Color conversions (ansi16, ansi256, cmy, cmyk, tsl, hsl, hsv, lab, luv, lch xyz ...)
- Color blending
- Color harmony palet creation
- Color mixers ( such as getting shades, tints and tones)
- Performing Chromatic adaptation

## Table of Contents

- [Color Utilities](#color-utilities) - [_Tools for all your color needs_](#tools-for-all-your-color-needs)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [About Color Utilities](#about-color-utilities)
    - [Limits](#limits)
  - [Documentation](#documentation)
    - [Dependencies](#dependencies)
    - [Importing](#importing)
  - [Color](#color)
  - [Conversions](#conversions)
  - [Color Converter](#color-converter)
    - [RGB Converter](#rgb-converter)
    - [XYZ Converter](#xyz_converter)
  - [Color Blending](#color_blending)
    - [Blender](#blender)
    - [blend](#blend)
  - [Color Harmonies](#color_harmonies)
    - [Analogous](#analogous)
    - [Clash](#clash)
    - [Complementary](#complementary)
    - [Split Complementary](#split_complementary)
    - [Four Tone](#four_tone)
    - [Five Tone](#five_tone)
    - [Six Tone](#six_tone)
    - [Neutral](#neutral)
    - [Square](#square)
    - [Tetradic](#tetradic)
    - [Triadic](#triadic)
  - [Color Mixes](#color_mixes)
    - [Tones](#tones)
    - [Tints](#tints)
    - [Shades](#shades)
  - [Chromatic adaptation](#chromatic_adaptation)
    - [adapt](#adapt)
    - [Adapter](#adapter)

## [About Color Utilities](#about_color_utilities)

Color Utilities aims to be a one-stop shop for any work related to colors, mostly built with pure functions
One can use as little or as much of it as needed or wanted, avoiding unneeded project bloating.
In the future, this library will most probably grow further.

### [Limits](#limits)

<a name="limits"></a>
Due to the nature of color spaces, certain conversions are more computationally taxing than others.
Further, certain conversions lead to data loss like RGB to Ansi16 and then back to RGB will most probably result in a
significant difference in color.

## [Documentation](#documentation)

<a name="documentation"></a>

```sh
npm install --save @dynamize/color-utilities
```

### [Dependencies](#dependencies)

<a name="dependencies"></a>
This library has no dependencies and is completely self-contained.

### [Importing](#importing)

<a name="importing"></a>
Importing is done using the ES static import declaration.
Example:

```javascript
import { Color } from "@dynamize/color-utilities";
```

In order to use the import declaration in a source file, the file must be interpreted by the runtime as a
module.

## [Color](#color)

<a name="color"></a>
A Color class is a representation of a color in Color Utilities. Use cse for this is when you know you will need
values for more then one color space.

Usage examples:

```javascript
import { Color } from "@dynamize/color-utilities";

const color = new Color("rgb", { red: 238, green: 200, blue: 27 });

console.log(color.data);
```

| Param place | Description                           |     | Formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------------------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1st         | Space in wich color values are passed |     | adobe_98_rgb", "apple_rgb", "ansi16", "ansi256", "best_rgb", "beta_rgb", "bruce_rgb", "cie_rgb", "color_match_rgb", "cmy", "cmyk", "don_rgb_4", "eci_rgb_v2" "etka_space_ps5", "hcy", "hex", "hsi", "hsl", "hsv", "hunter_lab", "hwb", "lab", "lch_ab", "lch_uv", "luv", "lms", "ntsc_rgb", "pal_secam_rgb", "pro_photo_rgb", "rgb", "ryb", "tsl", "smpte_c_rgb", "wide_gamut_rgb", "uvw","xvycc", "xyy", "xyz", "ycbcr_BT601", "yccbccrc", "ycocg", "ydbdr", "yiq", "ypbpr" |
| 2nd         | Color values                          |     | number, string, or color data object                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3rd         | optional - colors spaces to comput    |     | string [] of "all"                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

- The first argument we pass is a string value and it represents the space in which color values will be passed.
- The second argument is the actual color values and it's passed in form of an object.
- The third argument is optional and has a form of string array or a string "all", if not passed, automatically
  values for hex, hvs, lab, and cmyk, will be computed, alternatively color spaces listed in the array will be
  computed.

The result of the above example is:

```javascript
 Color {
  rgb: { red: 238, green: 200, blue: 27, inGamut: true },
  xyz: { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  hex: 'EEC81B',
  hsv: { hue: 49, saturation: 89, value: 93 },
  lab: {
    luminance: 81.60296053275202,
    a: -1.2482727232548951,
    b: 79.33052440955292
 },
 cmyk: {
   cyan: 0,
   magenta: 15.96638655462185,
   yellow: 88.65546218487395,
   key: 6.666666666666665
  }
 }
```

Lets see an alternative use:

```javascript
import { Color } from "@dynamize/color-utilities";

const color = new Color("rgb", { red: 238, green: 200, blue: 27 }, [
  "hsl",
  "luv",
  "ryb",
  "tsl",
]);

console.log(color.data);
```

Result from the above example would be:

```javascript
Color {
  rgb: { red: 238, green: 200, blue: 27, inGamut: true },
  xyz: { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  hsl: { hue: 49, saturation: 86, lightness: 52 },
  luv: { L: 81.60296053275202, u: 33.50413039331645, v: 84.4716716630059 },
  ryb: { red: 63.346820809248555, yellow: 228, blue: 17 },
  tsl: {
    tint: 0.4209301051592921,
    saturation: 0.27240784750042124,
    lightness: 0.7515294117647058
  }
}
```

Note:
If you noticed RGB and XYZ values are returned regardless, they are needed for two main family of spaces and
there for are computed by default.

If "all" is passed as a third argument, all 45 spaces will be computed (the return example is to big to show here),
this option is computationally tasking and it's not a good option for color pickers or other use cases where there
is a high frequency of re computation. Expediently the default (no third argument) will return values utilized in
a Photoshop color picker (rgb, hsv, lab, cmyk and hex).
|

## [Conversions](#conversions)

<a name="conversions"></a>

Here is a list of all color conversion methods, they are standalone, and can be utilized on their own.
Some of them might have multiple conversions and that will be stated in the table.

| Name                | Description                                          | Conversions              | Notes              | Parameter                                                      |
| ------------------- | ---------------------------------------------------- | ------------------------ | ------------------ | -------------------------------------------------------------- |
| ansi16ToRgb         | Converts an Ansi16 numeric value to sRGB values      | Ansi16 to sRGB           | Possible data loss | number                                                         |
| ansi256ToRGB        | Converts an Ansi256 numeric value ro sRGB values     | Ansi256 to sRGB          | Possible data loss | number                                                         |
| cmyToSRgb           | Converts colors CMY values in to sRGB values         | CYM to sRGB              | No major data loss | { cyan: number, magenta: number, yellow: number}               |
| cmykToRgb           | Converts colors CMYK values in to sRGB values        | CMYK to sRGB             | No major data loss | { cyan: number, magenta: number, yellow: number, key: number } |
| hclToLab            | Converts colors HCL values in to CIE-L\*ab values    | HCL to LAB               | No major data loss | { luminance: number, hue: number, chroma: number }             |
| hcyToSrgb           | Converts colors HCY values in to sRGB values         | HCY to sRGB              | No major data loss | { hue: number, chroma: number, Yluminance: number }            |
| hexToRgb            | Converts a HEX string value in to sRGB values        | HEX to sRGB              | No major data loss | string                                                         |
| hextToInt           | Converts a Hex string value in to a integer value    | HEX to Integer           |                    | string                                                         |
| hexToDecimal        | Converts a Hex string value in to a decimal value    | HEX to Decimal           |                    | string                                                         |
| hsiToSrgb           | Converts a colors HSI values in to sRGB values       | HSI to sRGB              | No major data loss | { hue: number, saturation: number, intensity: number }         |
| hslToToHex          | Converts a colors HSL values in to a HEX string      | HSL to HEX               | No major data loss | { hue: number, saturation: number, lightness: number }         |
| hslToHsv            | Converts a colors HSL values in to HSV values        | HSL to HSV               | No major data loss | { hue: number, saturation: number, lightness: number }         |
| hslToRgb            | Converts a colors HSL values in to sRGB values       | HSL to sRGB              | No major data loss | { hue: number, saturation: number, lightness: number }         |
| hsvToAnsi16         | Converts a colors HSV values in to Ansi16 numeric    | HSV to Ansi16            | Possible data loss | { hue: number, saturation: number, value: number }             |
| hsvToHsl            | Converts a colors HSV values in to HSL values        | HSV to HSL               | No major data loss | { hue: number, saturation: number, value: number }             |
| hsvToRgb            | Converts a colors HSV values in to sRGB values       | HSV to sRGB              | No major data loss | { hue: number, saturation: number, value: number }             |
| hwbToRgb            | Converts a colors HWB values in to sRGB values       | HWB to sRGB              | No major data loss | { hue: number, whiteness: number, blackness: number }          |
| labToLch_ab         | Converts a colors CIE-L\*ab values in to LCH(ab)     | LAB to LCH               | No major data loss | { luminance: number, a: number, b: number }                    |
| labToSrgb           | Converts a colors CIE-L\*ab values in to sRgb        | LAB to XYZ to sRGB       | No major data loss | { luminance: number, a: number, b: number }                    |
| labToXyz            | Converts a colors CIE-L\*ab values in to XYZ         | LAB to XYZ               | No major data loss | { luminance: number, a: number, b: number }                    |
| hunterLabToXyz      | Converts a colors Hunter's Lab values in to XYZ      | LAB to XYZ               | No major data loss | { luminance: number, a: number, b: number }                    |
| lch_abToLab         | Converts a colors LCH(ab) values in to CIE-L\*ab     | LCH to LAB               | No major data loss | { lightness: number, chroma: number, hue: number }             |
| lch_abToXyz         | Converts a colors LCH(ab) values in to XYZ           | LCH to XYZ               | No major data loss | { lightness: number, chroma: number, hue: number }             |
| lch_uvToLuv         | Converts a colors LCH(uv) values in to LUV           | LCH to LUV               | No major data loss | { lightness: number, chroma: number, hue: number }             |
| lch_uvToXyz         | Converts a colors LCH(uv) values in to XYZ           | LCH to XYZ               | No major data loss | { lightness: number, chroma: number, hue: number }             |
| lmsToXyz            | Converts a colors LMS values in to XYZ values        | LMS to XYZ               | No major data loss | { long: number, medium: number, short: number }                |
| luvToLch_uv         | Converts a colors LUV values to LCH(uv) values       | LUV to LCH               | No major data loss | { L: number, u: number, v: number }                            |
| luvToXyz            | Converts a colors LUV values to XYZ values           | LUV to XYZ               | No major data loss | { L: number, u: number, v: number }                            |
| sRgbToAdobeRgb      | Converts a colors sRGB values in to Adobe 98 RGB     | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToAppleRgb      | Converts a colors sRGB values in to Apple RGB        | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToBestRgb       | Converts a colors sRGB values in to Best RGB         | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToBetaRgb       | Converts a colors sRGB values in to Beta RGB         | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToBruceRgb      | Converts a colors sRGB values in to Bruce RGB        | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToCieRgb        | Converts a colors sRGB values in to CIE RGB          | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToColorMatchRgb | Converts a colors sRGB values in to Color Match RGB  | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToDonRgb4       | Converts a colors sRGB values in to DON RGB 4        | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToEtkaSpacePs5  | Converts a colors sRGB values in to Etka Space ps5   | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToNtscRgb       | Converts a colors sRGB values in to NTSC RGB         | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToPalSecamRgb   | Converts a colors sRGB values in to PAL/SECAM RGB    | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToProPhotoRgb   | Converts a colors sRGB values in to PRO PHOTO RGB    | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToSmpteCRgb     | Converts a colors sRGB values in to SMPTE-C RGB      | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToWideGamutRgb  | Converts a colors sRGB values in to Wide Gamut RGB   | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToEciRgbV2      | Converts a colors sRGB values in to ECI RGB V2       | RGB to XYZ to RGB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToAnsi16        | Converts a colors sRGB values in to Ansi16 numeric   | RGB to Ansi16            | Possible data loss | { red: number, green: number, blue: number }                   |
| sRgbToAnsi256       | Converts a colors sRGB values in to Ansi256 numeric  | RGB to Ansi256           | Possible data loss | { red: number, green: number, blue: number }                   |
| sRgbToCmy           | Converts a colors sRGB values in to CMY values       | RGB to CMY               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToCmyk          | Converts a colors sRGB values in to CMYK values      | RGB to CMYK              | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHcy           | Converts a colors sRGB values in to HCY values       | RGB to HCY               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHex           | Converts a colors sRGB values in to a HEX string     | RGB to HEX               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbaToHex          | Converts a colors sRGBA values in to a HEX string    | RGBA to HEX              | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHsi           | Converts a colors sRGB values in to HSI values       | RGB to HSI               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHsl           | Converts a colors sRGB values in to HSL values       | RGB to HSL               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHsv           | Converts a colors sRGB values in to HSV values       | RGB to HSV               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToHwg           | Converts a colors sRGB values in to HSV values       | RGB to HWG               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToLab           | Converts a colors sRGB values in to CIE-L\*ab values | RGB to XYZ to LAB        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToLch_ab        | Converts a colors sRGB values in to LCH(ab) values   | RGB to XYZ to LAB to LCH | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToLch_uv        | Converts a colors sRGB values in to LCH(uv) values   | RGB to XYZ to LUV to LCH | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToLuv           | Converts a colors sRGB values in to LUV values       | RGB to XYZ to LUV        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToRyb           | Converts a colors sRGB values in to RYB values       | RGB to RYB               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToTsl           | Converts a colors sRGB values in to TSL values       | RGB to TSL               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToUvq           | Converts a colors sRGB values in to UVW values       | RGB to XYZ to UVW        | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYCbCrBT601    | Converts a colors sRGB values in to Y′CbCr (YUV)     | RGB to YCbCr             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYCbCrBT709    | Converts a colors sRGB values in to Y′CbCr BT.709    | RGB to YCbCr             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYDbDr         | Converts a colors sRGB values in to YDbDr values     | RGB to YDbDr             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYPbPr         | Converts a colors sRGB values in to YPbPr values     | RGB to YPbPr             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYcCbcCrc      | Converts a colors sRGB values in to YcCbcCrc values  | RGB to YcCbcCrc          | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYCgCo         | Converts a colors sRGB values in to YCoCg values     | RGB to YCoCg             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToYiq           | Converts a colors sRGB values in to YIQ values       | RGB to YIQ               | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToXvYcc         | Converts a colors sRGB values in to xvYCC values     | RGB to xvYCC             | No major data loss | { red: number, green: number, blue: number }                   |
| sRgbToXyz           | Converts a colors sRGB values in to XYZ values       | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| adobeRgbToXyz       | Converts a colors Adobe 98 vaues in to XYZ values    | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| appleRgbToXyz       | Converts a colors Apple RGB vaues in to XYZ values   | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| bestRgbToXyz        | Converts a colors Best RGB vaues in to XYZ values    | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| betaRgbToXyz        | Converts a colors Beta RGB vaues in to XYZ values    | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| bruceRgbToXyz       | Converts a colors Bruce RGB vaues in to XYZ values   | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| cieRgbToXyz         | Converts a colors CIE RGB vaues in to XYZ values     | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| colorMatchRgbToXyz  | Converts a colors COLOR MATCH RGB vaues in to XYZ    | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| donRgb4ToXyz        | Converts a colors DON RGB 4 vaues in to XYZ values   | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| etkaSpacePs5ToXyz   | Converts a colors ETKA SPACE PS5 vaues in to XYZ     | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| ntscRgbToXyz        | Converts a colors NTSC RGB vaues in to XYZ values    | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| palSecamRgbToXyz    | Converts a colors PAL/SECAM RGB vaues in to XYZ      | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| proPhotoRgbToXyz    | Converts a colors PRO PHOTO RGB vaues in to XYZ      | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| smpteCRgbToXyz      | Converts a colors SMPTE-C RGB vaues in to XYZ        | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| wideGamutRgbToXyz   | Converts a colors WIDE GAMUT RGB vaues in to XYZ     | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| eciRgbV2ToXyz       | Converts a colors ECI RGB V2 vaues in to XYZ         | RGB to XYZ               | No major data loss | { red: number, green: number, blue: number }                   |
| rybToSrgb           | Converts a colors RYB values to a sRGB values        | RYB to RGB               | No majer data loss | { red: number, green: number, blue: number }                   |
| tslToSrgb           | Converts a colors TSL values to a sRGB values        | TSL to RGB               | No majer data loss | { red: number, green: number, blue: number }                   |
| uvwToXyz            | Converts a colors UVW values to a XYZ values         | UVW to XYZ               | No majer data loss | { u: number, v: number, w: number }                            |
| xvYccToYcbcrBT601   | Converts a colors xvYCC values to Y′CbCr (YUV)       | xvYCC to YCbCr           | No majer data loss | { Y: number, Cb: number, Cr: number }                          |
| xvYccToSrgb         | Converts a colors xvYCC values to a SRGB values      | xvYCC to YCbCr to sRGB   | No majer data loss | { Y: number, Cb: number, Cr: number }                          |
| xyYToXyz            | Converts colors xyY values to XYZ values             | XYY to XYZ               | No major data loss | { x: number, y: number, Y: number }                            |
| xyzToAdobeRgb       | Converts colors XYZ values to Adobe 98 values        | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToAppleRgb       | Converts colors XYZ values to Apple RGB values       | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToBestRgb        | Converts colors XYZ values to Best RGB values        | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToBetaRgb        | Converts colors XYZ values to Beta RGB values        | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToBruceRgb       | Converts colors XYZ values to Bruce RGB values       | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToCieRgb         | Converts colors XYZ values to CIE RGB values         | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToColorMatchRgb  | Converts colors XYZ values to COLOR MATCH RGB        | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToDonRgb4        | Converts colors XYZ values to DON RGB 4 values       | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToEtkaSpacePs5   | Converts colors XYZ values to ETKA SPACE PS5 values  | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToNtscRgb        | Converts colors XYZ values to NTSC RGB values        | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToPalSecamRgb    | Converts colors XYZ values to PAL/SECAM RGB values   | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToProPhotoRgb    | Converts colors XYZ values to PRO PHOTO RGB values   | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToSmpteCRgb      | Converts colors XYZ values to SMPTE-C RGB values     | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToWideGamutRgb   | Converts colors XYZ values to WIDE GAMUT RGB values  | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToEciRgbV2       | Converts colors XYZ values to ECI RGB V2 values      | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToLab            | Converts colors XYZ values to CIE-L\*ab values       | XYZ to LAB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToLuv            | Converts colors XYZ values to LUV values             | XYZ to LUV               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToLch_uv         | Converts colors XYZ values to LCH(uv) values         | XYZ to LCH               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToUvw            | Converts colors XYZ values to UVW values             | XYZ to UVW               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToSrgb           | Converts colors XYZ values to sRGB values            | XYZ to RGB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToLms            | Converts colors XYZ values to LMS values             | XYZ to LMS               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToHunterLab      | Converts colors XYZ values to Hunter's Lab values    | XYZ to LAB               | No major data loss | { x: number, y: number, z: number }                            |
| xyzToXyY            | Converts colors XYZ values to XYY values             | XYZ to XYY               | No major data loss | { x: number, y: number, z: number }                            |
| yCbCrBT601ToSrgb    | Converts colors Y′CbCr (YUV) values to sRGB vlues    | YCbCr to RGB             | No major data loss | { Y: number, Cb: number, Cr: number }                          |
| yCbCrBT601ToXvYcc   | Converts colors Y′CbCr (YUV) values to xvYCC vlues   | YCbCr to xvYCC           | No major data loss | { Y: number, Cb: number, Cr: number }                          |
| yCbCrBT601ToYPbPr   | Converts colors Y′CbCr (YUV) values to YPbPr vlues   | YCbCr to YPbPr           | No major data loss | { Y: number, Cb: number, Cr: number }                          |
| yCbCrBT709ToSrgb    | Converts colors Y′CbCr BT.709 values to sRGB vlues   | YCbCr to RGB             | No major data loss | { Y: number, Cb: number, Cr: number }                          |
| ycCbcCrcToSrgb      | Converts colors YcCbcCrc values to sRGB vlues        | YcCbcCrc to RGB          | No major data loss | { Yc: number, Cbc: number, Crc: number }                       |
| yCgCoToSrgb         | Converts colors YCoCg values to sRGB vlues           | YCoCg to RGB             | No major data loss | { Y: number, Co: number, Cg: number }                          |
| yDbDrToSrgb         | Converts colors YDbDr values to sRGB vlues           | YDbDr to RGB             | No major data loss | { Y: number, Co: number, Cg: number }                          |
| yiqToSrgb           | Converts colors YIQ values to sRGB vlues             | YIQ to RGB               | No major data loss | { Y: number, Co: number, Cg: number }                          |
| yPbPrToSrgb         | Converts colors YPbPr values to sRGB vlues           | YPbPr to RGB             | No major data loss | { Y: number, Co: number, Cg: number }                          |
| yPbPrToYCbCr        | Converts colors YPbPr values to YCbCr vlues          | YPbPr to YCbCr           | No major data loss | { Y: number, Co: number, Cg: number }                          |

## Color Converter

<a name="color_converter"></a>

In situations where you might need to covert from one space into multiple spaces, you can use a color converter.
Color Converter is faster and less task-intensive than using Color. There are two prebuilt Color Converters,
RGB Converter and the XYZ Converter.

### [RGB Converter](#rgb_converter)

<a name="rgb_converter"></a>

RGB Converter is a prebuilt Color Converter that takes a single attribute of a type:
{ red: number, green: number, blue: number } or { r: number, g: number, b: number }.

It has a single method, "get" and it takes an attribute of type string which represents a color space you would like back.
Supported conversion are:
adobe_98_rgb,
apple_rgb,
ansi16,
ansi256,
best_rgb,
beta_rgb,
bruce_rgb,
cie_rgb,
color_match_rgb,
cmy,
cmyk,
don_rgb_4,
etka_space_ps5,
eci_rgb_v2,
hcy,
hex,
hsi,
hsl,
hsv,
hwb,
lab,
lch_ab,
lch_uv,
luv,
ntsc_rgb,
pal_secam_rgb,
pro_photo_rgb,
ryb,
smpte_c_rgb,
tsl,
uvw,
wide_gamut_rgb,
ycbcr_BT601,
ycbcr_BT709,
ycbcr_BT2020,
ydbdr,
ypbpr,
yccbccrc,
ycocg,
yiq,
xvycc,
xyz.

Usage example:

```javascript
import { RgbConverter } from "@dynamize/color-utilities";

const rgbCon = new RgbConverter({ red: 238, green: 200, blue: 27 });

console.log(rgbCon.get("hsv"));
```

This will return HSV values for the above-given color.

### [XYZ Converter](#xyz_converter)

<a name="xyz_converter"></a>

XYZ Converter is a prebuilt Color Converter that takes a single attribute of a type:
{ x: number, y: number, z: number }.

It has a single method, "get" and it takes an attribute of type string which represents a color space you would like back.
Supported conversion are:
lab,
lch_ab,
lch_uv,
luv,
uvw,
rgb,
adobe_98_rgb,
apple_rgb,
best_rgb,
beta_rgb,
bruce_rgb,
cie_rgb,
color_match_rgb,
don_rgb_4,
etka_space_ps5,
eci_rgb_v2,
ntsc_rgb,
pal_secam_rgb,
pro_photo_rgb,
smpte_c_rgb,
wide_gamut_rgb,
xyy,
lms,
hunters_lab.

Usage example:

```javascript
import { XyzConverter } from "@dynamize/color-utilities";

const xyzCon = new XyzConverter({ red: 238, green: 200, blue: 27 });

console.log(xyzCon.get("luv"));
```

This will return LUV values for the above-given color.

## [Color Blending](#color_blending)

<a name="color_blending"></a>
In Color Utilities, there are two ways you can blend colors: either by using the standalone method "blend" or by using a Color Blender.

### [Blender](#blender)

<a name="blender"></a>
Color Blender is quite powerful, it allows you to blend two colors in rgb ,cmyk, hex, hsl ,hsv, hwb, hex, ryb and xyz formats.
The two colors do not have to be in the same format to blend them, and the returned color can have any of the following formats:
rgb ,cmyk, hex, hsl ,hsv, hwb, hex, ryb, xyz.

Usage example:

```javascript
import { Blender } from "@dynamize/color-utilities";

const color = new Blender(
  { c: 0, m: 7, y: 100, k: 0 },
  { h: 0, s: 100, v: 100 },
  { weight: 0.67, returnType: "hex" }
);

console.log(color.color);
```

Color Blender can return two things: color or blend data. Color will just be a color value in the format that was requested, blend data will give you more information. Below, you can see the blend data for the above example:

```javascript
{
    color1: {
      data: { cyan: 0, magenta: 7, yellow: 100, key: 0 },
      rgb: { red: 255, green: 237.14999999999998, blue: 0, inGamut: true },
      amount: 0.67,
    },
    color2: {
      data: { hue: 0, saturation: 100, value: 100 },
      rgb: { red: 255, green: 0, blue: 0, inGamut: true },
      amount: 0.32999999999999996,
    },
    resultColor: "FF9F00",
  }
```

### [blend](#blend)

<a name="blend"></a>
Using the blend method is pretty straight-forward. It takes three parameters, the first two being the RGB values of colors to blend, and the
last one is a percentage of the first color, the remaining percentage will be allocated to the second one.

Usage example:

```javascript
import { blend } from "@dynamize/color-utilities";

const blended = blend(
  { red: 255, green: 237, blue: 0 },
  { red: 255, green: 0, blue: 0 },
  0.67
);

console.log(blended);
```

## [Color Harmonies](#color_harmonies)

<a name="color_harmonies"></a>

With Color utilities, you can also generate a number of Harmony pallets.
For more information about Harmonies, visit: https://simplified.com/blog/colors/color-harmony
All Harmonies are a standalone functions and they all the a color in a HSL format ({ hue: number, saturation: number, lightness: number }) and return an array of hex values. In addition, in adition the second optional parameter is a boolean, which represents if returned hex values should start with a #.

### [Analogous](#analogous)

<a name="analogous"></a>

Usage example:

```javascript
import { analogousHarmony } from "@dynamize/color-utilities";

const palet = analogousHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Clash](#clash)

<a name="clash"></a>

Usage example:

```javascript
import { clashHarmony } from "@dynamize/color-utilities";

const palet = clashHarmony({ hue: 49, saturation: 86, lightness: 52 }, true);

console.log(palet);
```

### [Complementary](#complementary)

<a name="complementary"></a>

Usage example:

```javascript
import { complementaryHarmony } from "@dynamize/color-utilities";

const palet = complementaryHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Split Complementary](#split_complementary)

<a name="split_complementary"></a>

Usage example:

```javascript
import { splitComplementaryHarmony } from "@dynamize/color-utilities";

const palet = splitComplementaryHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { splitComplementaryCWHarmony } from "@dynamize/color-utilities";

const palet = splitComplementaryCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { splitComplementaryCCWHarmony } from "@dynamize/color-utilities";

const palet = splitComplementaryCCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Four Tone](#four_tone)

<a name="four_tone"></a>

Usage example:

```javascript
import { fourToneCWHarmony } from "@dynamize/color-utilities";

const palet = fourToneCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { fourToneCCWHarmony } from "@dynamize/color-utilities";

const palet = fourToneCCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Five Tone](#five_tone)

<a name="five_tone"></a>

Usage example:

```javascript
import { fiveToneAHarmony } from "@dynamize/color-utilities";

const palet = fiveToneAHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { fiveToneBHarmony } from "@dynamize/color-utilities";

const palet = fiveToneBHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { fiveToneCHarmony } from "@dynamize/color-utilities";

const palet = fiveToneCHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { fiveToneDHarmony } from "@dynamize/color-utilities";

const palet = fiveToneDHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { fiveToneEHarmony } from "@dynamize/color-utilities";

const palet = fiveToneEHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Six Tone](#six_tone)

<a name="six_tone"></a>

Usage example:

```javascript
import { sixToneCWHarmony } from "@dynamize/color-utilities";

const palet = sixToneCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

Usage example:

```javascript
import { sixToneCCWHarmony } from "@dynamize/color-utilities";

const palet = sixToneCCWHarmony(
  { hue: 49, saturation: 86, lightness: 52 },
  true
);

console.log(palet);
```

### [Neutral](#neutral)

<a name="neutral"></a>

Usage example:

```javascript
import { neutralHarmony } from "@dynamize/color-utilities";

const palet = neutralHarmony({ hue: 49, saturation: 86, lightness: 52 }, true);

console.log(palet);
```

### [Square](#square)

<a name="square"></a>

```javascript
import { squareHarmony } from "@dynamize/color-utilities";

const palet = squareHarmony({ hue: 49, saturation: 86, lightness: 52 }, true);

console.log(palet);
```

### [Tetradic](#tetradic)

<a name="tetradic"></a>

```javascript
import { tetradicHarmony } from "@dynamize/color-utilities";

const palet = tetradicHarmony({ hue: 49, saturation: 86, lightness: 52 }, true);

console.log(palet);
```

### [Triadic](#triadic)

<a name="triadic"></a>

```javascript
import { triadicHarmony } from "@dynamize/color-utilities";

const palet = triadicHarmony({ hue: 49, saturation: 86, lightness: 52 }, true);

console.log(palet);
```

## [Color Mixes](#color_mixes)

<a name="color_mixes"></a>

Color Utilities also provides three types of color mixes you can get: Shades, Tints and Tones.
All of these are generated by a standalone function that receives two arguments, the first being a base color in RGB format, and the second one is an optional options object that can have two values: size (number of colors generated in the pallet) and prefixed (boolean stating if the colors should start with a #). The return value is an array of strings representing hex values.

### [Tones](#tones)

<a name="tones"></a>

```javascript
import { getTones } from "@dynamize/color-utilities";

const tones = getTones(
  { red: 238, green: 200, blue: 27 },
  { size: 10, prefixed: true }
);

console.log(palet);
```

### [Tints](#tints)

<a name="tints"></a>

```javascript
import { getTints } from "@dynamize/color-utilities";

const tones = getTints(
  { red: 238, green: 200, blue: 27 },
  { size: 10, prefixed: true }
);

console.log(palet);
```

### [Shades](#shades)

<a name="shades"></a>

```javascript
import { getShades } from "@dynamize/color-utilities";

const tones = getShades(
  { red: 238, green: 200, blue: 27 },
  { size: 10, prefixed: true }
);

console.log(palet);
```

## [Chromatic adaptation](#chromatic_adaptation)

Chromatic adaptation can be preformed in two ways, either by using a standalone "adapt" function or by using an Adapter class.

### [adapt](#adapt)

"adapt" function which takes two arguments, first being XYZ values 0f the color to be adapted, and a string value representing reference illuminant and a destination illuminant.

```javascript
import { adapt } from "@dynamize/color-utilities";

const adapted = adapt({ x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 }, 'A_B');

console.log(adapted);
```
The above example will adapt from a from reference illuminant A to destination illuminant B.

### [Adapter](#adapter)

The Adapter class is a little bit more powerful but slower, it takes two optional arguments, first being color values, second is the color space of those values, if not passed
default values will be for color white in XYZ format.

Here is a table of all available formats and values:


| Param place | Description                           | Formats                                                                                                                                                  |
| ----------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| # 1         | Color data                            | { r: number, g: number, b: number }, { red: number, green: number, blue: number }, { l: number, a: number, b: number }, { luminance: number, a: number, b: number }, { L: number, u: number, v: number }, { l: number, c: number, h: number }, { lightness: number, chroma: number hue: number }, { long: number, medium: number, short: number }, { u: number, v: number, w: number }, { x: number, y: number, Y: number }, { x: number, y: number, z: number } |
| # 2         | Color Space of the given color        |  adobe_98_rgb, apple_rgb, best_rgb, beta_rgb, bruce_rgb, cie_rgb, color_match_rgb, don_rgb_4, eci_rgb_v2, etka_space_ps5, ntsc_rgb, pal_secam_rgb, pro_photo_rgb, rgb, smpte_c_rgb, wide_gamut_rgb |                                                                                                                                                          |


Example 1:

```javascript
import { Adapter } from "@dynamize/color-utilities";

const adapted = new Adapter(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 }
).adapt('A_B');

console.log(adapted);
```


Example 2:

```javascript
import { Adapter } from "@dynamize/color-utilities";

const adapter = new Adapter();
const adapted = adapter.set(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 }
).adapt('A_B');

console.log(adapted);
```
The above example is using the "adapt" method with in the Adapter. The difference being that it takes an optional second argument, which is the desired color space of retuned color values.  

Example 3:

```javascript
import { Adapter } from "@dynamize/color-utilities";

const adapter = new Adapter();
const adapted = adapter.set(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 }
).adapt(
  'A_B', 
  'adobe_98_rgb'
);

console.log(adapted);
```
