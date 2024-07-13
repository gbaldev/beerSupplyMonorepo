import SKU from './SKU';

interface Product {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: SKU[];
  selectedSkuCode?: string;
}

export default Product;
