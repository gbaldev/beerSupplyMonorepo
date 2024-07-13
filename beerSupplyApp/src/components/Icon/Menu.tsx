import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconProps } from './types';

const Menu: React.FC<IconProps> = ({ size, color = '#0F0D23' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="4" y="5" width="16" height="1.5" rx="0.75" fill={color} />
      <Rect x="4" y="11" width="10" height="1.5" rx="0.75" fill={color} />
      <Rect x="4" y="17" width="16" height="1.5" rx="0.75" fill={color} />
    </Svg>
  );
};

export default Menu;
