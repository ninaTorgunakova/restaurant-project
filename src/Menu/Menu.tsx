import { useState } from 'react';
import CarouselComponent from './Carousel';
import { DishType } from './Dish/DISHES';
import './Menu.scss';

const Menu = () => {
  const [curType, setCurType] = useState(DishType.DESERT);
  return (
      <div id='menu' className='menu-block'>
        <div className='section'>
          <img alt='' className='item' src='./deserts.png' onClick={() => setCurType(DishType.DESERT)}/>
          <img alt='' className='item' src='./soups.png' onClick={() => setCurType(DishType.SOUP)}/>
          <img alt='' className='item' src='./drinks.png' onClick={() => setCurType(DishType.DRINK)}/>
          <img alt='' className='item' src='./first-courses.png' onClick={() => setCurType(DishType.FIRST_COURSE)}/>
          <img alt='' className='item' src='./salads.png' onClick={() => setCurType(DishType.SALAD)}/>
        </div>
        <div className='carousel'>
          <CarouselComponent curType={curType}/>
        </div>
      </div>
  );
}

export default Menu
