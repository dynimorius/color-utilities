"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CB_CR_CONVERSION_MATRICES = void 0;
exports.CB_CR_CONVERSION_MATRICES = {
    /******** ITU_R_BT_601 Conversions */
    RGB_TO_YCBCR_BT_601: [
        [0.25677999999999, 0.50411999999998, 0.0978999999999],
        [-0.148219999999996, -0.2909899999999, 0.439210000000007],
        [0.4392099999999, -0.367780000000029, -0.0714200000000003],
    ],
    BT_601_YCBCR_TO_RGB: [
        [1.1643968786863, 0.0, 1.596058453162443],
        [1.16442492982314, -0.3917482444075, -0.8129731979375],
        [1.16441546341836, 2.01726700685828, 0.0],
    ],
    RGB_TO_FULL_RANGE_YCBCR: [
        [0.299000000000001, 0.5870000000000012, 0.1139999999999968],
        [-0.169000000000001, -0.3310000000000008, 0.5000000000000019],
        [0.5000000000000014, -0.4190000000000013, -0.08100000000000011],
    ],
    FULL_RANGE_YCBCR_TO_RGB: [
        [1.0, -0.00092674484048, 1.40168676024391],
        [1.0, -0.34369538447215, -0.714169039951589],
        [1.0, 1.772160415723347, 0.0009902205144914],
    ],
    RGB_TO_YDBDR: [
        [0.2990000000000005, 0.5870000000000009, 0.11400000000000045],
        [-0.4500000000000006, -0.8830000000000016, 1.3329999999999993],
        [-1.333000000000002, 1.115999999999994, 0.216999899999998],
    ],
    YDBDR_TO_RGB: [
        [0.99999994740873, 0.000092268759836, -0.5259126306576999],
        [1.000000026789933, -0.1291328810838021, 0.26789932820547696],
        [0.9999999999920797, 0.6646790599736903, -0.0000792025435324],
    ],
    RGB_TO_YPBPR: [
        [0.298999999999993, 0.5869999999999866, 0.1140000000000203],
        [-0.168735999999996, -0.331263999999992, 0.4999999999999885],
        [0.500000000000003, -0.4186879999999932, -0.0813120000000104],
    ],
    YPBPR_TO_RGB: [
        [1.0, -0.0000012188942, 1.40199958865734],
        [1.0, -0.3441356781654, -0.714136155581812],
        [1.0, 1.772000066073816, 0.0000004062980628],
    ],
    RGB_TO_YIQ: [
        [0.299, 0.5870000000000002, 0.1140000000000001],
        [0.5960000000000005, -0.2749999, -0.321],
        [0.2120000000000003, -0.528, 0.31099999999999994],
    ],
    YIQ_TO_RGB: [
        [1.003089203363529, 0.954849088960563, 0.617859769687776],
        [0.996776085319892, -0.27070624040204, -0.6447883501463753],
        [1.0084979483467353, -1.110485214765006, 1.6995674596427819],
    ],
    /******** ITU_R_BT_709 Conversions */
    RGB_TO_BT_709_YCBCR: [
        [0.2126, 0.7152, 0.07225],
        [-0.1146, -0.3854, 0.5],
        [0.5, -0.4542, -0.0458],
    ],
    BT_709_YCBCR_TO_RGB: [
        [1.0, 0.0, 1.5748],
        [1, -0.1873, -0.4681],
        [1, 1.8556, 0.0],
    ],
    RGB_TO_HDTV_YPBPR: [
        [0.2129999999999994, 0.7149999999999979, 0.0720000000000026],
        [-0.1149999999999996, -0.3849999999999989, 0.49999999999999861],
        [0.4999999999999969, -0.45400000000001, -0.0459999999999859],
    ],
    HDTV_YPBPR_TO_RGB: [
        [1.0, 0.0, 1.574189857382207],
        [1.0, -0.18715213926688, -0.469044992031384],
        [1.0, 1.856082710146704, 0.0],
    ],
    /******** ITU-R BT.2020 Conversions */
    RGB_TO_YCCRCCBC: [
        [0.2627, 0.678, 0.0593],
        [-0.1396300627192519, -0.360369937280747, 0.5],
        [0.5, -0.4597857045978562, -0.04021429540214341],
    ],
    YCCRCCBC_TO_RGB: [
        [1.0, 0.0, 1.4746],
        [1.0, -0.16455312684366, -0.57135312684366],
        [1.0, 1.8814, 0.0],
    ],
    /**/
    RGB_TO_HDTV_YCBCR: [
        [0.1830000000000001, 0.6140000000000002, 0.06199999999999977],
        [-0.1009999999999993, -0.339, 0.4390000000000002],
        [0.439, -0.3989999999999999, -0.0400000000000006],
    ],
    HDTV_YCBCR_TO_RGB: [
        [1.164143075658222, -0.001098009588051, 1.7923711120413486],
        [1.163896331930568, -0.213050871641649, -0.5341940017747165],
        [1.1666043443415559, 2.113131789396554, -0.0001418776434002],
    ],
    RGB_TO_YCOCG: [
        [0.25, 0.5, 0.25],
        [0.5, 0.0, -0.5],
        [-0.25, 0.5, -0.25],
    ],
};