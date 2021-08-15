import React from 'react';
import CreditPromo from '../credit-promo/credit-promo';
import MainMenu from '../main-menu/main-menu';


function Header() {
  return (
    <header className='page__header header'>

      <MainMenu />

      <CreditPromo />

    </header>
  );
}

export default Header;
