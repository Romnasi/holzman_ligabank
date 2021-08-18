import {
  loadCurrencies,
  loadHistoryCurrencies,
  changeСurrentValueRUB
} from '../action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  historyItems: [],
  currentValueRUB: 1000,
  currencies: {},
  historyCurrencies: [],
  isDataLoaded: false,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrencies, (state,action) => {
      state.isDataLoaded = true;
      state.currencies = action.payload;
    })
    .addCase(loadHistoryCurrencies, (state,action) => {
      state.isDataLoaded = true;
      state.currencies = action.payload;
    })
    .addCase(changeСurrentValueRUB, (state,action) => {
      state.currentValueRUB = action.payload;
    });
});


export {data};
