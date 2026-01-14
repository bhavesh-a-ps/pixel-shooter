
export type PixelColor = string;

export interface Shooter {
  id: string;
  color: PixelColor;
  ammo: number;
  maxAmmo: number;
  progress: number; // 0 to 1 around the path
  status: 'PATH' | 'RACK';
  x: number;
  y: number;
}

export interface Projectile {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: PixelColor;
  gridX: number; // Target column in grid
  gridY: number; // Target row in grid
}

export interface LevelConfig {
  gridSize: number;
  colors: PixelColor[];
  spawnRate: number;
}

export enum GameStatus {
  PLAYING,
  PAUSED,
  WON,
  LOST,
  LEVEL_TRANSITION
}
