import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import useStyles from './styles';
import Header from './components/Header';
import Description from './components/Description';
import SizeSection from './components/SizeSection';
import CartSection from './components/CartSection';
import Separator from '@components/Separator';
import Product from '@models/Product';
import Stock from '@models/Stock';
import AddToCartModal from '@screens/HomeScreen/components/AddToCartModal';
import BeerSupplyApiInstance from '@services/BeerSupplyInstance';
import { determineImageUri, notFoundPath } from '@utils/constants';

interface DetailScreenProps {
  product: Product;
  stock: Stock;
  onSelectSku?: (sku: string, productId: number) => void;
}

export const DetailScreen: React.ComponentType<DetailScreenProps> = ({
  product,
  stock,
  onSelectSku,
}) => {
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState<{ uri: string }>();

  const handleAddToCart = useCallback(() => {
    setModalVisible(true);
  }, []);

  const productInfo = useMemo(
    () => ({
      productDeatil: product.skus.find(s => s.code === product.selectedSkuCode)
        ?.name,
      productName: product.brand,
    }),
    [product],
  );

  const handleOnClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  useEffect(() => {
    let _uri = `${BeerSupplyApiInstance.public}${product?.image}`;
    determineImageUri(_uri, setUri);
  }, [product.image]);

  return (
    <View style={styles.container}>
      <AddToCartModal
        visible={modalVisible}
        onClose={handleOnClose}
        productDetail={productInfo.productDeatil ?? ''}
        productName={productInfo.productName}
      />
      <Image source={uri ? uri : notFoundPath} style={styles.image} />
      <Separator height={10} />
      <ScrollView
        contentContainerStyle={styles.scrollviewContentContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
      >
        <Header product={product} stock={stock} />
        <Separator height={29} />
        <Description product={product} />
        <Separator height={22} />
        <SizeSection product={product} onSelectSku={onSelectSku} />
      </ScrollView>
      <CartSection handleAddToCart={handleAddToCart} />
    </View>
  );
};

export default DetailScreen;
