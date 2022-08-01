import Modal from 'react-modal';
import { useState } from 'react';

import './Reservation.scss';

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
                <input className='field'
                    type='text'
                    placeholder='Name'
                    maxLength={30}/>
                <input className='field'
                    type='text'
                    placeholder='Phone'
                    pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'
                    maxLength={30}/>
                <input className='field'
                    type='text'
                    onFocus={event => { event.preventDefault(); event.target.type='datetime-local' }} 
                    placeholder='Time preference'
                    min={new Date().toISOString().slice(0, 16)}/>
                <input className='field'
                    type='number'
                    placeholder='Number of persons'
                    max={50}
                    min={1}/>
              </div>
              <input autoFocus type='submit' className='button' value='RESERVE NOW' onClick={openModal}/>
          </div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel='reservation-modal'>
            <p>Thanks for the application! Our manager will contact you shortly.</p>
            <button className='button modal' onClick={closeModal}>OK</button>
        </Modal>
      </div>
    );
}

export default Reservation;
