import './HeroContainer.scss';
import { useState } from "react";
import HeroSlide from '../HeroSlide/HeroSlide';

const HeroContainer = () => {
    const slides = [
        {
          title: "22/23 HOME KIT - BOLD IS BRAVE",
          subtitle:
            "Buy Now !!",
          img:"https://i0.wp.com/footballfashion.org/wordpress/wp-content/uploads/2022/06/southampton-fc-2022-2023-hummel-home-kit-1.jpg?ssl=1",
          id:1
        },
        {
          title: "",
          subtitle:
            "",
          img:"https://pbs.twimg.com/media/EXzsWLHX0AAd01d?format=jpg&name=4096x4096",
          id:2
        },
        {
          title: "THE HERO RETURNS",
          subtitle:
            "Get to know the Saints' legend in issue 1  of 2022/23 >",
          img:"https://cdn.vox-cdn.com/thumbor/JX2l1Uxi7ddyJupc-FimBiYGaOM=/0x0:5310x3540/1220x813/filters:focal(2330x900:3178x1748):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69705469/1333408792.0.jpg",
          id:3
        },
      ];
      const [index, setIndex] = useState(0);
      const changeSlide = (i) => {
        setIndex( i );
      }
      return <HeroSlide
                slide={slides[index]}
                changeSlide={changeSlide}
                arrayIndex={slides.map(el=> el.id)}/>;
    };

export default HeroContainer;
