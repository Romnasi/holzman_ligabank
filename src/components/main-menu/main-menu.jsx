import React from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';


function MainMenu() {
  return (
    <div className='header__main-menu main-menu'>
      <div className='main-menu__wrapper container'>
        <Logo
          block='main-menu'
        />
        <Nav />
      </div>
    </div>
  );
}

export default MainMenu;
