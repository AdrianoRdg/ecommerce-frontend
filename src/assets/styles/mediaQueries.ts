type Breakpoints = {
  xxss: string;
  xss: string;
  xs: string;
  sm: string;
  ms: string;
  md: string;
  mmd: string;
  xmd: string;
  lg: string;
  xlg: string;
  xl: string;
  xxl: string;
};

const breakpoints: Breakpoints = {
  xxss: "300px",
  xss: "390px",
  xs: "400px",
  sm: "540px",
  ms: "612px",
  md: "768px",
  mmd: "840px",
  xmd: "980px",
  lg: "1024px",
  xlg: "1100px",
  xl: "1280px",
  xxl: "1536px",
};

export const devices = {
  xxss: `(max-width: ${breakpoints.xxss})`,
  xss: `(max-width: ${breakpoints.xss})`,
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  ms: `(max-width: ${breakpoints.ms})`,
  md: `(max-width: ${breakpoints.md})`,
  mmd: `(max-width: ${breakpoints.mmd})`,
  xmd: `(max-width: ${breakpoints.xmd})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xlg: `(max-width: ${breakpoints.xlg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
};
