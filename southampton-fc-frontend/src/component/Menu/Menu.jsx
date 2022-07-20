
import './Menu.scss';
import blackCross from"../../assets/images/black-cross.png";


const Menu = ({toggleMenuContent}) => {
  
  
  return (
    <div className="menu">
        <img className='menu__cross' src={blackCross} alt="Exit" onClick={toggleMenuContent}  />
        <div className='menu__content'>
            <h1 className='menu__home'>Home</h1>
            <h2 className='menu__playerCards'>Player Cards</h2>
            <h3 className='menu__seasonStats'>Season Stats</h3>
        </div>
   
    </div>
  );
}

export default Menu;
