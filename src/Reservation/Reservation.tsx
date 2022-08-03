import Modal from 'react-modal';
import { useEffect, useState } from 'react';

import './Reservation.scss';
import { amountValidator, nameValidator, phoneValidator } from './Reservation-validators';

Modal.setAppElement('#root');

const Reservation = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = (): void => {
      setIsOpen(true);
    }
    const closeModal = (): void => {
      setIsOpen(false);
    }
    const [inputValues, setInputValue] = useState({
      name: '',
      phone: '',
      amount: '',
    });
  
    const [validation, setValidation] = useState({
      name: '',
      phone: '',
      amount: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
      let errors: {name: string, phone: string, amount: string} = validation;
      errors.name = nameValidator(inputValues.name);
      errors.phone = phoneValidator(inputValues.phone);
      errors.amount = amountValidator(inputValues.amount);
      setValidation(errors);
    }

    useEffect(() => {
      checkValidation();
    }, [inputValues]);

    const checkAndSumbit = () => {
      if (!nameValidator(inputValues.name) && !phoneValidator(inputValues.phone) && amountValidator(inputValues.amount)) {
        openModal();
      }
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
                <div className='field'>
                  <input className='input'
                      type='text'
                      placeholder='Name'
                      name='name'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.name}/>
                  {validation.name && <span className='error'>{validation.name}</span>}
                </div>
                <div className='field'>
                  <input className='input'
                      type='text'
                      placeholder='Phone'
                      name='phone'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.phone}/>
                  {validation.phone && <span className='error'>{validation.phone}</span>}
                </div>
                <div className='field'>
                <input className='input'
                    type='text'
                    onFocus={event => { event.preventDefault(); event.target.type='datetime-local' }} 
                    placeholder='Time preference'
                    min={new Date().toISOString().slice(0, 16)}/>
                </div>
                <div className='field'>
                  <input className='input'
                      type='number'
                      name='amount'
                      placeholder='Number of persons'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.amount}/>
                  {validation.amount && <span className='error'>{validation.amount}</span>}
                </div>
              </div>
              <button autoFocus type='submit' className='button' onClick={checkAndSumbit}>RESERVE NOW</button>
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
