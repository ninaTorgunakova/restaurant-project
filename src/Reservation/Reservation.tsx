import './Reservation.scss';

const Reservation = () => {
    return (
      <div id='reservations' className='reservation-block'>
          <img alt='' className='photo' src='reservation-photo.png'/>
          <div className='form'>
              <img alt='' className='logo' src='reservation-logo.png'/>
              <div className='input-block'>
                <input className='field' type='text' placeholder='Your name'/>
                <input className='field' type='text' placeholder='Your phone'/>
                <input className='field' type='text' placeholder='Date'/>
                <input className='field' type='text' placeholder='Number of persons'/>
              </div>
              <input type='button' className='button' value='RESERVE NOW'/>
          </div>
      </div>
    );
}

export default Reservation;
