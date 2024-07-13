import { isAndroid } from '@utils/constants';

export interface URLConfig {
  apiVersion: string;
  base: string;
  login: string;
}
/*
   Android and iOS handle localhost differently, to access from Android
    it should be specified as http://10.0.2.2:3000, instead, iOS works
    and MUST use localhost.
*/
const localhost = isAndroid ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

class BeerSupplyApi {
  base = `${localhost}/api`;
  public = `${localhost}/public`;
  getProducts = () => `${this.base}/products`;
  getStockBySKU = (sku: string) => `${this.base}/stock-price/${sku}`;
  getStock = () => `${this.base}/stock-price`;
}

const BeerSupplyApiInstance = new BeerSupplyApi();

export default BeerSupplyApiInstance;
