/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconhuodong1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M284.216889 148.461037S409.6-8.248889 678.760296 49.493333 991.118222 32.995556 1024 0v445.44s-78.089481 121.66637-320.568889 49.493333-271.17037 74.24-271.17037 74.24z"
        fill={getIconColor(color, 0, '#B5D8FF')}
      />
      <Path
        d="M56.888889 1024v-113.777778h170.666667v-75.851852h170.666666v-75.851851h77.425778L247.826963 90.453333a23.021037 23.021037 0 0 1 14.184296-29.070222A22.509037 22.509037 0 0 1 290.62637 75.851852L523.377778 758.518519H625.777778v75.851851h170.666666v75.851852h170.666667v113.777778H56.888889z"
        fill={getIconColor(color, 1, '#78B7FF')}
      />
    </Svg>
  );
};

Iconhuodong1.defaultProps = {
  size: 18,
};

export default Iconhuodong1;
