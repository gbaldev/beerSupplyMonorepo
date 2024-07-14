import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import { fontStyle } from '@utils/constants';
import styles from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.ComponentType<LoaderProps> = ({ isLoading }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [isLoading, opacity]);

  return isLoading ? (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/loading.png')}
        style={[styles.image, { opacity: opacity }]}
      />
      <Text style={[fontStyle.DM_SANS_700_24, styles.label]}> Loading </Text>
    </View>
  ) : null;
};

export default Loader;
