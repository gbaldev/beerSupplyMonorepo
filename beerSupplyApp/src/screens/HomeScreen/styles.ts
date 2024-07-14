import { StyleSheet } from 'react-native';
import { colors, isAndroid } from '@utils/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useStyle = () => {
  const insets = useSafeAreaInsets();
  const paddingTop = isAndroid ? 70 : insets.top + 55;
  return StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: paddingTop,
      backgroundColor: colors.appBackground,
      flex: 1,
      justifyContent: 'center',
    },
    headerContainer: {},
    navContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: colors.white,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 50,
    },
    flatList: { height: '100%' },
  });
};

export default useStyle;
