import './HeroSlide.scss';
import React from 'react';


const HeroSlide = ({ slide, changeSlide, arrayIndex }) => {
  return (
    <section className="hero-slide">
    <div className="hero-slide__bg">
        <img
            src={slide.img}
            alt="slide show"/>
    </div>
    <div className="hero-slide__caption">
        <h2>{ slide.title }</h2>
        <p>{ slide.subtitle }</p>
    </div>
    <ul className="hero-slide__controls">
        { arrayIndex.map( id => {
            return(
                <li
                    className={`controls__item ${ slide.id === id ? 'control-selected': null }`}
                    key={id}
                    onClick={ () => { changeSlide(id - 1) }}
                ></li>
            )}
        )}
    </ul>
</section>
  );
}

export default HeroSlide;
