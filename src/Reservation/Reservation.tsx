import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';

import './Reservation.scss';
import { amountValidator, nameValidator, phoneValidator } from './Reservation-validators';

Modal.setAppElement('#root');

const Reservation = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);
    const [inputValues, setInputValue] = useState({
      name: {
        value: '',
        dirty: false
      },
      phone: {
        value: '',
        dirty: false
      },
      date: {
        value: '',
        dirty: false
      },
      amount: {
        value: '',
        dirty: false
      }
    });
  
    const [validation, setValidation] = useState({
      name: '',
      phone: '',
      amount: '',
      date: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const updatedValues = { ...inputValues, [name]: { value, dirty: true } };
      setInputValue(prevState => {
        return {...prevState, ...updatedValues};
      });
    }

    const setValidationErrors = () => {
      let errors = validation;
      if (inputValues.name.dirty) {
        errors.name = nameValidator(inputValues.name.value);
      }
      if (inputValues.phone.dirty) {
        errors.phone = phoneValidator(inputValues.phone.value);
      }
      if (inputValues.amount.dirty) {
        errors.amount = amountValidator(inputValues.amount.value);
      }
      if (inputValues.date.dirty) {
        errors.amount = amountValidator(inputValues.amount.value);
      }
      if (errors.name || errors.phone || errors.date ||errors.amount ||
        !inputValues.name.dirty || !inputValues.phone.dirty || !inputValues.date.dirty || !inputValues.amount.dirty) {
        setIsDisabledSubmit(true);
      } else {
        setIsDisabledSubmit(false);
      }
      setValidation(prevState => {
        return {...prevState, ...errors};
      });
    }

    useEffect(() => {
      setValidationErrors();
    }, [inputValues]);

    const submitForm = () => {
      openModal();
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
                      placeholder='Name *'
                      name='name'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.name.value}/>
                  {inputValues.name.dirty && <span className='error'>{validation.name}</span>}
                </div>
                <div className='field'>
                  <input className='input'
                      type='text'
                      placeholder='Phone *'
                      name='phone'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.phone.value}/>
                  {inputValues.phone.dirty && <span className='error'>{validation.phone}</span>}
                </div>
                <div className='field'>
                <label>
                  <input className='input'
                      type='text'
                      name='date'
                      onChange={(e) => handleChange(e)}
                      onFocus={event => { event.preventDefault(); event.target.type='datetime-local' }} 
                      placeholder='Time preference *'
                      min={new Date().toISOString().slice(0, 16)}
                      value={inputValues.date.value}/>
                    {inputValues.date.dirty && <span className='error'>{validation.date}</span>}
                </label>
                </div>
                <div className='field'>
                  <input className='input'
                      type='number'
                      name='amount'
                      placeholder='Number of persons *'
                      onChange={(e) => handleChange(e)}
                      value={inputValues.amount.value}/>
                  {inputValues.amount.dirty && <span className='error'>{validation.amount}</span>}
                </div>
              </div>
              <button disabled={isDisabledSubmit} autoFocus type='submit' className='button' onClick={submitForm}>RESERVE NOW</button>
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
