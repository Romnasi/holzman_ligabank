import React from 'react';
import CurrencyConverter from '../currency-converter/currency-converter';
import History from '../history/history';

function Main() {
  return (
    <main className='page__main main'>

      <CurrencyConverter />

      <History />

    </main>
  );
}

export default Main;
