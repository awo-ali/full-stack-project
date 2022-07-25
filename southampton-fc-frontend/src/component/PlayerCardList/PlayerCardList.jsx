import React  from "react";
import './PlayerCardList.scss';
import PlayerCard from "../PlayerCard/PlayerCard";

const PlayerCardList = ({players}) => {

    const playerCardArr = (players) => {
        return players.map((players) => (
          <PlayerCard
            playerImage={players.image}
            playerName={players.name}
            playerPosition={players.position}
            players={players}
          />
        ));
      };

  return (
    <div className="playerCardContainer" players={players}>
   {playerCardArr(players)} 
    </div>
  );
}

export default PlayerCardList;
