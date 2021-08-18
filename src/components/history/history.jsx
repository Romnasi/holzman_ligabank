import React from 'react';
import { useSelector } from 'react-redux';
import { getHistoryItems } from '../../store/data/selectors';
import HistoryList from '../history-list/history-list';


function History() {
  const historyItems = useSelector(getHistoryItems);
  const isEmpty = historyItems.length === 0;

  return (
    <section className='main__history history container'>
      <h2 className='history__title'>История конвертаций</h2>

      {
        isEmpty
          ?
          <span className='history__empty-text'>
            В история конвертаций пока нет записей
          </span>
          :
          <HistoryList
            historyItems={historyItems}
          />
      }

      {
        !isEmpty
        &&
        <button
          className='history__button history__button--clear'
          type='button'
          disabled={isEmpty}
        >
          Очистить историю
        </button>
      }
    </section>
  );
}

export default History;

