/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconpingfen = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M541.937 840.76l219.468 132.383c39.081 23.598 87.43-11.412 77.03-55.915L780.38 667.597c-4.29-18.637 2.028-38.175 16.492-50.714L990.7 449.034c34.565-29.936 16.153-86.635-29.369-90.588l-255.498-21.914c-19.087-1.582-35.692-13.665-43.146-31.283L562.949 69.852c-17.843-42.025-77.373-42.025-95.109 0L368.102 305.25c-7.454 17.618-24.058 29.701-43.146 31.283L69.222 358.333c-45.516 3.953-63.928 60.657-29.368 90.589L233.682 616.77c14.459 12.538 20.787 32.081 16.491 50.713l-58.06 249.63c-10.389 44.504 37.954 79.514 77.035 55.916l219.474-132.27c16.379-9.83 36.936-9.83 53.315 0z"
        fill={getIconColor(color, 0, '#FFC063')}
      />
    </Svg>
  );
};

Iconpingfen.defaultProps = {
  size: 18,
};

export default Iconpingfen;
