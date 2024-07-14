import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import BaseModal from '@components/BaseModal';

interface ErrorModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  visible,
  onClose,
  message,
}) => {
  return (
    <BaseModal visible={visible}>
      <>
        <Text style={styles.modalText}>
          <Text style={styles.boldText}>Opps, something went wrong.</Text>
        </Text>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.textStyle}>Ok</Text>
        </TouchableOpacity>
      </>
    </BaseModal>
  );
};

export default ErrorModal;
