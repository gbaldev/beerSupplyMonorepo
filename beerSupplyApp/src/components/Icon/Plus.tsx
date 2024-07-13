import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconProps } from './types';

const Plus: React.FC<IconProps> = ({ size, color = 'white' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="11" y="5" width="2" height="14" rx="1" fill={color} />
      <Rect
        x="5"
        y="13"
        width="2"
        height="14"
        rx="1"
        transform="rotate(-90 5 13)"
        fill={color}
      />
    </Svg>
  );
};

export default Plus;
