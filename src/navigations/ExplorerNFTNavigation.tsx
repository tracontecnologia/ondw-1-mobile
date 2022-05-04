import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExplorerNFTScreen, NFTViewScreen } from '../screens';

export type ExplorerNativeStackProps = {
  Explorer: undefined;
  NFTView: { id: string };
};

const Stack = createNativeStackNavigator<ExplorerNativeStackProps>();

export function ExplorerNFTNavigation() {
  return (
    <Stack.Navigator initialRouteName="Explorer">
      <Stack.Screen
        name="Explorer"
        component={ExplorerNFTScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NFTView"
        component={NFTViewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
