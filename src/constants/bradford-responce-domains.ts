/***************************************************************
 *  Cone response domains utilized for chromatic 
 *  adaptation algorithms.
 *  The Bradford method is the newest of the three methods, 
 *  and is considered by most experts to be the best of them.
 *  credit: 
 *  http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
 ***************************************************************/
import { ResponceDomain } from "../interfaces/responce-domain";

export const BRADFORD_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.8951, 0.2664, -0.1614],
    [-0.7502, 1.7135, 0.0367],
    [0.0389, -0.0685, 1.0296],
  ],
  MA_1: [
    [0.9869929, -0.1470543, 0.1599627],
    [0.4323053, 0.5183603, 0.0492912],
    [-0.0085287, 0.0400428, 0.9684867],
  ],
};
