/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconwancheng = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.4 1C230.1 1 1.3 229.8 1.3 512.1c0 282.2 228.8 511 511.1 511 282.2 0 511-228.8 511-511C1023.4 229.8 794.6 1 512.4 1z m336 323.9L434.1 732.6c-1.2 1.2-2.8 1.8-4.4 1.8-1.7 0-3.2-0.7-4.4-1.9l-191-197.7c-2.4-2.7-2.7-6.7-0.6-9.6l26.2-35.7c1-1.3 2.5-2.2 4.1-2.5 1.6-0.2 3.3 0.2 4.6 1.2l156.1 119.6c2.9 2.1 6.9 2 9.7-0.2l379.9-316.5c2.8-2.2 6.7-2 9.3 0.4l24.8 24.4c1.2 1.2 1.8 2.8 1.8 4.4 0.1 1.9-0.6 3.4-1.8 4.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwancheng.defaultProps = {
  size: 18,
};

export default Iconwancheng;
