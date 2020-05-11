/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconmulu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.4 1024H153.6a153.6 153.6 0 0 1-153.6-153.6V153.6a153.6 153.6 0 0 1 153.6-153.6h716.8a153.6 153.6 0 0 1 153.6 153.6v716.8a153.6 153.6 0 0 1-153.6 153.6zM716.8 204.8H307.2a102.4 102.4 0 1 0 0 204.8h409.6a102.4 102.4 0 1 0 0-204.8z m51.2 307.2H256a51.2 51.2 0 1 0 0 102.4h512a51.2 51.2 0 1 0 0-102.4z m0 204.8H256a51.2 51.2 0 1 0 0 102.4h512a51.2 51.2 0 1 0 0-102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmulu.defaultProps = {
  size: 18,
};

export default Iconmulu;
