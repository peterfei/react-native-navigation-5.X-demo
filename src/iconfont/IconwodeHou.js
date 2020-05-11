/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconwodeHou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M230.4 563.2h563.2a230.4 230.4 0 0 1 0 460.8H230.4a230.4 230.4 0 0 1 0-460.8zM512.2304 0c141.3888 0 256 107.904 256 241.0496S653.6192 512 512.2304 512s-256-138.0352-256-271.1552S370.8672 0 512.2304 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconwodeHou.defaultProps = {
  size: 18,
};

export default IconwodeHou;
