/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconxuexizhong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 833.78924308a321.78924308 321.78924308 0 1 1 321.78924308-321.78924308 321.78924308 321.78924308 0 0 1-321.78924308 321.78924308zM512 328.12043226a183.87956774 183.87956774 0 1 0 183.87956774 183.87956774 183.87956774 183.87956774 0 0 0-183.87956774-183.87956774z m0 505.66881081A321.78924308 321.78924308 0 1 1 512 190.21075692v643.57848616z"
        fill={getIconColor(color, 0, '#40C78D')}
      />
    </Svg>
  );
};

Iconxuexizhong.defaultProps = {
  size: 18,
};

export default Iconxuexizhong;
