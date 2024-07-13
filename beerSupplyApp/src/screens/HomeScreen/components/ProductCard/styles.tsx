import { StyleSheet } from 'react-native';
import { colors } from '@utils/constants';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 0,
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  image: { height: 122, width: 122 },
  bottomRowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-end',
    height: 40,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: -16,
    height: 40,
    width: 40,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 10,
    backgroundColor: colors.orange,
  },
});
