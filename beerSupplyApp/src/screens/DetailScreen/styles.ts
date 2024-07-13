import { Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, isAndroid } from '@utils/constants';

const useStyle = () => {
  const insets = useSafeAreaInsets();
  const paddingTop = isAndroid ? 70 : insets.top + 55;
  return StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: paddingTop,
      backgroundColor: colors.appBackground,
      flex: 1,
      alignItems: 'center',
    },
    scrollview: {
      backgroundColor: colors.white,
      flex: 1,
      width: Dimensions.get('screen').width,
      padding: 16,
      paddingTop: 45,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      marginBottom: 110,
    },
    image: { height: 240, width: 240, resizeMode: 'contain' },
    scrollviewContentContainer: {
      paddingBottom: 50,
      paddingHorizontal: 5,
    },
  });
};

export default useStyle;
