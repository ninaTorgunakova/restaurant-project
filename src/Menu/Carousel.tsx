import { createRef, RefObject, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { DISHES, DishType } from './Dish/DISHES';
import Dish from './Dish/Dish';
import { NextArrow, PrevArrow } from './Arrows/Arrows';


const Carousel = (props: {curType: DishType}) => {
  const sliderRef: RefObject<Slider> = createRef();
  useEffect(() => {
    for (let i = 0; i < DISHES.length; i++) {
      if (props.curType === DISHES[i].type && sliderRef.current) {
        console.log(DISHES[i])
        sliderRef.current.slickGoTo(i);
      }
    }
  }, [props.curType]);
  
  const settings = {
    useCSS: true,
    dots: true,
    swipe: true,
    arrows: true,
    infinite: false,
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
      breakpoint: 1300,
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
