import classnames from 'classnames';

import './Arrows.scss';

export const NextArrow = (props: any): JSX.Element => {
  const { className, onClick } = props;
  return (
    <img src='./right-arrow.png' alt='' onClick={onClick} className={classnames('next-arrow', className)}/>
  );
}

export const PrevArrow = (props: any): JSX.Element => {
  const { className, onClick } = props;
  return (
    <img src='./left-arrow.png' alt='' onClick={onClick} className={classnames('prev-arrow', className)}/>
  );
}
