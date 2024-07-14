import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useProducts } from '@contexts/Products/context';
import useGetStockBySku from '@hooks/useGetStockBySku';
import StackRoutes, { StackRoutesList } from '@navigation/routes';
import DetailScreen from '@screens/DetailScreen';
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

  return (
    <DetailScreen
      product={product}
      stock={selectedStock}
      onSelectSku={onSelectSku}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default DetailScreenContainer;
