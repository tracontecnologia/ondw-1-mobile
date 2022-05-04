import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SigInScreen, SigUpScreen } from '../screens';

export type UnauthenticatedNativeStackProps = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<UnauthenticatedNativeStackProps>();

export function UnauthenticatedNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SigInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SigUpScreen}
          options={{
            headerBackTitle: 'Voltar',
            headerTitle: 'Cadastrar-se',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
