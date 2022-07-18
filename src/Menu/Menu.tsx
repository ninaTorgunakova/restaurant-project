import CarouselComponent from './Carousel/Carousel';
import './Menu.scss';

const Menu = () => {
  return (
      <div id='menu' className='menu-block'>
        <div className='menu-chooser'>
          <img alt='' className='item' src='./item-1.png'/>
          <img alt='' className='item' src='./item-2.png'/>
          <img alt='' className='item' src='./item-3.png'/>
          <img alt='' className='item' src='./item-4.png'/>
          <img alt='' className='item' src='./item-5.png'/>
        </div>
        <div className='carousel'>
          <CarouselComponent/>
        </div>
      </div>
  );
}

export default Menu
