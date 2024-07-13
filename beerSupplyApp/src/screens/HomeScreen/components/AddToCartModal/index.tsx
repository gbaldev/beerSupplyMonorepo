import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface AddToCartModalProps {
  visible: boolean;
  onClose: () => void;
  productDetail: string;
  productName: string;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  visible,
  onClose,
  productDetail,
  productName,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            <Text style={styles.boldText}>{productName}</Text> added to cart.
          </Text>
          <Text style={styles.modalText}>
            You have successfully added{' '}
            <Text style={styles.boldText}>{productDetail}</Text> to your cart!
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
