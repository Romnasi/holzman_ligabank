import React from 'react';
import FreeNumber from '../free-number/free-number';
import FreeShortNumber from '../free-short-number/free-short-number';
import LegalAddress from '../legal-address/legal-address';
import SiteLinks from '../site-links/site-links';
import Social from '../social/social';


function Footer() {
  return (
    <footer className='page__footer footer'>
      <div className='footer__wrapper container'>
        <LegalAddress />

        <SiteLinks />

        <FreeShortNumber />

        <FreeNumber />

        <Social />
      </div>
    </footer>
  );
}

export default Footer;
