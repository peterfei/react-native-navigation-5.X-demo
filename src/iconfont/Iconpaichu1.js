/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconpaichu1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1010.66666667a504.57600014 504.57600014 0 0 1-504-504 504.57600014 504.57600014 0 0 1 504-504 504.57600014 504.57600014 0 0 1 504 504 504.57600014 504.57600014 0 0 1-504 504zM512 74.66666653a432.50400014 432.50400014 0 0 0-432.00000014 432.00000014 432.50400014 432.50400014 0 0 0 432.00000014 432.00000014 432.50400014 432.50400014 0 0 0 432.00000014-432.00000014 432.432 432.432 0 0 0-432.00000014-432.00000014z"
        fill={getIconColor(color, 0, '#E3E6E8')}
      />
    </Svg>
  );
};

Iconpaichu1.defaultProps = {
  size: 18,
};

export default Iconpaichu1;
