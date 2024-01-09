import { HCL, LAB } from "../interfaces/color-spaces.interface"

export const hclToLab = ({ luminance, hue, chroma }: HCL): LAB => {
  const h = hue * (Math.PI / 180)

  return {
    luminance,
    a: Math.cos(h) * chroma,
    b: Math.sin(h) * chroma,
  }
}

