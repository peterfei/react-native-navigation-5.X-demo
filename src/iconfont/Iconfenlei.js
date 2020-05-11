/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconfenlei = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 0h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64z m32 64h288a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z m512-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64H608a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64z m32 64h288a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32h-288a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zM64 544h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V608a64 64 0 0 1 64-64z m32 64h288a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-288a32 32 0 0 1 32-32z m512-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64H608a64 64 0 0 1-64-64V608a64 64 0 0 1 64-64z m32 64h288a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32h-288a32 32 0 0 1-32-32v-288a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#8A9199')}
      />
    </Svg>
  );
};

Iconfenlei.defaultProps = {
  size: 18,
};

export default Iconfenlei;
