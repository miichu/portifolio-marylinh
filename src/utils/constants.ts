// ROUTING
export const BASE_URL = "/portifolio-marylinh";

// SPACING
export const SPACING_XS = "8px";
export const SPACING_S = "16px";
export const SPACING_M = "32px";
export const SPACING_L = "40px";
export const SPACING_XL = "48px";

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// NB! can't seem to be able to use these directly for now. ts-styled-components(999) error
export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};
