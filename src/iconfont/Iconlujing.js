/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconlujing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1537 1024" width={size} height={size} {...rest}>
      <Path
        d="M770.98964767 40.2348832A762.31349669 762.31349669 0 0 0 63.45922123 511.92183445a767.56943754 767.56943754 0 0 0 1416.54329858 0A767.43466966 767.43466966 0 0 0 770.98964767 40.2348832z m0 766.49129635A294.80434418 294.80434418 0 1 1 1065.79399276 511.92183445a295.68033447 295.68033447 0 0 1-294.80434509 294.8043451zM947.87225471 511.92183445A176.88260706 176.88260706 0 1 1 770.98964767 335.0392283 177.42167766 177.42167766 0 0 1 947.87225471 511.92183445z"
        fill={getIconColor(color, 0, '#C0C6CC')}
      />
    </Svg>
  );
};

Iconlujing.defaultProps = {
  size: 18,
};

export default Iconlujing;
