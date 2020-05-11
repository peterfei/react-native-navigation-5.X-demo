/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconquanbu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576.112 703.883H896.05v63.919H576.112zM576.112 576.046H896.3v63.919H576.112zM576.112 831.721H895.8v63.919H576.112z"
        fill={getIconColor(color, 0, '#515151')}
      />
      <Path
        d="M447.671 448.24h-320v-320h320v320z m-256-64h192v-192h-192v192zM896.096 447.996h-320v-320h320v320z m-256-64h192v-192h-192v192zM448.296 896.053h-320v-320h320v320z m-256-64h192v-192h-192v192z"
        fill={getIconColor(color, 1, '#515151')}
      />
    </Svg>
  );
};

Iconquanbu.defaultProps = {
  size: 18,
};

export default Iconquanbu;
