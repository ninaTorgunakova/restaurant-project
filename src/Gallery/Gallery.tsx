import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './Gallery.scss';
import { PHOTOS } from './PHOTOS';
import { NextArrow, PrevArrow } from '../arrows';

const Gallery = () => {
    const settings = {
      useCSS: true,
      dots: false,
      swipe: true,
      arrows: true,
      infinite: true,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      dotsClass: 'slick-dots slick-thumb',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots: any) => (
          <div>
              <ul className='dotsBlock'> {dots} </ul>
          </div>
      ),
      responsive:[{
        breakpoint: 700,
        settings: {
            rows: 1,
            slidesToShow: 1
        }
      }]
    };
    return (
      <div id='gallery' className='gallery-block'>
        <Slider {...settings} className='gallery'>
          {PHOTOS.map(photo => 
            <div className='photo' key={photo.id}><img src={photo.path} alt=''/></div>
          )}
        </Slider>
      </div>
    );
};

export default Gallery;
