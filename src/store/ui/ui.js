import { changeInputCurrency, changeOutputCurrency } from '../action';
import { createReducer } from '@reduxjs/toolkit';


const initialState = {
  inputCurrency: 'RUB',
  outputCurrency: 'USD',
};


const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeInputCurrency, (state, action) => {
      state.inputCurrency = action.payload;
    })
    .addCase(changeOutputCurrency, (state, action) => {
      state.outputCurrency = action.payload;
    });
});

export {ui};
