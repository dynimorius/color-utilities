/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description Representation of a color converter map
 */
export interface ColorConverters {
    adobe_98_rgb?: ConverterInfo;
    apple_rgb?: ConverterInfo;
    ansi16?: ConverterInfo;
    ansi256?: ConverterInfo;
    best_rgb?: ConverterInfo;
    beta_rgb?: ConverterInfo;
    bruce_rgb?: ConverterInfo;
    cie_rgb?: ConverterInfo;
    color_match_rgb?: ConverterInfo;
    cmy?: ConverterInfo;
    cmyk?: ConverterInfo;
    don_rgb_4?: ConverterInfo;
    eci_rgb_v2?: ConverterInfo;
    etka_space_ps5?: ConverterInfo;
    hcy?: ConverterInfo;
    hex?: ConverterInfo;
    hsi?: ConverterInfo;
    hsl?: ConverterInfo;
    hsv?: ConverterInfo;
    hunter_lab?: ConverterInfo;
    hwb?: ConverterInfo;
    lab?: ConverterInfo;
    lch_ab?: ConverterInfo;
    lch_uv?: ConverterInfo;
    lms?: ConverterInfo;
    luv?: ConverterInfo;
    ntsc_rgb?: ConverterInfo;
    pal_secam_rgb?: ConverterInfo;
    pro_photo_rgb?: ConverterInfo;
    rgb?: ConverterInfo;
    rgb_0_1?: ConverterInfo;
    rgb_0_255?: ConverterInfo;
    smpte_c_rgb?: ConverterInfo;
    ryb?: ConverterInfo;
    tsl?: ConverterInfo;
    uvw?: ConverterInfo;
    web_safe?: ConverterInfo;
    wide_gamut_rgb?: ConverterInfo;
    xvycc?: ConverterInfo;
    xyz?: ConverterInfo;
    xyy?: ConverterInfo;
    ycbcr_BT601?: ConverterInfo;
    ycbcr_BT709?: ConverterInfo;
    ycbcr_BT2020?: ConverterInfo;
    yccbccrc?: ConverterInfo;
    ycocg?: ConverterInfo;
    ydbdr?: ConverterInfo;
    yiq?: ConverterInfo;
    ypbpr?: ConverterInfo;
}
/**
 * @description Representation of a color converter information
 *  - fun: converter function
 *  - from: type of color values needed for conversion
 */
export interface ConverterInfo {
    fun: Function;
    from: string;
}
/**
 * @description Representation of a rgb converter map
 */
export interface ToRGBConverters {
    ansi16: Function;
    ansi265: Function;
    cmy: Function;
    cmyk: Function;
    hcy: Function;
    hex: Function;
    hsi: Function;
    hsl: Function;
    hsv: Function;
    hwb: Function;
    ryb: Function;
    tsl: Function;
    xvycc: Function;
    xyz: Function;
    ycbcr_BT601: Function;
    yccbccrc: Function;
    ycocg: Function;
    ydbdr: Function;
    yiq: Function;
    ypbpr: Function;
}
/**
 * @description Representation of a xyz converter map
 */
export interface ToXyzConverters {
    adobe_98_rgb: Function;
    apple_rgb: Function;
    best_rgb: Function;
    beta_rgb: Function;
    bruce_rgb: Function;
    cie_rgb: Function;
    color_match_rgb: Function;
    don_rgb_4: Function;
    eci_rgb_v2: Function;
    etka_space_ps5: Function;
    hunter_lab: Function;
    lab: Function;
    lch_ab: Function;
    lch_uv: Function;
    lms: Function;
    luv: Function;
    ntsc_rgb: Function;
    pal_secam_rgb: Function;
    pro_photo_rgb: Function;
    rgb: Function;
    uvw: Function;
    smpte_c_rgb: Function;
    wide_gamut_rgb: Function;
    xyy: Function;
}
/**
 * @description Representation of a color checker map
 */
export interface ColorCheckers {
    cmy: Function;
    cmyk: Function;
    hcy: Function;
    hex: Function;
    hsi: Function;
    hsl: Function;
    hsv: Function;
    hwb: Function;
    hunter_lab: Function;
    lab: Function;
    lch: Function;
    lms: Function;
    luv: Function;
    rgb: Function;
    ryb: Function;
    tsl: Function;
    uvw: Function;
    xvycc: Function;
    xyy: Function;
    xyz: Function;
    ycbcr_BT601: Function;
    ycbcr_BT709: Function;
    ycbcr_BT2020: Function;
    yccbccrc: Function;
    ycocg: Function;
    ydbdr: Function;
    yiq: Function;
    ypbpr: Function;
}
