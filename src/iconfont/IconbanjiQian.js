/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconbanjiQian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M985.6 1024h-947.2a38.4 38.4 0 1 1 0-76.8H102.4V76.8a76.8 76.8 0 0 1 76.8-76.8h460.8a76.8 76.8 0 0 1 76.8 76.8v153.6h128a76.8 76.8 0 0 1 76.8 76.8v640h64a38.4 38.4 0 1 1 0 76.8zM640 102.4a25.6 25.6 0 0 0-25.6-25.6H204.8a25.6 25.6 0 0 0-25.6 25.6v844.8h460.8V102.4z m204.8 230.4a25.6 25.6 0 0 0-25.6-25.6h-102.4v640h128V332.8z m-524.8-76.8h179.2a38.4 38.4 0 1 1 0 76.8h-179.2a38.4 38.4 0 1 1 0-76.8z m0 230.4h179.2a38.4 38.4 0 1 1 0 76.8h-179.2a38.4 38.4 0 1 1 0-76.8z m0 230.4h179.2a38.4 38.4 0 1 1 0 76.8h-179.2a38.4 38.4 0 1 1 0-76.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconbanjiQian.defaultProps = {
  size: 18,
};

export default IconbanjiQian;
