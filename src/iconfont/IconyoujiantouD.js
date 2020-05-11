/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconyoujiantouD = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M39.384615 0.512l-39.384615 39.384615v78.769231L393.334154 512 0 905.334154v78.769231l39.384615 39.384615L550.872615 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconyoujiantouD.defaultProps = {
  size: 18,
};

export default IconyoujiantouD;
