import React from 'react';
import CurrencyItem from '../currency-item/currency-item';
import { FIELD } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import { getInputCurrency, getOutputCurrency } from '../../store/ui/selectors';
import { getDataLoadedStatus, getCurrentDate, getCurrentValueRUB, getRates } from '../../store/data/selectors';
import DatePicker from '../date-picker/date-picker';
import { nanoid } from 'nanoid';
import { updateHistoryItems } from '../../store/action';


function CurrencyConverter() {
  const inputCurrency = useSelector(getInputCurrency);
  const outputCurrency = useSelector(getOutputCurrency);
  const dataLoadedStatus = useSelector(getDataLoadedStatus);
  const currentDate = useSelector(getCurrentDate);
  const currentValueRUB = useSelector(getCurrentValueRUB);
  const rates = useSelector(getRates);
  const dispatch = useDispatch();

  const onButtonSaveClick = () => {
    const historyItem = {
      id: nanoid(),
      date: currentDate,
      currentValueRUB,
      inputCurrency,
      outputCurrency,
      rates,
    };
    dispatch(updateHistoryItems(historyItem));
  };


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

              <DatePicker />

            </li>
          </ul>
        </fieldset>

        <button
          className='currency-converter__button currency-converter__button--save'
          type='button'
          disabled={!dataLoadedStatus}
          onClick={onButtonSaveClick}
        >
            Сохранить результат
        </button>

      </form>
    </section>
  );
}

export default CurrencyConverter;
