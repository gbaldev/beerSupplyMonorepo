import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '@utils/constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  imageError: {
    width: '100%',
  },
  imageContainer: { position: 'absolute', width: '100%' },
  button: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    width: width * 0.8,
    borderRadius: 12,
    padding: 10,
    bottom: 100,
    elevation: 2,
    backgroundColor: colors.orange,
  },
});
