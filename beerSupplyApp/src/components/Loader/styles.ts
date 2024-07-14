import { StyleSheet } from 'react-native';
import { colors } from '@utils/constants';

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  label: { color: colors.lightGrey, marginTop: 10 },
});
