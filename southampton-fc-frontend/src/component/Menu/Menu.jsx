import "./Menu.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";

const Menu = ({ toggleMenuContent}) => {
  return (
    <div className="menu">
      <img
        className="menu__cross"
        src={blackCross}
        alt="Exit"
        onClick={toggleMenuContent}
      />
      <div className="menu__content">
        <Link to="/">
          <h1 className="menu__home">Home</h1>
        </Link>
        <Link to="/playerCards">
          <h2 className="menu__playerCards">Player Cards</h2>
        </Link>
        <Link to="seasonStats">
          <h3 className="menu__seasonStats">Season Stats</h3>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
