/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ColorConverters, ToRGBConverters, ToXyzConverters } from "./interfaces/converters.interface";
import { RGBResolverMap, XYZRezolverMap } from "./interfaces/resolver.interface";
/**
 * Map of color converter paired with the
 * space used for fonversion
 */
export declare const colorConverters: ColorConverters;
/**
 * Map of conversion to get sRBG color
 */
export declare const toRgbConverters: ToRGBConverters;
/**
 * Map of conversion to ftom sRGB space
 */
export declare const fromRgbConverters: RGBResolverMap;
/**
 * Map of conversion to get XYZ
 */
export declare const toXyzConverters: ToXyzConverters;
export declare const fromXyzConverters: XYZRezolverMap;
