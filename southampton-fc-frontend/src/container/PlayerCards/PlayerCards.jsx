import React from "react";
import "./PlayerCards.scss";
import PlayerCardList from "../../component/PlayerCardList/PlayerCardList";
// import search from "../../assets/images/magnifying-glass.png";
import SearchBox from "../../component/SearchBox/SearchBox";

const PlayerCards = ({filteredPlayers, handleInput}) => {

  return (
    <div className="playerCards">
      <div className="playerCards__searchContainer">
       <SearchBox  handleInput={handleInput} />
        <h1 className="playerCards__heading">Pick your favourite player from the 2022/23 squad !! </h1>
      </div>
      <PlayerCardList players={filteredPlayers} />
    </div>
  );
};

export default PlayerCards;
