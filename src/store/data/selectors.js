import {NameSpace} from '../root-reducer';

export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getCurrentValueRUB = (state) => state[NameSpace.DATA].currentValueRUB;
export const getRates = (state) => state[NameSpace.DATA].currentRates;
export const getHistoryItems = (state) => state[NameSpace.DATA].historyItems;
export const getCurrentDate = (state) => state[NameSpace.DATA].currentDate;
