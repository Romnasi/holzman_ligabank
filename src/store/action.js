import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_INPUT_CURRENCY: 'ui/changeInputCurrency',
  CHANGE_OUTPUT_CURRENCY: 'ui/changeOutputCurrency',
  CHANGE_CURRENT_VALUE_RUB: 'data/changeCurrentValueRub',
  LOAD_CURRENCIES: 'data/loadCurrencies',
  LOAD_HISTORY_CURRENCIES: 'data/loadHistoryCurrencies',
};

export const changeInputCurrency = createAction(ActionType.CHANGE_INPUT_CURRENCY, (newCurrency) => ({
  payload: newCurrency,
}));

export const changeOutputCurrency = createAction(ActionType.CHANGE_OUTPUT_CURRENCY, (newCurrency) => ({
  payload: newCurrency,
}));

export const changeСurrentValueRUB = createAction(ActionType.CHANGE_CURRENT_VALUE_RUB, (value) => ({
  payload: value,
}));

export const loadCurrencies = createAction(ActionType.LOAD_CURRENCIES, (currencies) => ({
  payload: currencies,
}));

export const loadHistoryCurrencies = createAction(ActionType.LOAD_HISTORY_CURRENCIES, (historyCurrencies) => ({
  payload: historyCurrencies,
}));
