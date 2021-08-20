import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_INPUT_CURRENCY: 'ui/changeInputCurrency',
  CHANGE_OUTPUT_CURRENCY: 'ui/changeOutputCurrency',
  CHANGE_CURRENT_DATE: 'data/changeCurrentDate',
  CHANGE_CURRENT_VALUE_RUB: 'data/changeCurrentValueRub',
  CHANGE_DATA_LOADED_STATUS: 'data/changeDataLoadedStatus',
  CHANGE_CURRENT_RATES: 'data/changeCurrentRates',
  LOAD_CURRENCIES: 'data/loadCurrencies',
  UPDATE_HISTORY_ITEMS: 'data/updateHistoryItems',
  CLEAR_HISTORY: 'data/clearHistory',
};

export const changeInputCurrency = createAction(ActionType.CHANGE_INPUT_CURRENCY, (newCurrency) => ({
  payload: newCurrency,
}));

export const changeDataLoadedStatus = createAction(ActionType.CHANGE_DATA_LOADED_STATUS);

export const changeOutputCurrency = createAction(ActionType.CHANGE_OUTPUT_CURRENCY, (newCurrency) => ({
  payload: newCurrency,
}));

export const changeCurrentDate = createAction(ActionType.CHANGE_CURRENT_DATE, (date) => ({
  payload: date,
}));

export const changeСurrentValueRUB = createAction(ActionType.CHANGE_CURRENT_VALUE_RUB, (value) => ({
  payload: value,
}));

export const loadCurrencies = createAction(ActionType.LOAD_CURRENCIES, (currencies) => ({
  payload: currencies,
}));

export const changeCurrentRates = createAction(ActionType.CHANGE_CURRENT_RATES, (rates) => ({
  payload: rates,
}));

export const updateHistoryItems = createAction(ActionType.UPDATE_HISTORY_ITEMS, (rates) => ({
  payload: rates,
}));

export const clearHistory = createAction(ActionType.CLEAR_HISTORY);


