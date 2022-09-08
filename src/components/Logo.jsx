import { Link } from 'react-router-dom';

import images from '../constants/images.js';

export const Logo = () => {
  return (
    <Link to="/">
      <img width={273} height={63} src={images.logo} alt="logo" />
    </Link>
  );
};
