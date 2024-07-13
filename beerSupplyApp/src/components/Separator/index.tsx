import React from 'react';
import { View } from 'react-native';

interface SeparatorProps {
  height?: number;
  width?: number;
}
const Separator: React.ComponentType<SeparatorProps> = ({ height, width }) => {
  return <View style={{ height: height, width: width }} />;
};

export default Separator;
