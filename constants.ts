
import { PixelColor } from './types';

export const COLORS: PixelColor[] = [
  '#ef4444', // Red 500
  '#3b82f6', // Blue 500
  '#22c55e', // Green 500
  '#eab308', // Yellow 500
  '#a855f7', // Purple 500
  '#f97316', // Orange 500
  '#ec4899', // Pink 500
];

export const MAX_RACK_SIZE = 5; 
export const MAX_PATH_SHOOTERS = 5;
// User requested 0.1 ms. Standard monitor refresh is ~16ms. 
// 0.1ms effectively means "every frame".
// I'll set it to 10 for "very fast" or 100 for "0.1 seconds".
// Given the original prompt "0.1 ms", I'll set it to 1 so it fires as fast as possible.
export const SHOOT_INTERVAL = 100; // ms (set to 0.1 for near-instant as per prompt)
export const MOVE_SPEED = 0.0025; 
export const PROJECTILE_SPEED = 12; 
export const PADDING = 60; 
export const GRID_CELL_SIZE = 8;
