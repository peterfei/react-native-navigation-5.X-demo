/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icontianjia2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M861.541 469.516h-307.058v-307.058c0-23.464-19.020-42.484-42.484-42.484-23.463 0-42.484 19.020-42.484 42.484v307.058h-307.058c-23.464 0-42.484 19.020-42.484 42.484 0 23.463 19.020 42.484 42.484 42.484h307.058v307.058c0 23.463 19.020 42.484 42.484 42.484 23.463 0 42.484-19.021 42.484-42.484v-307.058h307.058c23.463 0 42.484-19.020 42.484-42.484-0.001-23.463-19.022-42.484-42.485-42.484z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontianjia2.defaultProps = {
  size: 18,
};

export default Icontianjia2;
