import React from 'react';
import PropTypes from 'prop-types';
import { toFormatWithDots, convertCurrency } from '../../utils';

const DEFAULT_FROM = 'RUB';

function HistoryList({ historyItems }) {


  return (
    <ul className='history__list'>

      {
        historyItems.map(({id, date, currentValueRUB, inputCurrency, outputCurrency, rates}) => {
          const keyValue = id;
          return (
            <li key={keyValue} className='history__item'>
              <time
                className='history__date'
                dateTime={date}
              >
                {toFormatWithDots(date)}
              </time>

              <div className='history__wrapper'>
                <span
                  className='history__input'
                >
                  {`${convertCurrency(currentValueRUB, rates, DEFAULT_FROM, inputCurrency)} ${inputCurrency}`}
                </span>

                <svg
                  className='history__icon history__icon--arrow'
                  width='41'
                  height='18'
                >
                  <use xlinkHref='#icon-arrow-right' />
                </svg>
              </div>

              <span
                className='history__output'
              >
                {`${convertCurrency(currentValueRUB, rates, DEFAULT_FROM, outputCurrency)} ${outputCurrency}`}
              </span>
            </li>
          );
        })
      }

    </ul>
  );
}

HistoryList.propTypes = {
  historyItems: PropTypes.array,
};

export default HistoryList;
