"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import ReactPlayer from "react-player";
import Image from "next/image";
import { GameData } from "@/types/gamedata";

interface GameListProps {
  games: GameData[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {games
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
                <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                  <ReactPlayer
                    url={game.mediaUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                  />
                </div>
              ) : game.mediaUrl.match(/\.(jpeg|jpg|png)$/) ? (
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
  );
};

export default GameList;
