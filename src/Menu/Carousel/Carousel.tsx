import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classnames from 'classnames'

import './Carousel.scss';
import './CarouselMenu.css'
import { DISHES } from '../Dish/DISHES';
import Dish from '../Dish/Dish';

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src='./right-arrow.png' alt='' onClick={onClick} className={classnames('next-arrow', className)}/>
  );
}

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src='./left-arrow.png' alt='' onClick={onClick} className={classnames('prev-arrow', className)}/>
  );
}

const Carousel = () => {
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
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        rows: 1
      }
    }]
  };
  return (
    <Slider {...settings}>
      {DISHES.map(dish => {
        return (
          <Dish key={dish.id}
            id={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            path={dish.path}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
