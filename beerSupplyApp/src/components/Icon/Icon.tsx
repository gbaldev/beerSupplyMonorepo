import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Menu from './Menu';
import Plus from './Plus';
import Back from './Back';
import Dots from './Dots';
import Bag from './Bag';

export const IconMap = {
  menu: Menu,
  plus: Plus,
  back: Back,
  dots: Dots,
  bag: Bag,
};

interface Props {
  style?: StyleProp<ViewStyle>;
  name: keyof typeof IconMap;
  size?: number;
  focused?: boolean;
  color?: string;
  horizontal?: boolean;
}

const Icon: React.FC<Props> = ({
  style,
  name,
  size = 24,
  focused = true,
  color,
  ...props
}) => {
  const IconComponent = IconMap[name];

  return (
    <IconComponent
      style={style}
      size={size}
      focused={focused}
      color={color}
      {...props}
    />
  );
};

export default Icon;
