import React from 'react';
import { View } from 'react-native';
import { useProducts } from '@contexts/Products/context';
import HomeScreen from '@screens/HomeScreen';
import Loader from '@components/Loader';
import Error from '@components/Error';
import styles from './styles';

export interface HomeScreenContainerProps {}

export const HomeScreenContainer: React.FC<HomeScreenContainerProps> = () => {
  const { productById, isLoading, error, refetch } = useProducts();

  // Make here in the container any transformation or calculation before presenting.
  const productList = [...productById.values()];

  let userInfo = {
    gender: 'm',
    name: 'Michael',
  };

  let displayName =
    userInfo.gender === 'm' ? `Mr. ${userInfo.name}` : `Ms. ${userInfo.name}`;

  if (error || isLoading) {
    return (
      <View style={styles.container}>
        {error ? (
          <Error onRefresh={refetch} />
        ) : (
          <Loader isLoading={isLoading} />
        )}
      </View>
    );
  }
  return <HomeScreen products={productList} displayName={displayName} />;
};

export default HomeScreenContainer;
