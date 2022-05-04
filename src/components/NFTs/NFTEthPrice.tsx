import { View, Text, StyleSheet } from 'react-native';

import { EthIcon } from '../Icons';

type Props = {
  variant?: 'default' | 'big';
  price: string;
};

export function NFTEthPrice({ price, variant = 'default' }: Props) {
  let fontSize = 16;
  let ethSize: any = { width: undefined, height: undefined };
  if (variant === 'big') {
    fontSize = 20;
    ethSize = { width: 16, height: 20 };
  }

  return (
    <View style={styles.ethPriceContainer}>
      <EthIcon {...ethSize} />
      <Text style={[styles.ethPrice, { fontSize }]}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ethPriceContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ethPrice: {
    color: '#000',
    marginLeft: 5,
  },
});
