import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import './Reservation.scss';
import { amountValidator, dateValidator, nameValidator, phoneValidator } from './Reservation-validators';

Modal.setAppElement('#root');

const Reservation = (): JSX.Element => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
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
        value: new Date(),
        dirty: true
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

    useEffect(() => {
      setValidationErrors();
    }, [inputValues]);

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      const updatedValues = { ...inputValues, [name]: { value, dirty: true } };
      setInputValue(prevState => {
        return {...prevState, ...updatedValues};
      });
    }

    const handleChangeDate = (date: Date): void => {
      const updatedValues = { ...inputValues, date: { value: date, dirty: true } };
      setInputValue(prevState => {
        return {...prevState, ...updatedValues};
      });
    }

    const setValidationErrors = (): void => {
      let errors = validation;
      if (inputValues.name.dirty) {
        errors.name = nameValidator(inputValues.name.value);
      }
      if (inputValues.phone.dirty) {
        errors.phone = phoneValidator(inputValues.phone.value);
      }
      if (inputValues.date.dirty) {
        errors.date = dateValidator(inputValues.date.value);
      }
      if (inputValues.amount.dirty) {
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

    const getTomorrowDate = (): Date => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    }

    return (
      <section id='reservations' className='reservation-block'>
          <img alt='' className='photo' src='reservation-photo.webp'/>
          <div className='form'>
              <img alt='' className='logo' src='reservation-logo.webp'/>
              <div className='input-block'>
                <div className='field'>
                  <input className='input'
                      type='text'
                      placeholder='Name *'
                      name='name'
                      onChange={(e) => handleChangeText(e)}
                      value={inputValues.name.value}/>
                  {inputValues.name.dirty && <span className='error'>{validation.name}</span>}
                </div>
                <div className='field'>
                  <input className='input'
                      type='text'
                      placeholder='Phone *'
                      name='phone'
                      onChange={(e) => handleChangeText(e)}
                      value={inputValues.phone.value}/>
                  {inputValues.phone.dirty && <span className='error'>{validation.phone}</span>}
                </div>
                <div className='field date'>
                  <DateTimePicker
                      className='input'
                      onChange={(e) => handleChangeDate(e)}
                      value={inputValues.date.value}
                      minDate={getTomorrowDate()}
                      disableClock={true}/>
                  {inputValues.date.dirty && <span className='error'>{validation.date}</span>}
                </div>
                <div className='field'>
                  <input className='input'
                      type='number'
                      name='amount'
                      placeholder='Number of persons *'
                      onChange={(e) => handleChangeText(e)}
                      value={inputValues.amount.value}/>
                  {inputValues.amount.dirty && <span className='error'>{validation.amount}</span>}
                </div>
              </div>
              <button disabled={isDisabledSubmit}
                  autoFocus type='submit'
                  className='button'
                  onClick={openModal}>
                RESERVE NOW
              </button>
          </div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel='reservation-modal'>
            <p>Thanks for the application! Our manager will contact you shortly.</p>
            <button className='button modal' onClick={closeModal}>OK</button>
        </Modal>
      </section>
    );
}

export default Reservation;
