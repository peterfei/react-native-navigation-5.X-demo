/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconzhiyelujing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 1024V192h256V64a64 64 0 0 1 64-64h384a64 64 0 0 1 64 64v128h256v832H0zM704 96a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v96h384V96z m256 160H64v160h896V256z m0 224H64v480h896V480z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhiyelujing.defaultProps = {
  size: 18,
};

export default Iconzhiyelujing;
