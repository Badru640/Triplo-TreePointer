"use client";

import { GameData } from "@/types/gamedata";
import React, { useEffect, useState } from "react";

interface GameDataProviderProps {
  onDataLoaded: (data: GameData[]) => void;
}

const GameDataProvider: React.FC<GameDataProviderProps> = ({ onDataLoaded }) => {
  const [games, setGames] = useState<GameData[]>([]);

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

    // Ordena os jogos por data (do mais recente para o mais antigo)
    const sortedGames = sampleGames.sort((a, b) => b.date.getTime() - a.date.getTime());

    setGames(sortedGames);
    onDataLoaded(sortedGames);
  }, [onDataLoaded]);

  return null; // Esse componente apenas fornece dados
};

export default GameDataProvider;
