import { createContext, useContext } from 'react';
import Product from '@models/Product';
import Stock from '@models/Stock';

export type ProductMap = Map<number, Product>;
export type StockMap = Map<string, Stock>;

export type ProductContextType = {
  productById: ProductMap;
  stockBySKU: StockMap;
  onSelectSku: (sku: string, productId: number) => void;
  updateSku: (sku: string, stock: Stock) => void;
  isLoading: boolean;
  error: boolean;
  refetch: () => void;
};

const ProductsContext = createContext<ProductContextType | null>(null);
ProductsContext.displayName = 'ProductsContext';

export const Consumer = ProductsContext.Consumer;
export const Provider = ProductsContext.Provider;

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductContext must be used within a UseProductContextProvider.',
    );
  }

  return context;
};
