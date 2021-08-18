import React, { useState, useCallback } from 'react';
import { currencies } from '../../const';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeInputCurrency, changeOutputCurrency
} from '../../store/action';


function CurrencyPicker({ pickerCurrency, fieldType }) {
  const [isOpened, setIsOpened] = useState(false);

  const dispatch = useDispatch();
  const onChangeInputCurrency = useCallback((currency) => dispatch(changeInputCurrency(currency)), [dispatch]);
  const onChangeOutputCurrency = useCallback((currency) => dispatch(changeOutputCurrency(currency)), [dispatch]);

  const currentLabel = pickerCurrency;

  const handleBtnCurrencyClick = () => {
    setIsOpened((prevState) => !prevState);
  };


  return (
    <div className='currency-picker'>
      <button
        onClick={() => handleBtnCurrencyClick()}
        className={`currency-picker__button ${isOpened && 'currency-picker__button--active'}`}
        type='button'
      >
        <span className='currency-picker__caption'>
          {currentLabel}
        </span>
        <svg
          className='currency-picker__icon-arrow'
          width='17'
          height='10'
        >
          <use xlinkHref='#arrow-bottom' />
        </svg>
      </button>

      <ul className='currency-picker__list'>
        {currencies.map(({id, label, caption}) => {
          const isActive = label === currentLabel;
          return (
            <li
              className='currency-picker__item'
              key={id}
              title={caption}
            >
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  if (fieldType === 'input') {
                    onChangeInputCurrency(label);
                  } else {
                    onChangeOutputCurrency(label);
                  }
                  setIsOpened((prevState) => !prevState);
                }}
                className={`currency-picker__btn-currency ${isActive && 'currency-picker__btn-currency--active'}`}
                type='button'
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CurrencyPicker.propTypes = {
  pickerCurrency: PropTypes.string,
  fieldType: PropTypes.string,
};


export default CurrencyPicker;
