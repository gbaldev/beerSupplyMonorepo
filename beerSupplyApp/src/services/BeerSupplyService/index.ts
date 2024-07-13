import BeerSupplyProvider from './provider';
import Product from '@models/Product';
import Stock from '@models/Stock';
import BeerSupplyApiInstance from '@services/BeerSupplyInstance';

class BeerSupplyService {
  static getProducts = async (): Promise<Product[]> =>
    BeerSupplyProvider.get(BeerSupplyApiInstance.getProducts());
  static getStockBySKU = async (sku: string): Promise<Stock> =>
    BeerSupplyProvider.get(BeerSupplyApiInstance.getStockBySKU(sku));
  static getStock = async (): Promise<{ [skuId: string]: Stock }> =>
    BeerSupplyProvider.get(BeerSupplyApiInstance.getStock());
}

export default BeerSupplyService;
