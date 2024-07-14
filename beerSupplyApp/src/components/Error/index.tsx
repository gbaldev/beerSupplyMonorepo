import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { fontStyle, colors } from '@utils/constants';
import styles from './styles';

interface ErrorProps {
  onRefresh?: () => void;
}

const Error: React.ComponentType<ErrorProps> = ({ onRefresh }) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/error.png')}
          style={styles.imageError}
          resizeMode="contain"
        />
      </View>
      {onRefresh && (
        <TouchableOpacity style={styles.button} onPress={onRefresh}>
          <Text style={[fontStyle.DM_SANS_700_24, { color: colors.white }]}>
            Retry
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Error;
