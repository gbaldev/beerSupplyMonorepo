import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import Separator from '@components/Separator';
import Product from '@models/Product';
import { fontStyle, colors } from '@utils/constants';

interface DescriptionProps {
  product: Product;
}

const Description: React.ComponentType<DescriptionProps> = ({ product }) => {
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(4);
  const toggleText = () => setNumberOfLines(numberOfLines ? undefined : 4);

  return (
    <View>
      <Text style={fontStyle.DM_SANS_700_16}>Description</Text>
      <Separator height={10} />
      <View>
        <Text style={fontStyle.DM_SANS_400_14} numberOfLines={numberOfLines}>
          {product.information}
        </Text>
        <Pressable style={styles.button} onPress={toggleText}>
          <Text
            style={[
              fontStyle.DM_SANS_400_14,
              {
                color: numberOfLines ? colors.orange : colors.darkGrey,
              },
            ]}>
            <Text style={[{ color: colors.darkGrey }]}> ...</Text> read{' '}
            {numberOfLines ? 'more' : 'less'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Description;
