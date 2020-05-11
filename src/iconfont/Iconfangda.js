/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconfangda = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M723.02687896 19.60394907h281.36917197v70.34229298h-281.36917197z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M934.05375795 19.60394907h70.34229298v281.36917197h-70.34229298zM22.55832537 19.60394907h70.342293v281.36917197h-70.342293z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M22.55832537 19.60394907h281.36917197v70.34229298h-281.36917197zM22.55832537 932.92828125h281.36917197v70.34229298h-281.36917197z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M22.55832537 721.90140228h70.342293v281.36917195h-70.342293zM934.05375795 721.90140228h70.34229298v281.36917195h-70.34229298z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M723.02687896 932.92828125h281.36917197v70.34229298h-281.36917197z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

Iconfangda.defaultProps = {
  size: 18,
};

export default Iconfangda;
