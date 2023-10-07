import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {/* If there is an error, show the error */}
      {error && <Text>{error}</Text>}
      {/* Show the games */}
      <div>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
