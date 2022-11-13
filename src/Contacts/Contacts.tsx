import './Contacts.scss';

const Contacts = (): JSX.Element => {
  return (
    <footer id='contacts' className='contacts-block'>
      <div className='info'>
          <address className='item'>9 West Street, New York, NY 10128</address>
          <address className='item'>(202) 123-4567</address>
          <address className='item'>AcropSecret@gmail.com</address>
      </div>
      <div className='links'>
        <a href='//www.twitter.com' aria-label='Twitter' rel='noreferrer' target='_blank'>
          <img alt='' className='item' src='./twitter.png'/>
        </a>
        <a href='//www.pinterest.com' aria-label='Pinterest' rel='noreferrer' target='_blank'>
          <img alt='' className='item' src='./pinterest.png'/>
        </a>
      </div>
      <small className='copyright'>© Acropolis Secret 1996-2022. All rights reserved.</small>
    </footer>
  );
};

export default Contacts;
