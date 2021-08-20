import { loadCurrencies } from './action';
import { APIRoute, currencies } from '../const';

const API_KEY = 'cb3f39a3548c461397d93f87cee0dc3a';
const key = `app_id=${API_KEY}`;

const dataFormat = '.json?';

const currenciesString = currencies.map(({label}) => label).join(',');
const symbols = `&symbols=${currenciesString}`;

export const fetchTodayRates = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LATEST + dataFormat + key + symbols)
    .then(({data}) => dispatch(loadCurrencies(data)))
);


export const fetchHistoryRates = (date) => (dispatch, _getState, api) => (
  api.get(APIRoute.HISTORICAL + date + dataFormat + key + symbols)
    .then(({data}) => dispatch(loadCurrencies(data)))
);
