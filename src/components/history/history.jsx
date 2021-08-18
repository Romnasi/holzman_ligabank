import React from 'react';

function History() {
  return (
    <section className='main__history history container'>
      <h2 className='history__title'>История конвертаций</h2>

      <ul className='history__list'>
        <li className='history__item'>
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
          <span
            className='history__output'
          >
            13,1234 USD
          </span>
        </li><li className='history__item'>
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
          <span
            className='history__output'
          >
            13,1234 USD
          </span>
        </li>

        <li className='history__item'>
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
          <span
            className='history__output'
          >
            13,1234 USD
          </span>
        </li>

        <li className='history__item'>
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
          <span
            className='history__output'
          >
            13,1234 USD
          </span>
        </li>

      </ul>
      <button
        className='history__button history__button--clear'
        type='button'
      >
        Очистить историю
      </button>
    </section>
  );
}

export default History;

