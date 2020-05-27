/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconarrDnRFillCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M505.47806844 789.11115838l279.65492249-279.65492249-278.8075161-278.8075161z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrDnRFillCopy.defaultProps = {
  size: 18,
};

export default IconarrDnRFillCopy;
