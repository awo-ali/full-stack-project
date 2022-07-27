import "./PlayerCard.scss";

const PlayerCard = (props) => {
  const {
    playerName,
    playerImage,
    playerPosition,
    playerNationality,
    playerBirth,
    playerHeight,
    playerApperances,
    playerGoals,
    playerAssists,
  } = props;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card__image" src={playerImage} alt="player" />
          <h1 className="flip-card__name">{playerName}</h1>
          <h2 className="flip-card__position">{playerPosition}</h2>
        </div>
        <div className="flip-card-back">
          <h3 className="flip-card-back__title">{playerName}</h3>
          <div className="flip-card-back__stats">
            <div className="flip-card-back__nationality">
              <p>Nationality</p>
              <p> {playerNationality}</p>
            </div>
            <div className="flip-card-back__birth">
              <p>D.O.B</p>
              <p > {playerBirth}</p>
            </div>
            <div className="flip-card-back__height">
              <p>Height</p>
              <p className="flip-card-back__p"> {playerHeight}</p>
            </div>
            <div className="flip-card-back__appearance">
              <p>Appearances</p>
              <p className="flip-card-back__p"> {playerApperances}</p>
            </div>
            <div className="flip-card-back__goals">
              <p>Goals</p>
              <p className="flip-card-back__p"> {playerGoals}</p>
            </div>
            <div>
              <div className="flip-card-back__assists">
              <p>Assists</p>
              <p className="flip-card-back__p"> {playerAssists}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
