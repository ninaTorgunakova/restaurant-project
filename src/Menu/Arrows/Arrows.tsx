import classnames from 'classnames';
import './Arrows.scss';

export function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src='./right-arrow.png' alt='' onClick={onClick} className={classnames('next-arrow', className)}/>
  );
}

export function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img src='./left-arrow.png' alt='' onClick={onClick} className={classnames('prev-arrow', className)}/>
  );
}
