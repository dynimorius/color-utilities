"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAPTIVE_MATRICES = void 0;
/*****************************************************************
 *  Chromatic adaptation matrices using the
 *  Bradford method and reference illuminant
 *  tristimulus values from ASTM E308-01 whit
 *  the exception of B which came from
 *  Wyszecki & Stiles.
 *  credits:
 *  http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
 *****************************************************************/
exports.ADAPTIVE_MATRICES = {
    A_B: [
        [0.8905163, -0.0829136, 0.2680945],
        [-0.0971524, 1.0754262, 0.0879463],
        [0.053897, -0.0908558, 2.4838553],
    ],
    A_C: [
        [0.8530161, -0.1130268, 0.4404346],
        [-0.1238786, 1.0853435, 0.1425803],
        [0.0911907, -0.1553658, 3.477625],
    ],
    A_D50: [
        [0.8779529, -0.0915288, 0.2566181],
        [-0.1117372, 1.0924325, 0.0851788],
        [0.0502012, -0.0837636, 2.3994031],
    ],
    A_D55: [
        [0.8644459, -0.102133, 0.3073182],
        [-0.122289, 1.0982532, 0.1013945],
        [0.0609732, -0.102282, 2.6887535],
    ],
    A_D65: [
        [0.8446965, -0.1179225, 0.3948108],
        [-0.1366303, 1.1041226, 0.1291718],
        [0.0798489, -0.1348999, 3.1924009],
    ],
    A_D75: [
        [0.8310208, -0.1290882, 0.4662974],
        [-0.1456744, 1.1060318, 0.1517254],
        [0.0954696, -0.1620076, 3.6068968],
    ],
    A_E: [
        [0.8815963, -0.0908179, 0.3439213],
        [-0.1006757, 1.0708986, 0.1115462],
        [0.0709158, -0.1206464, 2.930295],
    ],
    A_F2: [
        [0.9083396, -0.0683719, 0.1754134],
        [-0.085326, 1.0728419, 0.0587007],
        [0.0336526, -0.0557284, 1.9465816],
    ],
    A_F7: [
        [0.8447932, -0.1178395, 0.3941104],
        [-0.1365823, 1.1041477, 0.1289531],
        [0.0796929, -0.1346275, 3.188295],
    ],
    A_F11: [
        [0.9214338, -0.0587653, 0.1579041],
        [-0.0725224, 1.0609434, 0.0526133],
        [0.030611, -0.0508982, 1.8568836],
    ],
    B_A: [
        [1.1389718, 0.077196, -0.125668],
        [0.1046012, 0.9341802, -0.0443668],
        [-0.0208883, 0.0324959, 0.4037039],
    ],
    B_C: [
        [0.9505386, -0.0254257, 0.075623],
        [-0.0305443, 1.0089768, 0.0249746],
        [0.0149704, -0.0250917, 1.3993642],
    ],
    B_D50: [
        [0.9850292, -0.009391, -0.002672],
        [0.9850292, -0.009391, -0.002672],
        [-0.0017035, 0.0035957, 0.9660561],
    ],
    B_D55: [
        [0.9674769, -0.0186924, 0.0199637],
        [-0.026523, 1.0198211, 0.0075752],
        [0.0025844, -0.0034696, 1.0823359],
    ],
    B_D65: [
        [0.9415037, -0.032124, 0.0584672],
        [-0.0428238, 1.0250998, 0.0203309],
        [0.0101511, -0.016117, 1.2847354],
    ],
    B_D75: [
        [0.9232662, -0.0412875, 0.0895406],
        [-0.053396, 1.026918, 0.0304876],
        [0.016449, -0.0267652, 1.4513087],
    ],
    B_E: [
        [0.9874297, -0.0056086, 0.0320832],
        [-0.0049796, 0.9962653, 0.010171],
        [0.0069424, -0.0120086, 1.1794125],
    ],
    B_F2: [
        [1.0237573, 0.0119487, -0.0403007],
        [0.0138105, 0.9975484, -0.0131781],
        [-0.0081608, 0.0137933, 0.7840861],
    ],
    B_F7: [
        [0.9416371, -0.0320617, 0.0581686],
        [-0.0427619, 1.0251198, 0.0202354],
        [0.0100877, -0.0160079, 1.2830854],
    ],
    B_F11: [
        [1.0400419, 0.0213649, -0.049441],
        [0.0272759, 0.9872237, -0.0167167],
        [-0.0092461, 0.015156, 0.7480426],
    ],
    C_A: [
        [1.2040146, 0.1029527, -0.1567072],
        [0.140745, 0.9280261, -0.0558735],
        [-0.0252839, 0.0387607, 0.2891656],
    ],
    C_B: [
        [1.0537465, 0.0251266, -0.0573939],
        [0.0321644, 0.9914304, -0.0194323],
        [-0.0106963, 0.0175083, 0.7148758],
    ],
    C_D50: [
        [1.0376976, 0.0153932, -0.0582624],
        [0.0170675, 1.0056038, -0.0188973],
        [-0.0120126, 0.0204361, 0.690638],
    ],
    C_D55: [
        [1.0186606, 0.0061268, -0.0408925],
        [0.0047723, 1.0105478, -0.0128799],
        [-0.0089652, 0.015575, 0.7736548],
    ],
    C_D65: [
        [0.9904476, -0.0071683, -0.0116156],
        [-0.0123712, 1.015595, -0.0029282],
        [-0.0035635, 0.0067697, 0.9181569],
    ],
    C_D75: [
        [0.9706028, -0.0161674, 0.0118229],
        [-0.0235618, 1.0173098, 0.0049041],
        [0.0009486, -0.0007126, 1.0370815],
    ],
    C_E: [
        [1.039977, 0.0198119, -0.0336279],
        [0.0266883, 0.9877806, -0.011803],
        [-0.0056861, 0.0089182, 0.8429683],
    ],
    C_F2: [
        [1.079596, 0.0368643, -0.0877996],
        [0.0467792, 0.9891161, -0.0295981],
        [-0.0165425, 0.0271981, 0.5607245],
    ],
    C_F7: [
        [0.9905934, -0.0071084, -0.0118379],
        [-0.0123043, 1.0156147, -0.0030004],
        [-0.0036092, 0.0068474, 0.9169788],
    ],
    C_F11: [
        [1.0971565, 0.0464489, -0.0954514],
        [0.0606741, 0.9791562, -0.0326999],
        [-0.0172568, 0.0278907, 0.5349937],
    ],
    D50_A: [
        [1.1573713, 0.0872411, -0.1268788],
        [0.119941, 0.9219445, -0.0455568],
        [-0.0200278, 0.0303599, 0.4178345],
    ],
    D50_B: [
        [1.015344, 0.0093873, 0.0028087],
        [0.0147849, 0.9856776, 0.0000806],
        [0.0017354, -0.0036522, 1.0351412],
    ],
    D50_C: [
        [0.9648789, -0.0164148, 0.0809482],
        [-0.016052, 0.9941478, 0.0258478],
        [0.0172576, -0.0297025, 1.4485796],
    ],
    D50_D55: [
        [0.9820801, -0.0094156, 0.0233811],
        [-0.0118389, 1.0049382, 0.0078491],
        [0.0044511, -0.0073485, 1.1203775],
    ],
    D50_D65: [
        [0.9555766, -0.0230393, 0.0631636],
        [-0.0282895, 1.0099416, 0.0210077],
        [0.0122982, -0.020483, 1.3299098],
    ],
    D50_D75: [
        [0.9369777, -0.0323563, 0.0952771],
        [-0.0389795, 1.0115975, 0.0314918],
        [0.0188243, -0.031528, 1.5023535],
    ],
    D50_E: [
        [1.0025535, 0.0036238, 0.0359837],
        [0.0096914, 0.9819125, 0.0105947],
        [0.0089181, -0.0160789, 1.220877],
    ],
    D50_F2: [
        [1.0395725, 0.021535, -0.0388405],
        [0.0287482, 0.9834389, -0.013522],
        [-0.0067213, 0.0106555, 0.811618],
    ],
    D50_F7: [
        [0.9557124, -0.0229756, 0.062855],
        [-0.0282266, 1.0099623, 0.020909],
        [0.0122325, -0.0203701, 1.3282016],
    ],
    D50_F11: [
        [1.0562303, 0.0310026, -0.0482555],
        [0.0422615, 0.9734013, -0.017148],
        [-0.0078657, 0.0121201, 0.7743049],
    ],
    D55_A: [
        [1.1802853, 0.0968577, -0.1385564],
        [0.1334256, 0.9182995, -0.0498798],
        [-0.0216899, 0.0327363, 0.3731642],
    ],
    D55_B: [
        [1.0341856, 0.0188903, -0.0192078],
        [0.0269143, 0.9810324, -0.0073626],
        [-0.0023832, 0.0030997, 0.9239498],
    ],
    D55_C: [
        [0.9821687, -0.0067531, 0.0518013],
        [-0.0044921, 0.9893393, 0.0162333],
        [0.0114719, -0.0199953, 1.2928395],
    ],
    D55_D50: [
        [1.0184567, 0.0093864, -0.0213199],
        [0.0120291, 0.995146, -0.0072228],
        [-0.0039673, 0.0064899, 0.8925936],
    ],
    D55_D65: [
        [0.9726856, -0.0135482, 0.0361731],
        [-0.0167463, 1.0049102, 0.0120598],
        [0.0070026, -0.0116372, 1.1869548],
    ],
    D55_D75: [
        [0.953504, -0.022786, 0.0653011],
        [-0.0276552, 1.0065257, 0.0216339],
        [0.0128323, -0.0214482, 1.3408176],
    ],
    D55_E: [
        [1.0209581, 0.01325, 0.0107183],
        [0.0216398, 0.977306, 0.002158],
        [0.0040457, -0.0079939, 1.089673],
    ],
    D55_F2: [
        [1.0591726, 0.0309362, -0.0569879],
        [0.0411624, 0.9788474, -0.0197857],
        [-0.0099371, 0.015808, 0.7245114],
    ],
    D55_F7: [
        [0.972826, -0.0134855, 0.0358942],
        [-0.0166815, 1.0049307, 0.0119703],
        [0.0069439, -0.0115365, 1.1854306],
    ],
    D55_F11: [
        [1.0762891, 0.0404531, -0.0658152],
        [0.0548187, 0.9689618, -0.0232379],
        [-0.010937, 0.0170126, 0.6912198],
    ],
    D65_A: [
        [1.2164557, 0.1109905, -0.1549325],
        [0.1533326, 0.9152313, -0.0559953],
        [-0.0239469, 0.0358984, 0.3147529],
    ],
    D65_B: [
        [1.0641402, 0.032578, -0.0489436],
        [0.0446103, 0.9766379, -0.0174854],
        [-0.0078485, 0.0119945, 0.7785377],
    ],
    D65_C: [
        [1.0097785, 0.0070419, 0.0127971],
        [0.0123113, 0.9847094, 0.0032962],
        [0.0038284, -0.0072331, 1.0891639],
    ],
    D65_D50: [
        [1.0478112, 0.0228866, -0.050127],
        [0.0295424, 0.9904844, -0.0170491],
        [-0.0092345, 0.0150436, 0.7521316],
    ],
    D65_D55: [
        [1.0285405, 0.0135022, -0.0314825],
        [0.0172109, 0.9952227, -0.0106363],
        [-0.0058993, 0.0096778, 0.8425735],
    ],
    D65_D75: [
        [0.9799401, -0.0091708, 0.0252447],
        [-0.011249, 1.0015532, 0.0083931],
        [0.0049195, -0.0081963, 1.1295615],
    ],
    D65_E: [
        [1.0502616, 0.0270757, -0.0232523],
        [0.039065, 0.9729502, -0.0092579],
        [-0.0024047, 0.0026446, 0.9180873],
    ],
    D65_F2: [
        [1.0902706, 0.0445381, -0.081691],
        [0.0593007, 0.9745354, -0.0283781],
        [-0.0142228, 0.02261, 0.6105988],
    ],
    D65_F7: [
        [1.0001471, 0.0000616, -0.00024],
        [0.0000675, 1.0000204, -0.0000777],
        [-0.0000497, 0.0000847, 0.9987166],
    ],
    D65_F11: [
        [1.1080915, 0.0541551, -0.0897687],
        [0.073197, 0.9648481, -0.0316116],
        [-0.015034, 0.0234731, 0.5825669],
    ],
    D75_A: [
        [1.243577, 0.1208481, -0.1658524],
        [0.167275, 0.9148518, -0.0601088],
        [-0.0254024, 0.0378929, 0.2789367],
    ],
    D75_B: [
        [1.086746, 0.0419224, -0.067929],
        [0.0568414, 0.9754474, -0.0239981],
        [-0.0112688, 0.0175142, 0.6893606],
    ],
    D75_C: [
        [1.0306965, 0.0163719, -0.0118275],
        [0.0238763, 0.9833607, -0.0049222],
        [-0.0009264, 0.0006607, 0.9642518],
    ],
    D75_D50: [
        [1.0699729, 0.0320876, -0.0685287],
        [0.0416191, 0.9891382, -0.0233734],
        [-0.0125333, 0.0203557, 0.6659904],
    ],
    D75_D55: [
        [1.0501142, 0.0226752, -0.051509],
        [0.0290589, 0.9938026, -0.0174501],
        [-0.0095853, 0.0156802, 0.7460274],
    ],
    D75_D65: [
        [1.0206905, 0.0091588, -0.0228796],
        [0.0115005, 0.9984917, -0.0076762],
        [-0.0043619, 0.0072053, 0.8853432],
    ],
    D75_E: [
        [1.0724049, 0.0364864, -0.0448236],
        [0.051103, 0.9717738, -0.0165588],
        [-0.0064286, 0.0092337, 0.8128571],
    ],
    D75_F2: [
        [1.1136974, 0.0538679, -0.0976113],
        [0.0718591, 0.9734042, -0.0339619],
        [-0.0169204, 0.0268452, 0.5407414],
    ],
    D75_F7: [
        [1.0208424, 0.0092199, -0.0230959],
        [0.01157, 0.9985122, -0.0077467],
        [-0.004406, 0.0072802, 0.8842074],
    ],
    D75_F11: [
        [1.1320328, 0.0635755, -0.1052445],
        [0.0859456, 0.9638355, -0.0370682],
        [-0.0176162, 0.0274976, 0.5159354],
    ],
    E_A: [
        [1.1548614, 0.0823153, -0.1386766],
        [0.1110042, 0.9377198, -0.048724],
        [-0.0233784, 0.0366158, 0.3426126],
    ],
    E_B: [
        [1.0129515, 0.0053699, -0.0276014],
        [0.0051233, 1.0036715, -0.0087948],
        [-0.0059104, 0.0101876, 0.8479527],
    ],
    E_C: [
        [0.9622722, -0.0196444, 0.0381122],
        [-0.0259182, 1.0127717, 0.0131466],
        [0.006765, -0.0108472, 1.1864022],
    ],
    E_D50: [
        [0.9977545, -0.0041632, -0.0293713],
        [-0.0097677, 1.0183168, -0.008549],
        [-0.0074169, 0.0134416, 0.8191853],
    ],
    E_D55: [
        [0.9797934, -0.0133624, -0.009611],
        [-0.0216865, 1.0235002, -0.0018137],
        [-0.0037969, 0.007558, 0.9177289],
    ],
    E_D65: [
        [0.9531874, -0.0265906, 0.0238731],
        [-0.0382467, 1.0288406, 0.009406],
        [0.0026068, -0.0030332, 1.0892565],
    ],
    E_D75: [
        [0.9344831, -0.0355691, 0.0508059],
        [-0.0490066, 1.0307122, 0.0182943],
        [0.0079472, -0.0119897, 1.2304226],
    ],
    E_F2: [
        [1.0373158, 0.0170794, -0.0625353],
        [0.019178, 1.0011509, -0.0203289],
        [-0.01283, 0.0217881, 0.6649719],
    ],
    E_F7: [
        [0.9533246, -0.0265304, 0.0236158],
        [-0.0381833, 1.0288601, 0.0093232],
        [0.0025528, -0.0029409, 1.0878581],
    ],
    E_F11: [
        [1.0539136, 0.0265245, -0.0708181],
        [0.0327858, 0.9908245, -0.0236103],
        [-0.0137094, 0.0227828, 0.6344266],
    ],
    F2_A: [
        [1.1108436, 0.0654914, -0.102077],
        [0.0892593, 0.9359084, -0.0362665],
        [-0.0166489, 0.0256618, 0.5144475],
    ],
    F2_B: [
        [0.9773601, -0.0123986, 0.0500263],
        [-0.0133935, 1.0023946, 0.0161588],
        [0.010408, -0.0177628, 1.2756066],
    ],
    F2_C: [
        [0.9301461, -0.0386152, 0.1436063],
        [-0.0431066, 1.0113279, 0.0466336],
        [0.0295321, -0.0501939, 1.7853816],
    ],
    F2_D50: [
        [0.9628262, -0.021579, 0.0457172],
        [-0.028031, 1.0172847, 0.0156071],
        [0.0083415, -0.0135344, 1.2322804],
    ],
    F2_D55: [
        [0.9460314, -0.0310871, 0.073563],
        [-0.0395027, 1.0224574, 0.0248152],
        [0.0138373, -0.0227352, 1.380708],
    ],
    F2_D65: [
        [0.9212269, -0.0449128, 0.121162],
        [-0.0553723, 1.0277243, 0.0403563],
        [0.0235086, -0.0391019, 1.6390644],
    ],
    F2_D75: [
        [0.9038485, -0.0544241, 0.159739],
        [-0.0656239, 1.0294976, 0.0528128],
        [0.0315403, -0.0528125, 1.8516893],
    ],
    F2_E: [
        [0.9654834, -0.0184347, 0.0902324],
        [-0.0181044, 0.998532, 0.0288236],
        [0.0192213, -0.0330731, 1.5046195],
    ],
    F2_F7: [
        [0.9213533, -0.0448467, 0.1207888],
        [-0.0553131, 1.0277453, 0.0402379],
        [0.023428, -0.0389625, 1.6369581],
    ],
    F2_F11: [
        [1.0156947, 0.0093992, -0.0106926],
        [0.013262, 0.9895464, -0.0040071],
        [-0.0014541, 0.0020196, 0.9539904],
    ],
    F7_A: [
        [1.2162616, 0.1109265, -0.1548306],
        [0.1532455, 0.9152079, -0.0559592],
        [-0.0239302, 0.0358725, 0.3151544],
    ],
    F7_B: [
        [1.0639791, 0.0325159, -0.0487483],
        [0.044537, 0.9766166, -0.0174212],
        [-0.0078094, 0.0119287, 0.7795373],
    ],
    F7_C: [
        [1.0096302, 0.0069785, 0.0130568],
        [0.0122432, 0.9846882, 0.00338],
        [0.0038825, -0.0073255, 1.0905639],
    ],
    F7_D50: [
        [1.0476532, 0.0228258, -0.0499378],
        [0.0294704, 0.9904638, -0.0169869],
        [-0.0091967, 0.0149801, 0.7530971],
    ],
    F7_D55: [
        [1.0283868, 0.0134412, -0.0312747],
        [0.0171406, 0.9952022, -0.0105684],
        [-0.0058572, 0.0096065, 0.8436556],
    ],
    F7_D65: [
        [0.999853, -0.0000616, 0.0002403],
        [-0.0000675, 0.9999796, 0.0000778],
        [0.0000498, -0.0000848, 1.0012851],
    ],
    F7_D75: [
        [0.9797979, -0.0092332, 0.0255119],
        [-0.0113145, 1.0015327, 0.0084791],
        [0.0049755, -0.0082922, 1.1310137],
    ],
    F7_E: [
        [1.0501042, 0.0270124, -0.0230277],
        [0.0389931, 0.9729287, -0.0091847],
        [-0.0023588, 0.0025668, 0.9192667],
    ],
    F7_F2: [
        [1.0901032, 0.0444769, -0.0815305],
        [0.0592248, 0.9745143, -0.0283245],
        [-0.0141918, 0.0225586, 0.6113819],
    ],
    F7_F11: [
        [1.1079204, 0.0540934, -0.0896135],
        [0.0731195, 0.9648265, -0.0315596],
        [-0.0150044, 0.0234241, 0.5833138],
    ],
    F11_A: [
        [1.0928123, 0.0559961, -0.0945162],
        [0.0754916, 0.945146, -0.0331995],
        [-0.0159459, 0.0249839, 0.5391848],
    ],
    F11_B: [
        [0.9626328, -0.021802, 0.0631369],
        [-0.026386, 1.0131919, 0.0208981],
        [0.0124331, -0.0207976, 1.3371793],
    ],
    F11_C: [
        [0.9166307, -0.0480575, 0.1606042],
        [-0.0557153, 1.0224336, 0.0525528],
        [0.0324715, -0.0548525, 1.8716217],
    ],
    F11_D50: [
        [0.9484361, -0.0309349, 0.0584225],
        [-0.0409965, 1.0283794, 0.0202198],
        [0.0102763, -0.0164113, 1.2917578],
    ],
    F11_D55: [
        [0.9320665, -0.040447, 0.0873879],
        [-0.0523468, 1.0336952, 0.0297671],
        [0.0160362, -0.0260817, 1.4473678],
    ],
    F11_D65: [
        [0.9078969, -0.0542904, 0.1369534],
        [-0.068019, 1.0391336, 0.0459049],
        [0.0261703, -0.0432704, 1.7182258],
    ],
    F11_D75: [
        [0.8909691, -0.0638234, 0.1771612],
        [-0.078118, 1.0409951, 0.0588569],
        [0.0345849, -0.0576607, 1.9411392],
    ],
    F11_E: [
        [0.9510791, -0.0278778, 0.1051271],
        [-0.0309545, 1.0093049, 0.0341061],
        [0.0216636, -0.0368473, 1.5772733],
    ],
    F11_F2: [
        [0.9846860, -0.0093755, 0.0109973],
        [-0.0131907, 1.0106809, 0.0040974],
        [0.0015289, -0.0021539, 1.0482367]
    ],
    F11_F7: [
        [0.9080200, -0.0542240, 0.1365639],
        [-0.0679612, 1.0391545, 0.0457816],
        [0.0260859, -0.0431241, 1.7160176]
    ]
};