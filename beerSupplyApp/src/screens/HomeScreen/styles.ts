import { Dimensions, StyleSheet } from 'react-native';
import { colors, isAndroid } from '@utils/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useStyle = () => {
  const insets = useSafeAreaInsets();
  const paddingTop = isAndroid ? 70 : insets.top + 55;
  const { width } = Dimensions.get('window');
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
    imageError: {
      width: '100%',
    },
    imageContainer: { position: 'absolute', width: '100%' },
    flatList: { height: '100%' },
  });
};

export default useStyle;
