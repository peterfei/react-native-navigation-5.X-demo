/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconarrDnRFillCopyCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M234.88884162 505.47806844l279.65492249 279.65492249 278.8075161-278.8075161z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrDnRFillCopyCopy.defaultProps = {
  size: 18,
};

export default IconarrDnRFillCopyCopy;
