import { NativeStackNavigationProp } from '@react-navigation/native-stack';

enum StackRoutes {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
}

export type StackRoutesList = {
  [StackRoutes.HOME]: {};
  [StackRoutes.DETAIL]: {
    productId: number;
  };
};

export type RootStackNavigationProp<T extends keyof StackRoutesList> =
  NativeStackNavigationProp<StackRoutesList, T>;

export default StackRoutes;
