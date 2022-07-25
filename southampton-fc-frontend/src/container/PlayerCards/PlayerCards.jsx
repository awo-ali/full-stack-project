import React from 'react';
import './PlayerCards.scss';
import PlayerCardList from '../../component/PlayerCardList/PlayerCardList';

const PlayerCards = ({players}) => {
  return (
    <div className="playerCards">
  <PlayerCardList players={players}/>
  
    </div>
  );
}

export default PlayerCards;
