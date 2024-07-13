import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { IconProps } from './types';

const Dots: React.FC<IconProps> = ({ size, color = '#323232' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="5.5" cy="11.5" r="1.5" fill={color} />
      <Circle cx="12.5" cy="11.5" r="1.5" fill={color} />
      <Circle cx="19.5" cy="11.5" r="1.5" fill={color} />
    </Svg>
  );
};

export default Dots;
