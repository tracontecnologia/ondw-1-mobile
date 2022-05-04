import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

import { Themes } from '../../themes';
import { HeartButton } from '../Buttons';
import { NFTEthPrice } from '../NFTs';

type Props = {
  nftImageURL: string;
  nftName: string;
  authorName: string;
  ethPrice: string;
  isLiked?: boolean;
  onPress: VoidFunction;
  onLike: VoidFunction;
};

export function Card({
  nftImageURL,
  nftName,
  authorName,
  ethPrice,
  isLiked = false,
  onPress,
  onLike,
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: nftImageURL, width: 300, height: 300 }}
        resizeMode="cover"
        height={300}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.nftInfo}>
          <Text style={styles.nftName}>{nftName}</Text>
          <Text style={styles.authorName}>{authorName}</Text>
          <NFTEthPrice price={ethPrice} />
        </View>
        <View style={styles.heartContainer}>
          <HeartButton isLiked={isLiked} onPress={onLike} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 20,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  infoContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nftInfo: {
    flex: 1,
  },
  heartContainer: {
    paddingHorizontal: 10,
  },
  nftName: {
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 18,
    color: '#000',
  },
  authorName: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 2,
  },
});
