import { createReducer } from '@reduxjs/toolkit';
import { toShortISO } from '../../utils';
import {
  loadCurrencies,
  changeСurrentValueRUB,
  changeCurrentDate,
  changeDataLoadedStatus,
  changeCurrentRates,
  updateHistoryItems,
  clearHistory
} from '../action';


const initialState = {
  currentDate: toShortISO(),
  currentValueRUB: 1000,
  currentRates: {},
  historyItems: [],
  isDataLoaded: false,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrencies, (state, action) => {
      const { rates } = action.payload;
      state.currentRates = rates;
      state.isDataLoaded = true;
    })
    .addCase(changeСurrentValueRUB, (state, action) => {
      state.currentValueRUB = action.payload;
    })
    .addCase(changeCurrentDate, (state, action) => {
      state.currentDate = action.payload;
    })
    .addCase(changeDataLoadedStatus, (state) => {
      state.isDataLoaded = false;
    })
    .addCase(changeCurrentRates, (state, action) => {
      state.currentRates = action.payload;
    })
    .addCase(updateHistoryItems, (state, action) => {
      let newItems = [
        ...state.historyItems,
        action.payload,
      ];

      if (newItems.length > 10) {
        newItems = newItems.slice(1, newItems.length);
      }

      state.historyItems = newItems;
    })
    .addCase(clearHistory, (state) => {
      state.historyItems = [];
    });
});


export { data };
