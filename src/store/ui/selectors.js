import {NameSpace} from '../root-reducer';

export const getInputCurrency = (state) => state[NameSpace.UI].inputCurrency;
export const getOutputCurrency = (state) => state[NameSpace.UI].outputCurrency;
