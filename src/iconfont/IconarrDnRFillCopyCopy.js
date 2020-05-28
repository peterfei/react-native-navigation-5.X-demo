/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconarrDnRFillCopyCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M16.64959069 265.67504617l499.89751813 499.89751813 498.38273573-498.38273573z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrDnRFillCopyCopy.defaultProps = {
  size: 18,
};

export default IconarrDnRFillCopyCopy;
