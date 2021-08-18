import React from 'react';
import PropTypes from 'prop-types';


function HistoryList({ historyItems }) {


  return (
    <ul className='history__list'>

      {
        historyItems.map(({id}) => {
          const keyValue = id;
          return (
            <li key={keyValue} className='history__item'>
              <time
                className='history__date'
                dateTime='2020-11-25'
              >
                25.11.2020
              </time>
              <span
                className='history__input'
              >
                1000 RUB
              </span>

              <svg
                className='history__icon history__icon--arrow'
                width='41'
                height='18'
              >
                <use xlinkHref='#icon-arrow-right' />
              </svg>
              <span
                className='history__output'
              >
                13,1234 USD
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
