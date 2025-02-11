"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { LucideSearch } from "lucide-react";
import { Button } from "@/components/ui/buttom";
import ReactPlayer from "react-player";
import { Header } from "@/components/Header";
import { removeAccents } from "@/utils/removeAccents";
import Image from "next/image";

interface GameData {
  id: number;
  date: Date;
  team1: string;
  team2: string;
  score: string;
  bestPlayer: string;
  description: string;
  mediaUrl: string;
}

const BasketballMozambiquePage: React.FC = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState<GameData[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
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
      setGames(sampleGames);
      setFilteredGames(sampleGames);
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const normalizedQuery = removeAccents(searchQuery.toLowerCase());
  
    const filtered = games.filter((game) => {
      const normalizedTeam1 = removeAccents(game.team1.toLowerCase());
      const normalizedTeam2 = removeAccents(game.team2.toLowerCase());
      const normalizedBestPlayer = removeAccents(game.bestPlayer.toLowerCase());
      const normalizedDate = format(game.date, "yyyy-MM-dd", { locale: pt });
  
      return (
        normalizedTeam1.includes(normalizedQuery) ||
        normalizedTeam2.includes(normalizedQuery) ||
        normalizedBestPlayer.includes(normalizedQuery) ||
        normalizedDate.includes(normalizedQuery)
      );
    });
  
    setFilteredGames(filtered);
  }, [searchQuery, games]);

  return (
    <div>

    
      <Header/>
    <div className="p-2 md:p-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex items-center mb-4">
        <Input
          type="text"
          placeholder="Pesquise por equipa, data ou melhor jogador"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mr-2 bg-gray-100 dark:bg-gray-800"
        />
        <Button className="flex items-center justify-center bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600">
          <LucideSearch className="mr-1" /> Pesquisar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((game) => (
            <Card key={game.id} className="rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800">
              <CardContent>
                <h3 className="text-xl font-bold mb-1">
                  {game.team1} vs {game.team2}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Data: {format(game.date, "dd MMMM yyyy", { locale: pt })}
                </p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Pontuação: {game.score}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Melhor Jogador: {game.bestPlayer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {game.description}
                </p>
                {ReactPlayer.canPlay(game.mediaUrl) ? (
        <div className="relative w-full h-56  rounded-2xl overflow-hidden">
          <ReactPlayer
            url={game.mediaUrl}
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      ) : game.mediaUrl.endsWith(".jpeg") || game.mediaUrl.endsWith(".jpg") || game.mediaUrl.endsWith(".png") ? (
        <Image
          src={game.mediaUrl}
          alt={`Imagem do jogo ${game.team1} vs ${game.team2}`}
          width={500} 
          height={200}
          layout="responsive"
          className="rounded-2xl"
        />
      ) : (
        <p className="text-red-500">Formato de mídia não suportado</p>
      )}


              </CardContent>
            </Card>
          ))}
      </div>
    </div>
    </div>
  );
};

export default BasketballMozambiquePage;
