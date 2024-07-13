import React from 'react';
import ProductsProvider from './src/contexts/Products/provider';
import StackNavigator from './src/navigation/stackNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/utils/constants';

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <StackNavigator />
        </ProductsProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
