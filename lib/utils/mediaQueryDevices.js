const sizeUpperBound = {
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1438.98px'
}

const sizeLowerBound = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

// export const breakpointOnly = {
//   xs: `(max-width: ${sizeUpperBound.xs})`,
//   sm: `(min-width: ${sizeLowerBound.sm}) and (max-width: ${sizeUpperBound.sm})`,
//   md: `(min-width: ${sizeLowerBound.md}) and (max-width: ${sizeUpperBound.md})`,
//   lg: `(min-width: ${sizeLowerBound.lg}) and (max-width: ${sizeUpperBound.lg})`,
//   xl: `(min-width: ${sizeLowerBound.xl})`
// };

export const breakpointDown = {
  xs: `(max-width: ${sizeUpperBound.xs})`,
  sm: `(max-width: ${sizeUpperBound.sm})`,
  md: `(max-width: ${sizeUpperBound.md})`,
  lg: `(max-width: ${sizeUpperBound.lg})`,
  xl: `(max-width: ${sizeUpperBound.xl})`,
};