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
// Shooting frequency increased by 10x (100ms / 10 = 10ms)
export const SHOOT_INTERVAL = 10; 
export const MOVE_SPEED = 0.0025; 
export const PROJECTILE_SPEED = 24; 
export const PADDING = 60; 
export const GRID_CELL_SIZE = 8;