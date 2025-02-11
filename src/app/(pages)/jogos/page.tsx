"use client"
import React, { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import { Button } from "@/components/ui/buttom";
import { Header } from "@/components/Header";
import { removeAccents } from "@/utils/removeAccents";
import GameList from "./gamelist";
import { GameData } from "@/types/gamedata";
import GameDataProvider from "@/components/data/gamedata";

const BasketballMozambiquePage: React.FC = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState<GameData[]>([]);

  const handleDataLoaded = useCallback((data: GameData[]) => {
    setGames(data);
    setFilteredGames(data);
  }, []);

  React.useEffect(() => {
    const normalizedQuery = removeAccents(searchQuery.toLowerCase());

    const filtered = games.filter((game) => {
      const normalizedTeam1 = removeAccents(game.team1.toLowerCase());
      const normalizedTeam2 = removeAccents(game.team2.toLowerCase());
      const normalizedBestPlayer = removeAccents(game.bestPlayer.toLowerCase());
      const normalizedDate = game.date.toISOString().split("T")[0];

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
      <Header />
      <GameDataProvider onDataLoaded={handleDataLoaded} />
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

        {/* Exibindo a lista de jogos */}
        <GameList games={filteredGames} />
      </div>
    </div>
  );
};

export default BasketballMozambiquePage;
