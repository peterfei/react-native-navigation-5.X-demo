/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconshouyeHou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1009.721324 536.107681a38.394548 38.394548 0 0 1-54.289891 0L921.541845 502.218093V947.210904a76.789096 76.789096 0 0 1-76.789096 76.789096h-230.367288v-179.174557a102.385461 102.385461 0 1 0-204.770922 0v179.174557H179.247251a76.789096 76.789096 0 0 1-76.789096-76.789096V502.218093l-33.889588 33.889588a38.394548 38.394548 0 1 1-54.289891-54.289891L484.842256 11.228614a38.394548 38.394548 0 0 1 54.289891 0l470.589177 470.589176a38.394548 38.394548 0 0 1 0 54.289891z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconshouyeHou.defaultProps = {
  size: 18,
};

export default IconshouyeHou;
