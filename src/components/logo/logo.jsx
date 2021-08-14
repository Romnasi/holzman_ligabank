import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Logo({block}) {
  return (
    <Link className={`${block}__logo logo`} to='/'>
      <svg
        width='150'
        height='27'
        role="img"
        aria-label="Логотип «Лига Банк»"
      >
        <use xlinkHref="#logo" />
      </svg>
    </Link>
  );
}


Logo.propTypes = {
  block: PropTypes.string,
};


export default Logo;
