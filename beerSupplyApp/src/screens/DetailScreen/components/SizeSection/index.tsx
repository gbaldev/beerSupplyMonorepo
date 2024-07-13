import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Separator from '../../../../components/Separator';
import { colors, fontStyle } from '../../../../utils/constants';
import Product from '../../../../models/Product';
import styles from './styles';

interface SizeSectionProps {
  product: Product;
  onSelectSku?: (sku: string, productId: number) => void;
}

const SizeSection: React.ComponentType<SizeSectionProps> = ({
  product,
  onSelectSku,
}) => {
  return (
    <View>
      <Text style={fontStyle.DM_SANS_700_16}>Size</Text>
      <Separator height={13} />
      <FlatList
        data={product.skus}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = product.selectedSkuCode === item.code;
          return (
            <TouchableOpacity
              onPress={() => onSelectSku?.(item.code, product.id)}
              style={[
                styles.itemNameContainer,
                isSelected && { borderColor: colors.orange },
              ]}>
              <Text
                style={[
                  fontStyle.DM_SANS_400_14,
                  isSelected && { color: colors.orange },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SizeSection;
