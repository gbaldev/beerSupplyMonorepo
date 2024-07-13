import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

const Back: React.FC<IconProps> = ({ size, color = '#323232' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="5" y="11" width="15" height="1.5" fill={color} />
      <Path
        d="M11 5.20001L4 11.7L11 18.2"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default Back;
