
import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import UIOverlay from './components/UIOverlay';
import { GameStatus, LevelConfig } from './types';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState<GameStatus>(GameStatus.PLAYING);
  const [levelConfig, setLevelConfig] = useState<LevelConfig>({
    gridSize: 10,
    colors: COLORS.slice(0, 3),
    spawnRate: 2000,
  });

  const nextLevel = useCallback(() => {
    const nextLvl = level + 1;
    const newGridSize = Math.min(10 + Math.floor(nextLvl * 1.5), 60); // Capped for performance
    const colorCount = Math.min(3 + Math.floor(nextLvl / 3), 6);
    
    setLevel(nextLvl);
    setLevelConfig({
      gridSize: newGridSize,
      colors: COLORS.slice(0, colorCount),
      spawnRate: Math.max(800, 2000 - nextLvl * 50),
    });
    setStatus(GameStatus.PLAYING);
  }, [level]);

  const restartGame = useCallback(() => {
    setLevel(1);
    setLevelConfig({
      gridSize: 10,
      colors: COLORS.slice(0, 3),
      spawnRate: 2000,
    });
    setStatus(GameStatus.PLAYING);
  }, []);

  const handleGameOver = () => setStatus(GameStatus.LOST);
  const handleWin = () => setStatus(GameStatus.WON);

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 select-none overflow-hidden items-center justify-between p-2">
      <header className="w-full flex justify-between px-4 py-2 shrink-0 z-10">
        <div className="flex flex-col">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Grid Sector</span>
          <span className="text-xl font-black text-white italic leading-tight">FLOW_{level}</span>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Mission Status</span>
          <div className="text-sm font-bold text-emerald-400">ENGAGED</div>
        </div>
      </header>

      <div className="flex-grow w-full flex items-center justify-center relative overflow-hidden">
        <GameBoard 
          levelConfig={levelConfig}
          status={status}
          onGameOver={handleGameOver}
          onWin={handleWin}
        />
      </div>

      <UIOverlay 
        level={level}
        status={status}
        onNextLevel={nextLevel}
        onRestart={restartGame}
      />
      
      <footer className="w-full py-1 text-center text-slate-700 text-[8px] uppercase tracking-tighter shrink-0">
        Secure Neural Link Active • Zero Latency Fire Control
      </footer>
    </div>
  );
};

export default App;
