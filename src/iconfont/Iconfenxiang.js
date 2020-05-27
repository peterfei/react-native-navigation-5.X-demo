/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconfenxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M849.013258 106.74250644h-179.33049731V6.19274576h350.01371575v351.92416021h-100.54976069V178.78640864l-365.69947834 365.69947834-71.08867997-71.08867997L849.013258 106.74250644zM1020.65169866 508.94154627c0 277.66816278-225.08063772 502.7488005-502.7488005 502.74880196S15.1540962 786.60970905 15.1540962 508.94154627 240.23473537 6.19274576 517.90289816 6.19274576v100.54976068a402.1990413 402.1990413 0 1 0 402.19903983 402.19903983h100.54976067z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

Iconfenxiang.defaultProps = {
  size: 18,
};

export default Iconfenxiang;
