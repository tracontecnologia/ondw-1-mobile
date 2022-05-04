import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Themes } from '../../themes';
import { CompassIcon, HeartOutlineIcon, UserIcon } from '../Icons';

export function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <TouchableOpacity
        style={[styles.tabItem, state.index === 0 && styles.activedTabItem]}
        onPress={() => navigation.navigate('AuthorProfile')}
      >
        <UserIcon fill={state.index === 0 ? '#fff' : undefined} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, state.index === 1 && styles.activedTabItem]}
        onPress={() => navigation.navigate('ExplorerNFTs')}
      >
        <CompassIcon fill={state.index === 1 ? '#fff' : undefined} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, state.index === 2 && styles.activedTabItem]}
        onPress={() => navigation.navigate('FavoriteNFTs')}
      >
        <HeartOutlineIcon fill={state.index === 2 ? '#fff' : undefined} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
  },
  tabItem: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 20,
  },
  activedTabItem: {
    backgroundColor: Themes.colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
});
