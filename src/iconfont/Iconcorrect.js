/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconcorrect = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M969.68433497 157.03149913L345.16238491 781.43246471 54.31566503 490.58574483l-42.82851032 42.82851034 333.6752302 333.5542457 667.35046038-667.2294759z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcorrect.defaultProps = {
  size: 18,
};

export default Iconcorrect;
