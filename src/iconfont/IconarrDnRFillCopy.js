/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconarrDnRFillCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M287.0083795 1007.35040931l499.89751813-499.89751813-498.38273573-498.38273573z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrDnRFillCopy.defaultProps = {
  size: 18,
};

export default IconarrDnRFillCopy;
