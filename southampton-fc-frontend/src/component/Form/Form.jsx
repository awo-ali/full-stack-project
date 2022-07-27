import { useState } from "react";
import './Form.scss';
// import PlayerCard from '../PlayerCard/PlayerCard';

const Form = () => {

    const [playerCard, setPlayerCard] = useState({
      appearances:"",
      assists:"",
      dateOfBirth:"",
      goals:"",
      height:"",
      image:"",
      name:"",
      nationality:"",
        position:"",
      
      })
      const handleSubmit = (event) => {
        event.preventDefault()
      console.log(playerCard);
      fetch("http://localhost:8080/player", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerCard)
    });
        event.target.reset();
      }
    

  return (
    <div className="log-form">
  <h1>ADD A NEW PLAYER</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onInput={(event) => setPlayerCard({ ...playerCard,   name: event.target.value })}/>
        <input type="text" placeholder="Image" onInput={(event) => setPlayerCard({ ...playerCard,    image: event.target.value })} />
        <input type="text" placeholder="Position" onInput={(event) => setPlayerCard({ ...playerCard,     position: event.target.value })} />
        <input type="text" placeholder="Nationality" onInput={(event) => setPlayerCard({ ...playerCard,      nationality: event.target.value })} />
        <input type="text" placeholder="Date Of Birth" onInput={(event) => setPlayerCard({ ...playerCard,       dateOfBirth: event.target.value })} />
        <input type="text" placeholder="Height" onInput={(event) => setPlayerCard({ ...playerCard,    height: event.target.value })}/>
        <input type="text" placeholder="Appearances" onInput={(event) => setPlayerCard({ ...playerCard,  appearances: event.target.value })}/>
        <input type="text" placeholder="Goals" onInput={(event) => setPlayerCard({ ...playerCard,  goals: event.target.value })}/>
        <input type="text" placeholder="Assists" onInput={(event) => setPlayerCard({ ...playerCard,   assists: event.target.value })}/>
        <button type="submit" className="btn">
          Submit
        </button>
        </form>
    </div>
  );
}

export default Form;
