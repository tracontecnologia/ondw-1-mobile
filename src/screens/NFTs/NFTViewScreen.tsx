import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, HeartButton, NFTEthPrice, Title } from '../../components';
import { useNFT } from '../../hooks';
import { Themes } from '../../themes';

const authorExample = require('../../../assets/author-example.png');

type Props = {
  route: any;
  navigation: NativeStackNavigationProp<any>;
};

export function NFTViewScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const { nft, getNFTById, likeByNFTId } = useNFT();

  async function handleLikeNFTById() {
    await likeByNFTId(id);
    await getNFTById(id);
  }

  useEffect(() => {
    if (id) {
      getNFTById(id);
    }
  }, [id]);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeAreaView}>
        <Header goBack={() => navigation.goBack()} />

        {!!nft ? (
          <ScrollView style={styles.scrollView}>
            <Title title={nft.name} />
            <Image
              source={{ uri: nft.photoUrl, width: 300, height: 300 }}
              resizeMode="contain"
              style={styles.nftImage}
            />
            <View style={styles.nftInfoContainer}>
              <NFTEthPrice variant="big" price={nft.price} />
              <HeartButton
                isLiked={nft.likedByUser}
                likesNumber={nft.likes}
                onPress={handleLikeNFTById}
              />
            </View>

            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
                <Image source={authorExample} style={styles.authorImage} />
              </View>
              <View>
                <Text style={styles.authorName}>{nft.author.name}</Text>
                <Text>Autor da NFT</Text>
              </View>
            </View>
          </ScrollView>
        ) : (
          <Text>Carregando NFT...</Text>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  nftImage: {
    alignSelf: 'center',
    borderRadius: 4,
  },
  nftInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImageContainer: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    marginRight: 10,
  },
  authorImage: {
    width: 60,
    height: 60,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#fff',
  },
  authorName: {
    fontSize: 20,
    fontFamily: Themes.fontFamily.Poppins.Bold,
    color: '#000',
  },
});
