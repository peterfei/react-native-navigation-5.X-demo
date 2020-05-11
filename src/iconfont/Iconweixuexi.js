/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconweixuexi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 833.29243259a321.29243259 321.29243259 0 1 1 321.29243259-321.29243259 321.29243259 321.29243259 0 0 1-321.29243259 321.29243259zM512 328.40432398a183.59567602 183.59567602 0 1 0 183.59567602 183.59567602 183.59567602 183.59567602 0 0 0-183.59567602-183.59567602z"
        fill={getIconColor(color, 0, '#F7F7F7')}
      />
    </Svg>
  );
};

Iconweixuexi.defaultProps = {
  size: 18,
};

export default Iconweixuexi;
