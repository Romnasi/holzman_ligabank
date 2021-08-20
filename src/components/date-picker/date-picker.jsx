import React, { useCallback } from 'react';
import Flatpickr from 'react-flatpickr';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentDate } from '../../store/data/selectors';
import { changeCurrentDate, changeDataLoadedStatus } from '../../store/action';
import { toShortISO, toFormatWithDots } from '../../utils';
import { fetchHistoryRates } from '../../store/api-actions';

import 'flatpickr/dist/themes/material_blue.css';

const minDate = dayjs().subtract(7, 'day').format('D.MM.YYYY');

const options = {
  defaultDate: 'today',
  maxDate: 'today',
  dateFormat: 'd.m.Y',
  minDate,
  disableMobile: 'true',
};


function DatePicker() {
  const dispatch = useDispatch();
  const onChangeDate = useCallback((date) => dispatch(changeCurrentDate(date)), [dispatch]);
  let currentDate = useSelector(getCurrentDate);

  const formatedDate = toFormatWithDots(currentDate);

  return (
    <div className='currency-converter__item-wrapper'>

      <label className='visually-hidden' htmlFor="">Дата курса</label>

      <Flatpickr
        className='currency-converter__control currency-converter__control--date'
        options={options}
        value={formatedDate}
        onChange={(newDate) => {
          const date = toShortISO(newDate);

          if (currentDate !== date) {
            onChangeDate(date);
            dispatch(changeDataLoadedStatus());
            dispatch(fetchHistoryRates(date));
            currentDate = date;
          }
        }}
      />

      <svg
        className='currency-converter__icon currency-converter__icon--calendar'
        width='41'height='44'
      >
        <use xlinkHref='#icon-calendar' />
      </svg>
    </div>
  );
}

export default DatePicker;
