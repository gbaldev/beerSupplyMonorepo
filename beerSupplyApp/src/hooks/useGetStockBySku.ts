import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useProducts } from '@contexts/Products/context';
import Stock from '@models/Stock';
import BeerSupplyService from '@services/BeerSupplyService';

type GetStockBySkuQueryKey = [string, 'stock'];

const useGetStockBySku = (
  sku: string,
  options?: UseQueryOptions<Stock, Error, Stock, GetStockBySkuQueryKey>,
) => {
  const queryKey: GetStockBySkuQueryKey = [sku, 'stock'];
  const { updateSku } = useProducts();
  return useQuery<Stock, Error, Stock, GetStockBySkuQueryKey>({
    ...options,
    queryKey,
    queryFn: async () => {
      let response = await BeerSupplyService.getStockBySKU(sku);
      updateSku(sku, response);
      return response;
    },
    refetchInterval: 5000,
    refetchIntervalInBackground: false,
  });
};

export default useGetStockBySku;
