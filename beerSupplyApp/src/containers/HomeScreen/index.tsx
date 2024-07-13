import React from 'react';
import { useProducts } from '@contexts/Products/context';
import HomeScreen from '@screens/HomeScreen';

export interface HomeScreenContainerProps {}

export const HomeScreenContainer: React.FC<HomeScreenContainerProps> = () => {
  const { productById } = useProducts();

  // Make here in the container any transformation or calculation before presenting.
  const productList = [...productById.values()];

  let userInfo = {
    gender: 'm',
    name: 'Michael',
  };

  let displayName =
    userInfo.gender === 'm' ? `Mr. ${userInfo.name}` : `Ms. ${userInfo.name}`;

  return <HomeScreen products={productList} displayName={displayName} />;
};

export default HomeScreenContainer;
