import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Constants } from './src/configs';

import { AppContexts } from './src/contexts';
import { StorageHelper } from './src/helpers';
import { AppNavigations } from './src/navigations';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  // StorageHelper.removeItem(Constants.AuthStorageKey);

  return (
    <AppContexts>
      <AppNavigations />
    </AppContexts>
  );
}
