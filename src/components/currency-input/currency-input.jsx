import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentValueRUB, getRates } from '../../store/data/selectors';
import { convertCurrency } from '../../utils';
import { changeСurrentValueRUB } from '../../store/action';

const DEFAULT_CURRENCY_STORE = 'RUB';


function CurrencyInput ({ fieldType, dataLoadedStatus, pickerCurrency }) {
  const currentValueRUB = useSelector(getCurrentValueRUB);
  const rates = useSelector(getRates);
  const dispatch = useDispatch();

  const value = convertCurrency(currentValueRUB, rates, DEFAULT_CURRENCY_STORE, pickerCurrency);

  const handleChange = (evt) => {
    if (pickerCurrency === DEFAULT_CURRENCY_STORE) {
      dispatch(changeСurrentValueRUB(+evt.target.value));
    } else {
      const valueRUB = convertCurrency(+evt.target.value, rates, pickerCurrency, DEFAULT_CURRENCY_STORE);
      dispatch(changeСurrentValueRUB(valueRUB));
    }
  };


  return (
    <input
      id={`converter-${fieldType}`}
      className={`currency-converter__control currency-converter__control--${fieldType}`}
      type='number'
      min='0'
      value={value}
      disabled={!dataLoadedStatus}
      onChange={handleChange}
    />
  );
}

CurrencyInput.propTypes = {
  fieldType: PropTypes.string,
  pickerCurrency: PropTypes.string,
  dataLoadedStatus: PropTypes.bool,
};


export default CurrencyInput;
