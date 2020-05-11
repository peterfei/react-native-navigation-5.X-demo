/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconjingpinke = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M948.148148 815.407407h-130.446222l68.266667 114.403556a36.939852 36.939852 0 0 1-14.241186 51.38963 39.670519 39.670519 0 0 1-53.096296-13.767112L727.817481 815.407407H293.243259l-89.73274 155.496297a37.925926 37.925926 0 0 1-65.687704-37.925926l67.830518-117.570371H75.851852a37.925926 37.925926 0 0 1-37.925926-37.925926V75.851852a37.925926 37.925926 0 0 1 37.925926-37.925926h872.296296a37.925926 37.925926 0 0 1 37.925926 37.925926v701.629629a37.925926 37.925926 0 0 1-37.925926 37.925926z"
        fill={getIconColor(color, 0, '#FFD95E')}
      />
      <Path
        d="M682.666667 417.393778C682.666667 461.255111 421.546667 644.740741 378.88 644.740741s-46.212741-454.656 0-454.656S682.666667 373.57037 682.666667 417.393778z"
        fill={getIconColor(color, 1, '#FFF3CC')}
      />
    </Svg>
  );
};

Iconjingpinke.defaultProps = {
  size: 18,
};

export default Iconjingpinke;
