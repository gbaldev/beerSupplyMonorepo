import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import Icon from '@components/Icon';
import { fontStyle, colors } from '@utils/constants';

interface CartSectionProps {
  handleAddToCart: () => void;
}

const CartSection: React.ComponentType<CartSectionProps> = ({
  handleAddToCart,
}) => {
  const cartHandler = () => {
    Alert.alert(
      'Cart icon pressed',
      'This should take you to the cart page',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={cartHandler}>
        <Icon name="bag" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={[fontStyle.DM_SANS_500_16, { color: colors.white }]}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSection;
