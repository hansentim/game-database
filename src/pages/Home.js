import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GameDetail from '../components/GameDetail';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//Components

import Game from '../components/Game';
//Styling and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  console.log(pathId);
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get the data back (pull it back from state)
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  //Fix so scroll works on Home
  const gameDetail = useSelector((state) => state.detail.game.name);
  return (
    <div>
      <GameList variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && gameDetail && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {searched.length ? (
            <div className="searched">
              <h2>Search Result</h2>
              <Games>
                {searched.map((game) => (
                  <Game
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                    key={game.id}
                  />
                ))}
              </Games>
            </div>
          ) : (
            ''
          )}
          <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map((game) => (
              <Game
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
            {popular.map((game) => (
              <Game
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
                screenshots={game.short_screenshots}
              />
            ))}
          </Games>
          <h2>New Games</h2>
          <Games>
            {newGames.map((game) => (
              <Game
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </AnimateSharedLayout>
      </GameList>
    </div>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
