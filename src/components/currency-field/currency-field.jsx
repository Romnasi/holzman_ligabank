import React from 'react';
import CurrencyPicker from '../currency-picker/currency-picker';
import PropTypes from 'prop-types';


function CurrencyField({fieldType, label}) {
  return (
    <>
      <label
        className='currency-converter__label'
        htmlFor={`converter-${fieldType}`}
      >
        {label}
      </label>
      <input
        id={`converter-${fieldType}`}
        className={`currency-converter__control currency-converter__control--${fieldType}`}
        type="number"
        min='0'
      />
      <CurrencyPicker
        fieldType={fieldType}
      />
    </>
  );
}

CurrencyField.propTypes = {
  fieldType: PropTypes.string,
  label: PropTypes.string,
};


export default CurrencyField;
