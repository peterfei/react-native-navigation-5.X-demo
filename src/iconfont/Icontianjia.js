/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icontianjia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M515.296 6C236.232 6 10 232.202 10 511.294 10 790.328 236.232 1016.56 515.296 1016.56c279.062 0 505.266-226.202 505.266-505.266C1020.562 232.232 794.36 6 515.296 6zM770 560H564v210h-96V560H260v-98h208V252h96v210h206v98z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontianjia.defaultProps = {
  size: 18,
};

export default Icontianjia;
