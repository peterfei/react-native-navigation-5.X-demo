/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconshijian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c211.776 0 384 172.288 384 384 0 211.744-172.256 384-384 384C300.288 896 128 723.744 128 512 128 300.288 300.288 128 512 128M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512c282.752 0 512-229.248 512-512S794.752 0 512 0M640 704c-16.384 0-32.768-6.24-45.28-18.752l-127.904-127.968c-11.616-11.488-18.784-27.456-18.816-45.088l0-0.032L448 512 448 256c0-35.392 28.64-64 64-64 35.36 0 64 28.608 64 64l0 229.504 109.248 109.248c24.992 24.992 24.992 65.536 0 90.528C672.768 697.76 656.384 704 640 704"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

export default Iconshijian;
