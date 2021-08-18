import React from 'react';
import CurrencyItem from '../currency-item/currency-item';
import { FIELD } from '../../const';
import { useSelector } from 'react-redux';
import { getInputCurrency, getOutputCurrency } from '../../store/ui/selectors';
import { getDataLoadedStatus } from '../../store/data/selectors';


function CurrencyConverter() {
  const inputCurrency = useSelector(getInputCurrency);
  const outputCurrency = useSelector(getOutputCurrency);
  const dataLoadedStatus = useSelector(getDataLoadedStatus);

  return (
    <section className='main__currency-converter currency-converter container'>
      <h1 className='currency-converter__title'>Конвертер валют</h1>
      <form className='currency-converter__form' action='#' method='get'>

        <fieldset  className='currency-converter__fieldset'>
          <legend className='visually-hidden'>Конвертация валют</legend>

          <ul className='currency-converter__list'>
            <li className='currency-converter__item'>
              <CurrencyItem
                label={FIELD.INPUT.LABEL}
                fieldType={FIELD.INPUT.TYPE}
                pickerCurrency={inputCurrency}
                dataLoadedStatus={dataLoadedStatus}
              />
              <svg
                className='currency-converter__icon currency-converter__icon--convert'
                width='56'
                height='36'
              >
                <use xlinkHref='#icon-convert' />
              </svg>
            </li>

            <li className='currency-converter__item'>
              <CurrencyItem
                label={FIELD.OUTPUT.LABEL}
                fieldType={FIELD.OUTPUT.TYPE}
                pickerCurrency={outputCurrency}
                dataLoadedStatus={dataLoadedStatus}
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
          disabled={!dataLoadedStatus}
        >
            Сохранить результат
        </button>

      </form>
    </section>
  );
}

export default CurrencyConverter;
