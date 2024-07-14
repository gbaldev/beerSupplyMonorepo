import React, { PropsWithChildren } from 'react';
import { Modal, View } from 'react-native';
import styles from './styles';

interface BaseModalProps {
  visible: boolean;
}

const BaseModal: React.FC<PropsWithChildren<BaseModalProps>> = ({
  visible,
  children,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default BaseModal;
