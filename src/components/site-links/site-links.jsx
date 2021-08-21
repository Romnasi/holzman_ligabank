import React from 'react';
import { Link } from 'react-router-dom';
import { siteLinks } from '../../const';


function SiteLinks() {
  return(
    <div className='footer__site-links site-links'>
      <ul className='site-links__list'>

        {
          siteLinks.map(({ id, caption }) => (
            <li key={id} className={`site-links__item site-links__item--${id}`}>
              <Link
                className={`site-links__link site-links__link--${id}`}
                to="#"
              >
                {caption}
              </Link>
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default SiteLinks;
