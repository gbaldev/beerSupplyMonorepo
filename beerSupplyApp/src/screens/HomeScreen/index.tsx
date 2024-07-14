import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Text, View, FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStyles from './styles';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
import Separator from '@components/Separator';
import Product from '@models/Product';
import { fontStyle } from '@utils/constants';

interface HomeScreenProps {
  products: Product[];
  displayName: string;
  refetch: () => void;
  isLoading: boolean;
}

export const HomeScreen: React.ComponentType<HomeScreenProps> = ({
  products,
  displayName,
  refetch,
  isLoading,
}) => {
  const OFFSET = 80;
  const navigation = useNavigation();
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const productDeatil = useRef<string>('');
  const productName = useRef<string>('');
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, OFFSET],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const onScrollHandler = useMemo(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: false,
      }),
    [scrollY],
  );

  const Header = useCallback(() => {
    return (
      <Animated.View
        style={[styles.headerContainer, { opacity: headerOpacity }]}
      >
        <Text style={fontStyle.DM_SANS_400_16}>Hi {displayName},</Text>
        <Separator height={10} />
        <Text style={fontStyle.DM_SANS_700_24}>Welcome Back!</Text>
        <Separator height={20} />
        <Text style={fontStyle.DM_SANS_700_18}>Our Products</Text>
      </Animated.View>
    );
  }, [styles.headerContainer, headerOpacity, displayName]);

  const EmptyComponent = useCallback(
    () => (
      <View style={styles.emptyCompContainer}>
        <Text style={[fontStyle.DM_SANS_700_18, styles.emptyCompLabel]}>
          No products available.
        </Text>
      </View>
    ),
    [styles.emptyCompContainer, styles.emptyCompLabel],
  );

  const handleAddToCart = useCallback(
    (prodDetail: string, prodName: string) => {
      productDeatil.current = prodDetail;
      productName.current = prodName;
      setModalVisible(true);
    },
    [],
  );

  const handleOnClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      navigation.setOptions({ title: value > OFFSET ? 'Our Products' : '' });
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY, navigation]);

  return (
    <View style={styles.container}>
      <AddToCartModal
        visible={modalVisible}
        onClose={handleOnClose}
        productDetail={productDeatil.current}
        productName={productName.current}
      />
      <FlatList
        style={styles.flatList}
        ListHeaderComponent={Header}
        onScroll={onScrollHandler}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={isLoading}
        ListEmptyComponent={EmptyComponent}
        data={products}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <ProductCard
              productId={item.id}
              index={index}
              handleAddToCart={handleAddToCart}
            />
          );
        }}
      />
    </View>
  );
};
export default HomeScreen;
