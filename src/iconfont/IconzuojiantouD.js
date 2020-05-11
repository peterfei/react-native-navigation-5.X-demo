/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconzuojiantouD = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M728.61538504 1023.488l39.384615-39.384615v-78.769231L374.66584604 512 768.00000004 118.665846v-78.769231l-39.384615-39.384615L217.12738504 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconzuojiantouD.defaultProps = {
  size: 18,
};

export default IconzuojiantouD;
