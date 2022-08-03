import { createRef, RefObject, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { DISHES, DishType } from './Dish/DISHES';
import Dish from './Dish/Dish';
import { NextArrow, PrevArrow } from './Arrows/Arrows';


const Carousel = (props: {curType: DishType}) => {
  const WIDTH_BREAKPOINT = 1300;
  const sliderRef: RefObject<Slider> = createRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    for (let i = 0; i < DISHES.length; i++) {
      if (props.curType === DISHES[i].type && sliderRef.current) {
        if (WIDTH_BREAKPOINT < screenWidth) {
          sliderRef.current.slickGoTo(Math.floor(i / 2) - 1);
        } else {
          sliderRef.current.slickGoTo(i);
        }
      }
    }
  }, [props.curType]);
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  const settings = {
    useCSS: true,
    dots: true,
    swipe: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToShow: 2,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    appendDots: (dots: any) => (<div><ul className='dotsBlock'> {dots} </ul></div>),
    responsive: [{
      breakpoint: WIDTH_BREAKPOINT,
      settings: {
        slidesToShow: 1,
        rows: 1
      }
    }]
  };
  return (
    <Slider {...settings} ref={sliderRef}>
      {DISHES.map((dish, i) => {
        return (
          <Dish key={i}
              id={i}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              path={dish.path}
              type={dish.type}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
