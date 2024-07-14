import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useProducts } from '@contexts/Products/context';
import useGetStockBySku from '@hooks/useGetStockBySku';
import StackRoutes, { StackRoutesList } from '@navigation/routes';
import DetailScreen from '@screens/DetailScreen';
import Error from '@components/Error';
import { View } from 'react-native';
import Loader from '@components/Loader';
import styles from './styles';

export interface DetailScreenContainerProps {}

export const DetailScreenContainer: React.FC<
  DetailScreenContainerProps
> = () => {
  const {
    params: { productId },
  } = useRoute<RouteProp<StackRoutesList, StackRoutes.DETAIL>>();
  const { productById, onSelectSku } = useProducts();
  const product = productById.get(productId);
  const {
    data: selectedStock,
    isError,
    isLoading,
  } = useGetStockBySku(product?.selectedSkuCode ?? '');

  if (
    !product ||
    !product.selectedSkuCode ||
    !selectedStock ||
    isError ||
    isLoading
  ) {
    return (
      <View style={styles.container}>
        {isError ? <Error /> : <Loader isLoading={isLoading} />}
      </View>
    );
  }

  return (
    <DetailScreen
      product={product}
      stock={selectedStock}
      onSelectSku={onSelectSku}
    />
  );
};

export default DetailScreenContainer;
