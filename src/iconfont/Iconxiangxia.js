/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconxiangxia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1006.478222 322.503111L512 796.444444 17.066667 322.673778a54.215111 54.215111 0 0 1 0-78.961778 60.131556 60.131556 0 0 1 82.432 0L512 638.407111l412.216889-394.808889a60.131556 60.131556 0 0 1 82.488889 0 54.215111 54.215111 0 0 1-0.227556 78.904889z"
        fill={getIconColor(color, 0, '#4C5359')}
      />
    </Svg>
  );
};

Iconxiangxia.defaultProps = {
  size: 18,
};

export default Iconxiangxia;
