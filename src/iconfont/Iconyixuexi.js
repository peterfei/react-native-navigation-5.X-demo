/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconyixuexi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-329.53021665 0a329.53021665 329.53021665 0 1 0 659.0604333 0 329.53021665 329.53021665 0 1 0-659.06043331 0Z"
        fill={getIconColor(color, 0, '#40C78D')}
      />
      <Path
        d="M481.7302959 554.36817043l186.23164822-143.95762882 28.81035575 37.23691448L473.25666194 620.27421375 358.10938882 471.5148592l37.23691451-28.81035636z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconyixuexi.defaultProps = {
  size: 18,
};

export default Iconyixuexi;
