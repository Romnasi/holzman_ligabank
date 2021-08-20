import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../../store/action';
import { getHistoryItems } from '../../store/data/selectors';
import HistoryList from '../history-list/history-list';


function History() {
  const historyItems = useSelector(getHistoryItems);
  const dispatch = useDispatch();
  const isEmpty = historyItems.length === 0;

  const onButtonClearClick = () => {
    dispatch(clearHistory());
  };

  return (
    <section className='main__history history container'>
      <h2 className='history__title'>История конвертаций</h2>

      {
        isEmpty
          ?
          <span className='history__empty-text'>
            В истории конвертаций пока нет записей
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
          onClick={onButtonClearClick}
        >
          Очистить историю
        </button>
      }
    </section>
  );
}

export default History;

