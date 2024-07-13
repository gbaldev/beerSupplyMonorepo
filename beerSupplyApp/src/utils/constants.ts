import { QueryClient } from '@tanstack/react-query';
import { Platform, StyleSheet } from 'react-native';
import axios from 'axios';
import BeerSupplyProvider from '@services/BeerSupplyService/provider';

export const colors = {
  appBackground: '#F5F5F5',
  white: '#FFFFFF',
  lightGrey: '#646464',
  darkGrey: '#323232',
  orange: '#FF9F24',
  black: '#000',
};

export const fontStyle = StyleSheet.create({
  DM_SANS_400_8: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 20.83,
    color: colors.lightGrey,
    fontFamily: 'DMSans-Regular',
    overflow: 'hidden',
    width: '90%',
  },
  DM_SANS_400_16: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.83,
    color: colors.lightGrey,
    fontFamily: 'DMSans-Regular',
  },
  DM_SANS_400_14: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.83,
    color: colors.lightGrey,
    fontFamily: 'DMSans-Regular',
  },
  DM_SANS_700_24: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 31.25,
    color: colors.darkGrey,
  },
  DM_SANS_700_18: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23.44,
    color: colors.darkGrey,
  },
  DM_SANS_700_16: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20.83,
    color: colors.darkGrey,
  },
  DM_SANS_500_16: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    color: colors.darkGrey,
  },
});

export const notFoundPath = require('../assets/images/notfound.png');

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await BeerSupplyProvider.get(queryKey[0] as string);

        return response.data;
      },
    },
  },
});

export const determineImageUri = async (
  uri: string,
  callback: (uri: { uri: string } | undefined) => void,
) => {
  try {
    const res = await axios.head(uri);
    if (res.status === 200) {
      callback({ uri });
    } else {
      callback(undefined);
    }
  } catch {
    callback(undefined);
  }
};

export const isAndroid = Platform.OS === 'android';
