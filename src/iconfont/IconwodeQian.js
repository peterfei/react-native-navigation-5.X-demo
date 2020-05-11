/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconwodeQian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.6 1024H230.4a230.4 230.4 0 0 1 0-460.8h563.2a230.4 230.4 0 0 1 0 460.8z m0-384H230.4a153.6 153.6 0 0 0 0 307.2h563.2a153.6 153.6 0 0 0 0-307.2z m-281.3696-128c-141.3888 0-256-138.0352-256-271.1552S370.8672 0 512.2304 0s256 107.904 256 241.0496S653.6192 512 512.2304 512z m-0.0768-435.2a174.08 174.08 0 0 0-179.2 168.7296c0 93.184 80.2304 189.824 179.2 189.824s179.2-96.64 179.2-189.824a174.08 174.08 0 0 0-179.2-168.7296z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconwodeQian.defaultProps = {
  size: 18,
};

export default IconwodeQian;
