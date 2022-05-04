import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { AuthorProfileScreen } from '../screens';
import { ExplorerNFTNavigation } from './ExplorerNFTNavigation';
import { FavoriteNFTNavigation } from './FavoriteNFTNavigation';
import { TabBar } from '../components';

export type AuthenticatedTabNavigation = {
  AuthorProfile: undefined;
  ExplorerNFTs: undefined;
  FavoriteNFTs: undefined;
};

const Tabs = createBottomTabNavigator<AuthenticatedTabNavigation>();

export function AuthenticatedNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="ExplorerNFTs"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name="AuthorProfile"
          component={AuthorProfileScreen}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="ExplorerNFTs"
          component={ExplorerNFTNavigation}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="FavoriteNFTs"
          component={FavoriteNFTNavigation}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
