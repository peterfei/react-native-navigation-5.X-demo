/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconpaichu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.03578746 1013.05452074a501.59132637 501.59132637 0 0 1-501.01873431-501.01873328 501.59132637 501.59132637 0 0 1 501.01873431-501.01873431 501.59132637 501.59132637 0 0 1 501.01873328 501.01873431 501.59132637 501.59132637 0 0 1-501.01873328 501.01873328z m0-644.16694383a143.1482095 143.1482095 0 0 0-143.14821055 143.14821055 143.1482095 143.1482095 0 0 0 143.14821055 143.14820951 143.1482095 143.1482095 0 0 0 143.14820951-143.14820951 143.1482095 143.1482095 0 0 0-143.14820951-143.14821055z"
        fill={getIconColor(color, 0, '#FF783C')}
      />
    </Svg>
  );
};

Iconpaichu.defaultProps = {
  size: 18,
};

export default Iconpaichu;
