import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import Product from '@models/Product';
import Stock from '@models/Stock';
import { fontStyle, colors } from '@utils/constants';
import { toDollar } from '@utils/priceHelper';
import ErrorModal from '../ErrorModal';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  product?: Product;
  stock?: Stock;
  isLoading: boolean;
  isError: boolean;
}
const Header: React.ComponentType<HeaderProps> = ({
  product,
  stock,
  isLoading,
  isError,
}) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const retryTimes = useRef<number>(0);
  const navigation = useNavigation();
  const handleOnClose = useCallback(() => {
    if (!!stock && !!stock.price && !!stock.stock) {
      setDisplayModal(false);
    } else {
      navigation.goBack();
    }
  }, [navigation, stock]);

  useEffect(() => {
    if (isError) {
      console.log('Pasada nro', retryTimes.current);
      retryTimes.current += 1;
      if (retryTimes.current === 1) {
        if (!!stock && !!stock.price && !!stock.stock) {
          setMessage(
            'Something went wrong while trying to get the product information. The data might be outdated, so please double-check at the time of purchase.',
          );
        } else {
          setMessage(
            'Something went wrong while trying to get the product information. Please try again later!',
          );
        }
        retryTimes.current = 0;
        setDisplayModal(true);
      }
    }
  }, [isError, stock]);

  return (
    <View>
      <ErrorModal
        visible={displayModal}
        onClose={handleOnClose}
        message={message}
      />
      <View style={styles.headerContainer}>
        <Text style={fontStyle.DM_SANS_700_24}>{product?.brand}</Text>
        <Text style={[fontStyle.DM_SANS_700_24, { color: colors.orange }]}>
          {(isLoading || isError) && !stock?.price ? (
            <ActivityIndicator size={24} color={colors.orange} />
          ) : (
            toDollar(stock?.price)
          )}
        </Text>
      </View>
      <View style={styles.subheaderContainer}>
        <Text style={fontStyle.DM_SANS_400_14}>
          Origin: {product?.origin}
          {'  '}|{'  '}Stock:{' '}
          {isLoading || (isError && !stock?.stock) ? null : stock?.stock}
        </Text>
        {(isLoading || isError) && !stock?.stock && (
          <ActivityIndicator color={colors.lightGrey} />
        )}
      </View>
    </View>
  );
};

export default Header;
