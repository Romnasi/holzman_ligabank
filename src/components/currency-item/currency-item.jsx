import React from 'react';
import CurrencyPicker from '../currency-picker/currency-picker';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import CurrencyInput from '../currency-input/currency-input';


function CurrencyItem({
  fieldType, label, pickerCurrency, dataLoadedStatus,
}) {
  return (
    <>
      <label
        className='currency-converter__label'
        htmlFor={`converter-${fieldType}`}
      >
        {label}
      </label>

      {
        dataLoadedStatus
          ?
          <CurrencyInput
            pickerCurrency={pickerCurrency}
            fieldType={fieldType}
            dataLoadedStatus={dataLoadedStatus}
          />
          : <Spinner />
      }

      <CurrencyPicker
        pickerCurrency={pickerCurrency}
        fieldType={fieldType}
      />
    </>
  );
}

CurrencyItem.propTypes = {
  fieldType: PropTypes.string,
  label: PropTypes.string,
  pickerCurrency: PropTypes.string,
  dataLoadedStatus: PropTypes.bool,
};


export default CurrencyItem;
