import React from 'react';
import {Link} from 'react-router-dom';
import {socialItems} from '../../const';


function Social() {
  return (
    <section className='footer__social social'>
      <h2 className='visually-hidden'>Мы в социальных сетях</h2>

      <ul className='social__list'>

        {
          socialItems.map(({ id, label, iconWidth, iconHeight, iconId }) => (
            <li key={id} className={`social__item social__item--${id}`}>
              <Link to="#" className='social__link' title={label}>
                <span className='visually-hidden'>{label}</span>
                <svg
                  width={iconWidth}
                  height={iconHeight}
                >
                  <use xlinkHref={`#${iconId}`} />
                </svg>
              </Link>
            </li>
          ))
        }

      </ul>
    </section>
  );
}

export default Social;
