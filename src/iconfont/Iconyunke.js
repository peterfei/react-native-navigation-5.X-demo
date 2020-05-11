/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconyunke = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M455.798519 632.376889a137.443556 137.443556 0 0 0 112.810666 0L834.697481 494.497185v364.411259a472.177778 472.177778 0 0 1-644.74074 0V494.610963z"
        fill={getIconColor(color, 0, '#FF999E')}
      />
      <Path
        d="M1001.078519 332.420741L568.609185 556.525037a137.443556 137.443556 0 0 1-112.810666 0L126.165333 385.706667l-9.765926 261.688889-75.567407-6.618075 53.096296-271.720296-70.599111-36.636444c-31.156148-16.137481-31.156148-42.325333 0-58.462815L455.798519 49.834667a137.443556 137.443556 0 0 1 112.810666 0l432.469334 224.123259c31.156148 16.175407 31.156148 42.325333 0 58.462815z"
        fill={getIconColor(color, 1, '#FF737A')}
      />
    </Svg>
  );
};

Iconyunke.defaultProps = {
  size: 18,
};

export default Iconyunke;
