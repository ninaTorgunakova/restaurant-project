import './Contacts.scss';

const Contacts = () => {
  return (
    <div id='contacts' className='contacts-block'>
        <div className='info'>
            <span className='item'>9 West Street, New York, NY 10128</span>
            <span className='item'>(202) 123-4567</span>
            <span className='item'>AcropSecret@gmail.com</span>
        </div>
        <div className='links'>
          <a href='//www.twitter.com' target='_blank'>
            <img alt='' className='item' src='./twitter.png'/>
          </a>
          <a href='//www.pinterest.com' target='_blank'>
            <img alt='' className='item' src='./pinterest.png'/>
          </a>
        </div>
        <div className='copyright'>© Acropolis Secret 1996-2022. All rights reserved.</div>
    </div>
  );
};

export default Contacts;
