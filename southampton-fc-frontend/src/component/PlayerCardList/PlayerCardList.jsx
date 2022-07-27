import React from "react";
import "./PlayerCardList.scss";
import PlayerCard from "../PlayerCard/PlayerCard";

const PlayerCardList = ({ players }) => {
  const playerCardArr = (players) => {
    return players.map((players) => (
      <PlayerCard
        playerImage={players.image}
        playerName={players.name}
        playerPosition={players.position}
        playerNationality={players.nationality}
        playerBirth={players.dateOfBirth}
        playerHeight={players.height}
        playerApperances={players.appearances}
        playerGoals={players.goals}
        playerAssists={players.assists}
        players={players}
        key={players.id}
      />
    ));
  };

  return (
    <div className="playerCardContainer" players={players}>
      {playerCardArr(players)}
    </div>
  );
};

export default PlayerCardList;
