import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from '@components/Icon';
import Separator from '@components/Separator';
import { useProducts } from '@contexts/Products/context';
import StackRoutes, { StackRoutesList } from '@navigation/routes';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ViewStyle, TouchableOpacity, Text, Image, View } from 'react-native';
import BeerSupplyApiInstance from '@services/BeerSupplyInstance';
import { determineImageUri, fontStyle, notFoundPath } from '@utils/constants';
import { toDollar } from '@utils/priceHelper';
import styles from './styles';

interface ProductCardProps {
  productId: number;
  index: number;
  handleAddToCart: (prodDeatil: string, prodName: string) => void;
}
const ProductCard: React.ComponentType<ProductCardProps> = ({
  productId,
  index,
  handleAddToCart,
}) => {
  const { productById, stockBySKU } = useProducts();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRoutesList>>();
  const product = productById?.get(productId);
  const [uri, setUri] = useState<{ uri: string }>();
  const productInfo = useMemo(() => {
    let stock = stockBySKU?.get(product?.selectedSkuCode ?? '');
    return {
      stock: stockBySKU?.get(product?.selectedSkuCode ?? ''),
      priceInDollars: toDollar(stock?.price),
      priceDetail:
        product?.skus.find(p => p.code === product.selectedSkuCode)?.name ?? '',
    };
  }, [product, stockBySKU]);

  const dynamicRadius: ViewStyle =
    index % 2 === 0
      ? { borderTopRightRadius: 32 }
      : { borderTopLeftRadius: 32 };

  const navigate = useCallback(() => {
    product?.id &&
      navigation.navigate(StackRoutes.DETAIL, {
        productId: product?.id,
      });
  }, [product, navigation]);

  useEffect(() => {
    let _uri = `${BeerSupplyApiInstance.public}${product?.image}`;
    determineImageUri(_uri, setUri);
  }, [product?.image]);

  return (
    <TouchableOpacity
      style={[styles.container, dynamicRadius]}
      onPress={navigate}>
      <Text style={fontStyle.DM_SANS_500_16}>{product?.brand}</Text>
      <Separator height={10} />
      <Image
        style={styles.image}
        source={uri ? uri : notFoundPath}
        resizeMode="contain"
      />
      <Separator height={10} />
      <View style={styles.bottomRowContainer}>
        <View>
          <Text style={fontStyle.DM_SANS_400_16}>
            {productInfo.priceInDollars}
          </Text>
          {productInfo.priceDetail && (
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={fontStyle.DM_SANS_400_8}>
              {productInfo.priceDetail}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() =>
            handleAddToCart(productInfo.priceDetail, product?.brand ?? '')
          }>
          <Icon name="plus" size={24} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
