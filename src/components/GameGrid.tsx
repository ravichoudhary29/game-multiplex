import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Game {
  id: number;
  name: string;
}
export interface fetchGamesresponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get<fetchGamesresponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <div>{error}</div>}
      <div>
        {games.map((game) => (
          <ul key={game.id}>{game.name}</ul>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
