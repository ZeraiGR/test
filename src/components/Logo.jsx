import { Link } from 'react-router-dom';

import images from '../constants/images.js';

export const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source srcset={images.logoMobile} media="(max-width: 630px)" />
        <img src={images.logo} alt="logo" />
      </picture>
    </Link>
  );
};
