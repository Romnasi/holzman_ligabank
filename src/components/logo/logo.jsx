import React from 'react';
import {Link} from 'react-router-dom';


function Logo() {
  return (
    <Link className='header__logo logo' to='/'>
      <svg width="150" height='27'>
        <use xlinkHref="#logo" />
      </svg>
      <span className='visually-hidden'>Логотип «Лига Банк»</span>
    </Link>
  );
}

export default Logo;
