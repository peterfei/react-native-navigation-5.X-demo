/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconshouqi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M28.444444 170.666667h967.111112a28.444444 28.444444 0 0 1 0 56.888889H28.444444a28.444444 28.444444 0 0 1 0-56.888889z m0 312.888889h967.111112a28.444444 28.444444 0 0 1 0 56.888888H28.444444a28.444444 28.444444 0 0 1 0-56.888888z m0 312.888888h967.111112a28.444444 28.444444 0 0 1 0 56.888889H28.444444a28.444444 28.444444 0 0 1 0-56.888889z"
        fill={getIconColor(color, 0, '#4C5359')}
      />
    </Svg>
  );
};

Iconshouqi.defaultProps = {
  size: 18,
};

export default Iconshouqi;
