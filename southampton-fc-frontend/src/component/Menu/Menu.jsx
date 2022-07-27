import "./Menu.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";

const Menu = ({ toggleMenuContent }) => {
  return (
    <div className="menu">
      <img
        className="menu__cross"
        src={blackCross}
        alt="Exit"
        onClick={toggleMenuContent}
      />
      <div className="menu__content">
        <Link to="/" onClick={toggleMenuContent} className="menu__link" >
          <h1 className="menu__home">Home</h1>
        </Link>
        <Link to="/playerCards" onClick={toggleMenuContent} className="menu__link">
          <h2 className="menu__playerCards">Player Cards</h2>
        </Link>
        <Link to="addCard" onClick={toggleMenuContent} className="menu__link">
          <h3 className="menu__addCard">Add Card</h3>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
