/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconyoujiantouX = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 85.333333h170.666667l341.333333 426.666667H341.333333z m0 853.333334h170.666667l341.333333-426.666667H341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconyoujiantouX.defaultProps = {
  size: 18,
};

export default IconyoujiantouX;
