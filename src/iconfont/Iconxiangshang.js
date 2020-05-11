/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconxiangshang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M17.522 701.497L512 227.556 1006.933 701.326a54.215 54.215 0 0 1 0 78.962 60.132 60.132 0 0 1-82.43199999 0L512 385.593l-412.217 394.80899999a60.132 60.132 0 0 1-82.489 1e-8 54.215 54.215 0 0 1 0.228-78.905z"
        fill={getIconColor(color, 0, '#4C5359')}
      />
    </Svg>
  );
};

Iconxiangshang.defaultProps = {
  size: 18,
};

export default Iconxiangshang;
