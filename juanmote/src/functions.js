export function lerp(from, to, speed) {
    const r = (1 - speed) * from + speed * to
    return Math.abs(from - to) < 0.001 ? to : r
  }
  
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)
  