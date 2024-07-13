import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '@utils/constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 0,
    width: Dimensions.get('screen').width,
    padding: 26,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 54,
    width: 54,
    borderWidth: 1,
    borderColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
    borderRadius: 12,
  },
  button: {
    backgroundColor: colors.orange,
    height: 54,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
