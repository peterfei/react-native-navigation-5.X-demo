/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconyidu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m217.216-708.053333L439.466667 605.610667 294.784 460.8l-72.533333 72.533333 217.216 217.088L801.621333 388.266667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyidu.defaultProps = {
  size: 18,
};

export default Iconyidu;
