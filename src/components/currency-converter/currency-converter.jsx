import React from 'react';
import CurrencyField from '../currency-field/currency-field';
import {FIELD} from '../../const';


function CurrencyConverter() {
  return (
    <section className='main__currency-converter currency-converter container'>
      <h1 className='currency-converter__title'>Конвертер валют</h1>
      <form className='currency-converter__form' action='#' method='get'>

        <fieldset  className='currency-converter__fieldset'>
          <legend className='visually-hidden'>Конвертация валют</legend>

          <ul className='currency-converter__list'>
            <li className='currency-converter__item'>
              <CurrencyField
                label={FIELD.INPUT.LABEL}
                fieldType={FIELD.INPUT.TYPE}
              />
            </li>

            <li className='currency-converter__item'>
              <CurrencyField
                label={FIELD.OUTPUT.LABEL}
                fieldType={FIELD.OUTPUT.TYPE}
              />
            </li>

            <li className='currency-converter__item'>
              <label className='visually-hidden' htmlFor="">Дата курса</label>
              <input
                type="text"
                className='currency-converter__control currency-converter__control--date'
              />
              <button
                className='currency-converter__button currency-converter__button--calendar'
                type='button'
              >
                <svg
                  className='currency-converter__icon currency-converter__icon--calendar'
                  width='41'
                  height='44'
                >
                  <use xlinkHref='#icon-calendar' />
                </svg>
              </button>
            </li>
          </ul>
        </fieldset>

        <button
          className='currency-converter__button currency-converter__button--save'
          type='button'
        >
            Сохранить результат
        </button>

      </form>
    </section>
  );
}

export default CurrencyConverter;
