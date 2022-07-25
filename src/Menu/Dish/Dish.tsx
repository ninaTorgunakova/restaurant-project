import { IDish } from './DISHES';
import './Dish.scss';

const Dish = (props: IDish) => {
    return (
      <div className='dish'>
          <img src={props.path} alt='' className='image'/>
          <div className='info'>
            <span className='name'><b>{props.name}</b></span>
            <span className='description'>{props.description}</span>
            <span className='price'><b>{props.price}</b></span>
          </div>
      </div>
    );
}

export default Dish;
