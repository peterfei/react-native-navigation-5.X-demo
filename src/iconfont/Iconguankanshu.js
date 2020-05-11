/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconguankanshu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 938.666667H85.333333V768a340.309333 340.309333 0 0 1 294.058667-336.554667A245.674667 245.674667 0 0 1 341.333333 298.666667 195.584 195.584 0 0 1 512 85.333333a195.584 195.584 0 0 1 170.666667 213.333334 245.674667 245.674667 0 0 1-38.058667 132.778666A340.309333 340.309333 0 0 1 938.666667 768v170.666667h-85.333334zM512 170.666667a113.408 113.408 0 0 0-85.333333 128A113.408 113.408 0 0 0 512 426.666667a113.408 113.408 0 0 0 85.333333-128A113.408 113.408 0 0 0 512 170.666667z m341.333333 597.333333a256 256 0 0 0-256-256H426.666667a256 256 0 0 0-256 256v85.333333h682.666666V768z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconguankanshu.defaultProps = {
  size: 18,
};

export default Iconguankanshu;
