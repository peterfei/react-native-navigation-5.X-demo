/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconzuojiantouX = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 85.333333h-170.666667L512 512h170.666667z m0 853.333334h-170.666667L512 512h170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconzuojiantouX.defaultProps = {
  size: 18,
};

export default IconzuojiantouX;
