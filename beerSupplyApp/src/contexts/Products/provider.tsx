import React, { useState, useCallback, useEffect, useMemo } from 'react';
import useGetProducts from '@hooks/useGetProducts';
import useGetStock from '@hooks/useGetStock';
import Stock from '@models/Stock';
import { ProductMap, StockMap, ProductContextType, Provider } from './context';

type ProductsProviderProps = {
  children: any;
};

export const ProductsProvider: React.ComponentType<ProductsProviderProps> = ({
  children,
}) => {
  const [productById, setProductsById] = useState<ProductMap>(new Map());
  const [stockBySKU, setStockBySKU] = useState<StockMap>(new Map());
  const {
    data: products,
    isError: productError,
    isLoading: productIsLoading,
    refetch: refetchProducts,
  } = useGetProducts();

  const {
    data: stock,
    isError: stockError,
    isLoading: stockIsLoading,
    refetch: refetchStock,
  } = useGetStock();

  const onSelectSku = useCallback(
    (sku: string, productId: number) => {
      let modifiedProducts = new Map(productById);
      let prod = modifiedProducts.get(productId);

      if (prod) {
        prod.selectedSkuCode = sku;
        modifiedProducts.set(productId, prod);
        setProductsById(modifiedProducts);
      }
    },
    [productById],
  );

  const updateSku = useCallback(
    (sku: string, _stock: Stock) => {
      let modifiedSkus = new Map(stockBySKU);

      if (_stock) {
        modifiedSkus.set(sku, _stock);
        setStockBySKU(modifiedSkus);
      }
    },
    [stockBySKU],
  );

  useEffect(() => {
    if (products) {
      let prodById: ProductMap = new Map();
      products.forEach(p => {
        p.selectedSkuCode = p.skus[0].code;
        prodById.set(p.id, p);
      });
      setProductsById(prodById);
    }
  }, [products]);

  useEffect(() => {
    if (stock) {
      setStockBySKU(new Map(Object.entries(stock)));
    }
  }, [stock]);

  const onRefresh = useCallback(() => {
    refetchProducts();
    refetchStock();
  }, [refetchProducts, refetchStock]);

  const contextValue = useMemo<ProductContextType>(
    () => ({
      productById,
      stockBySKU,
      onSelectSku,
      updateSku,
      isLoading: productIsLoading || stockIsLoading,
      error: productError || stockError,
      refetch: onRefresh,
    }),
    [
      productById,
      stockBySKU,
      onSelectSku,
      updateSku,
      productIsLoading,
      stockIsLoading,
      productError,
      stockError,
      onRefresh,
    ],
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default ProductsProvider;
