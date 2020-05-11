/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconbiji = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.8 1024H358.9632l102.4-102.4H972.8a51.2 51.2 0 0 1 0 102.4zM882.432 358.7584l12.8-12.8-217.1904-217.2416L750.4384 56.32a102.4 102.4 0 0 1 144.7936 0L967.68 128.7168a102.4 102.4 0 0 1 0 144.7936zM217.2416 1024H0v-217.2416L641.8432 164.9664l217.1904 217.2416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbiji.defaultProps = {
  size: 18,
};

export default Iconbiji;
