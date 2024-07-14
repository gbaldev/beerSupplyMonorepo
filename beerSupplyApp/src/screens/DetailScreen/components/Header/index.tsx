import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Product from '@models/Product';
import Stock from '@models/Stock';
import { fontStyle, colors } from '@utils/constants';
import { toDollar } from '@utils/priceHelper';

interface HeaderProps {
  product: Product;
  stock: Stock;
}
const Header: React.ComponentType<HeaderProps> = ({ product, stock }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={fontStyle.DM_SANS_700_24}>{product?.brand}</Text>
        <Text style={[fontStyle.DM_SANS_700_24, { color: colors.orange }]}>
          {toDollar(stock?.price)}
        </Text>
      </View>
      <View style={styles.subheaderContainer}>
        <Text style={fontStyle.DM_SANS_400_14}>
          Origin: {product?.origin}
          {'  '}|{'  '}Stock: {stock?.stock}
        </Text>
      </View>
    </View>
  );
};

export default Header;
