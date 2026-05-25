/**
 * Linear interpolation between two values.
 * Used for smoothing trailing movements and spring physics.
 */
export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
};
