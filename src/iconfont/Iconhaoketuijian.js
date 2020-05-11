/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconhaoketuijian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 832l64 192h-64l-64-192H320l-64 192H192l64-192H0V0h1024v832h-256z m192-768H64v704h896V64zM383.68 608V224.384L640 416.192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconhaoketuijian.defaultProps = {
  size: 18,
};

export default Iconhaoketuijian;
