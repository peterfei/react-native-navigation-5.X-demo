/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icontaolun = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M108.8 678.4l44.8 236.8 217.6-38.4C256 844.8 160 768 108.8 678.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M358.4 620.8l-249.6 44.8v12.8c51.2 89.6 147.2 166.4 262.4 198.4l32-6.4-44.8-249.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 128C262.4 128 64 300.8 64 512c0 57.6 19.2 115.2 44.8 166.4v-12.8l249.6-44.8 44.8 249.6-32 6.4c44.8 12.8 89.6 19.2 140.8 19.2 249.6 0 448-172.8 448-384s-198.4-384-448-384zM256 576c-38.4 0-64-25.6-64-64s25.6-64 64-64 64 25.6 64 64-25.6 64-64 64z m256 0c-38.4 0-64-25.6-64-64s25.6-64 64-64 64 25.6 64 64-25.6 64-64 64z m256 0c-38.4 0-64-25.6-64-64s25.6-64 64-64 64 25.6 64 64-25.6 64-64 64z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Icontaolun.defaultProps = {
  size: 18,
};

export default Icontaolun;
