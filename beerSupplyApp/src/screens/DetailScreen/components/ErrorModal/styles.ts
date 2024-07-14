import { StyleSheet } from 'react-native';
import { colors } from '@utils/constants';

export default StyleSheet.create({
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.orange,
    alignSelf: 'stretch',
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
