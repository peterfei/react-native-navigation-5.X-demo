/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconguanbi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1009.792 919.296l-90.496 90.496L512 602.496l-407.296 407.296-90.496-90.496L421.504 512 14.208 104.704 104.704 14.144 512 421.504 919.296 14.208l90.496 90.496L602.496 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconguanbi.defaultProps = {
  size: 18,
};

export default Iconguanbi;
