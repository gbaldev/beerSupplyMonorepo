import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Product from '@models/Product';
import BeerSupplyService from '@services/BeerSupplyService';

export const useGetProducts = (
  options?: Omit<
    UseQueryOptions<Product[], [], Product[], string[]>,
    'queryFn' | 'queryKey'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: ['products'],
    queryFn: BeerSupplyService.getProducts,
  });
};

export default useGetProducts;
