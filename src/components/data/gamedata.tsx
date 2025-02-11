"use client";

import { GameData } from "@/types/gamedata";
import React, { useEffect } from "react";

interface GameDataProviderProps {
  onDataLoaded: (data: GameData[]) => void;
}

const GameDataProvider: React.FC<GameDataProviderProps> = ({ onDataLoaded }) => {
  useEffect(() => {
    const sampleGames: GameData[] = [
      {
        id: 1,
        date: new Date("2025-02-10"),
        team1: "Costa do Sol",
        team2: "Maxaquene",
        score: "75-68",
        bestPlayer: "Adriano Macamo",
        description: "Um jogo emocionante.",
        mediaUrl: "https://lance.co.mz/public/images/1703324959-COSTA_DO_SOL_CAMPEAO_1.jpeg",
      },
      {
        id: 2,
        date: new Date("2025-02-08"),
        team1: "Ferroviário",
        team2: "Desportivo",
        score: "88-82",
        bestPlayer: "Nelson Matavel",
        description: "Jogo acirrado.",
        mediaUrl: "https://www.youtube.com/watch?v=r_cH9I8vWFc",
      },
    ];

    const sortedGames = sampleGames.sort((a, b) => b.date.getTime() - a.date.getTime());

    onDataLoaded(sortedGames);
  }, [onDataLoaded]);

  return null;
};

export default GameDataProvider;
