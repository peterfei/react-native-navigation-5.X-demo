/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconsangedian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M102.4 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M921.6 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconsangedian.defaultProps = {
  size: 18,
};

export default Iconsangedian;
