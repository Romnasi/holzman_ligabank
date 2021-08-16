import React, { useState } from 'react';
import {currencies} from '../../const';
import PropTypes from 'prop-types';

const defaultLabel = {
  input: 'RUB',
  output: 'USD',
};


function CurrencyPicker({fieldType}) {
  const [isOpened, setIsOpened] = useState(false);

  const currentLabel = defaultLabel[fieldType];

  const handleBtnCurrencyChange = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <div className='currency-picker'>
      <button
        onClick={() => handleBtnCurrencyChange()}
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
  fieldType: PropTypes.string,
};


export default CurrencyPicker;
