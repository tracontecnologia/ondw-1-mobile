import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthorNFTLikedScreen, NFTViewScreen } from '../screens';

export type FavoriteNFTNativeStackProps = {
  FavoriteNFT: undefined;
  NFTView: undefined;
};

const Stack = createNativeStackNavigator<FavoriteNFTNativeStackProps>();

export function FavoriteNFTNavigation() {
  return (
    <Stack.Navigator initialRouteName="FavoriteNFT">
      <Stack.Screen
        name="FavoriteNFT"
        component={AuthorNFTLikedScreen}
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
