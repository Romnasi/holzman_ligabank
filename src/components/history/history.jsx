import React from 'react';
import HistoryList from '../history-list/history-list';

const mockHistoryItems = [
  {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10},
];


function History() {
  const isEmpty = mockHistoryItems.length === 0;

  return (
    <section className='main__history history container'>
      <h2 className='history__title'>История конвертаций</h2>

      {
        isEmpty
          ?
          <span className='history__empty-text'>
            В история конвертаций нет записей
          </span>
          :
          <HistoryList
            historyItems={mockHistoryItems}
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

