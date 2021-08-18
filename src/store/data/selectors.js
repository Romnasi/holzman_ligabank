import {NameSpace} from '../root-reducer';

export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getCurrentValueRUB = (state) => state[NameSpace.DATA].currentValueRUB;
export const getRates = (state) => state[NameSpace.DATA].currencies;
