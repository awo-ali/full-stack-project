import React from 'react';
import "./SearchBox.scss";


const SearchBox = ({ handleInput}) => {

  return (
    <form className="search-box">
      <label  className="search-box__label"></label>
      <input onInput={handleInput} type="text" placeholder="Search..." name="player"  className="search-box__input"/>
    </form>
  )
}

export default SearchBox;

