
import './PlayerCard.scss';

const PlayerCard = (props) => {
  const {playerName, playerImage, playerPosition} = props;
  return (
    <div className="playerCard">
  <img className='playerCard__image' src={playerImage} alt="player" />
  <h1 className='playerCard__name'>{playerName}</h1>
  <h2 className='playerCard__position'>{playerPosition}</h2>

    </div>
  );
}

export default PlayerCard;
