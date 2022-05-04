import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, Title } from '../../components';
import { useAuthContext } from '../../contexts';
import { useUser } from '../../hooks';
import { AuthenticatedTabNavigation } from '../../navigations/AuthenticatedNavigation';
import { Themes } from '../../themes';

const authorExample = require('../../../assets/author-example.png');

type Props = {
  navigation: NativeStackNavigationProp<AuthenticatedTabNavigation>;
};

export function AuthorProfileScreen({ navigation }: Props) {
  const { user: authUser, setAccessToken, setUser } = useAuthContext();
  const { user, getUserById } = useUser();

  function handleLogout() {
    setAccessToken(undefined!);
    setUser(undefined!);
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

  const nftsTotal = user?.authoredCollections?.reduce((total, collection) => {
    total += collection.nfts.length;
    return total;
  }, 0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={styles.safeAreaView}
      >
        <Header onLogout={handleLogout} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.authorProfile}>
            <View style={styles.authorImageContainer}>
              <Image source={authorExample} style={styles.authorImage} />
            </View>

            <Title title="John Doe" />
            <Text style={styles.hashAuthor}>
              <Text style={{ fontWeight: 'bold' }}>Hash: </Text>
              12312312321
            </Text>

            <View style={styles.authorStatusContainer}>
              <Text style={styles.statusText}>
                <Text style={styles.statusNumberText}>
                  {user?.totalLikesInAuthoredCollections}
                </Text>{' '}
                Curtidas
              </Text>
              <Text style={styles.statusText}>
                <Text style={styles.statusNumberText}>
                  {user?.authoredCollections.length}
                </Text>{' '}
                Coleções
              </Text>
              <Text style={styles.statusText}>
                <Text style={styles.statusNumberText}>{nftsTotal}</Text> NFTs
              </Text>
            </View>
          </View>
        </ScrollView>
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
  scrollView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  authorProfile: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  authorImageContainer: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    alignSelf: 'center',
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#fff',
  },
  hashAuthor: {
    textAlign: 'center',
    fontSize: 16,
  },
  authorStatusContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  statusText: {
    fontFamily: Themes.fontFamily.Poppins.Normal,
    fontSize: 16,
  },
  statusNumberText: {
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 20,
  },
});
