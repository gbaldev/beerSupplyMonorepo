import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Stock from '@models/Stock';
import BeerSupplyService from '@services/BeerSupplyService';

export const useGetStock = (
  options?: Omit<
    UseQueryOptions<
      { [stockId: string]: Stock },
      {},
      { [stockId: string]: Stock },
      string[]
    >,
    'queryFn' | 'queryKey'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: ['stock'],
    queryFn: BeerSupplyService.getStock,
  });
};

export default useGetStock;
