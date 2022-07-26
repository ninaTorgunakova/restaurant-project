import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import './Gallery.scss';
import { PHOTOS } from './PHOTOS';

const Gallery = () => {
    return (
      <div id='gallery' className='gallery-block'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {PHOTOS.map(photo => 
            <SwiperSlide className='slide' key={photo.id}>
              <img src={photo.path} className='slide-photo' alt=''/>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    );
};

export default Gallery;
