import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardsList, Header, Title } from '../../components';
import { useAuthContext } from '../../contexts';
import { useNFT, useUser } from '../../hooks';
import { ExplorerNativeStackProps } from '../../navigations/ExplorerNFTNavigation';

type Props = {
  navigation: NativeStackNavigationProp<ExplorerNativeStackProps>;
};

export function AuthorNFTLikedScreen({ navigation }: Props) {
  const { user: authUser } = useAuthContext();
  const { user, getUserById } = useUser();
  const { likeByNFTId } = useNFT();

  async function handleOnLike(id: string) {
    await likeByNFTId(id);
    await handleGetUserById();
  }

  async function handleGetUserById() {
    if (authUser?.id) {
      getUserById(authUser.id);
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      handleGetUserById();
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={styles.safeAreaView}
      >
        <Header />
        <Title title="Sua coleção de NFTs" />
        <CardsList
          data={user?.likedNfts || []}
          onLike={handleOnLike}
          onPress={(id: string) => navigation.push('NFTView', { id })}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
});
