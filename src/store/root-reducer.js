import {combineReducers} from '@reduxjs/toolkit';
import {data} from './data/data';
import {ui} from './ui/ui';


export const NameSpace = {
  DATA: 'DATA',
  UI: 'UI',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
});
