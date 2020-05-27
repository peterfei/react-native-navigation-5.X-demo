/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconjuxingkaobei = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 1024H608a64 64 0 0 1-64-64V608a64 64 0 0 1 64-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64zM640 608a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288a32 32 0 0 0-32-32z m-224 416H64a64 64 0 0 1-64-64V608a64 64 0 0 1 64-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64zM96 608a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288a32 32 0 0 0-32-32z m864-128H608a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64zM640 64a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32z m-224 416H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h352a64 64 0 0 1 64 64v352a64 64 0 0 1-64 64zM96 64a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjuxingkaobei.defaultProps = {
  size: 18,
};

export default Iconjuxingkaobei;
