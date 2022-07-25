import './Reservation.scss';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

const Reservation = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = (): void => {
      setIsOpen(true);
    }
    const closeModal = (): void => {
      setIsOpen(false);
    }
    const modalStyles: Modal.Styles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
    };

    return (
      <div id='reservations' className='reservation-block'>
          <img alt='' className='photo' src='reservation-photo.png'/>
          <div className='form'>
              <img alt='' className='logo' src='reservation-logo.png'/>
              <div className='input-block'>
                <input className='field' type='text' placeholder='Name'/>
                <input className='field' type='text' placeholder='Phone'/>
                <input className='field' type='text' placeholder='Time preference'/>
                <input className='field' type='text' placeholder='Number of persons'/>
              </div>
              <input autoFocus type='submit' className='button' value='RESERVE NOW' onClick={openModal}/>
          </div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel='Modal'>
            <p>Thanks for the application! Our manager will contact you shortly.</p>
            <button className='button modal' onClick={closeModal}>OK</button>
        </Modal>
      </div>
    );
}

export default Reservation;
