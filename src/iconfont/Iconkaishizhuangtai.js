/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconkaishizhuangtai = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M978.823529 361.411765H105.411765a45.176471 45.176471 0 0 0-45.176471 45.17647v178.191059L0 662.588235h978.823529a45.176471 45.176471 0 0 0 45.176471-45.17647V406.588235a45.176471 45.176471 0 0 0-45.176471-45.17647z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconkaishizhuangtai.defaultProps = {
  size: 18,
};

export default Iconkaishizhuangtai;
