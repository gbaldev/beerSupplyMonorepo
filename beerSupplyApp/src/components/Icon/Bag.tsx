import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from './types';

const Bag: React.FC<IconProps> = ({ size, color = '#FF9F24' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="6" r="4.25" stroke={color} stroke-width="1.5" />
      <Path
        d="M4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689Z"
        fill="white"
        stroke={color}
        stroke-width="1.5"
      />
      <Circle cx="9.75" cy="10.75" r="0.75" fill={color} />
      <Circle cx="13.75" cy="10.75" r="0.75" fill={color} />
    </Svg>
  );
};

export default Bag;
