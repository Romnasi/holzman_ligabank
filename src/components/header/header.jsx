import React from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

function Header () {
  return (
    <header className='page__header header'>
      <div className='header__wrapper container'>
        <Logo
          block='header'
        />

        <Nav />
      </div>
    </header>
  );
}

export default Header;
