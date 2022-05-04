import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ArtCryptoLogo,
  Button,
  ErrorText,
  Input,
  HighlightErrorText,
} from '../../components';
import { useAuthContext } from '../../contexts';
import { useAuth } from '../../hooks';
import { ISignInForm } from '../../interfaces';
import { UnauthenticatedNativeStackProps } from '../../navigations/UnauthenticatedNavigation';
import { setBearerToken } from '../../providers';
import { Themes } from '../../themes';
import { SignInResolver } from '../../validations';

type Props = {
  navigation: NativeStackNavigationProp<UnauthenticatedNativeStackProps>;
};

export function SigInScreen({ navigation }: Props) {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ISignInForm>({ resolver: SignInResolver });
  const { signIn, getUserData } = useAuth();
  const { setAccessToken, setUser } = useAuthContext();
  const [isError, setIsError] = useState(false);

  async function onSubmit(values: ISignInForm) {
    try {
      setIsError(false);
      const accessToken = await signIn(values.email, values.password);
      if (accessToken) {
        setBearerToken(accessToken);
        setAccessToken(accessToken);
        const user = await getUserData();
        if (user) {
          setUser(user);
        }
      }
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.logoView}>
            <ArtCryptoLogo width={179.2} height={42} />
          </View>

          <Text style={styles.title}>Conecte-se</Text>
          <Text style={styles.subTitle}>
            Acesse sua conta com seu e-mail e senha.
          </Text>

          {isError && (
            <HighlightErrorText message="E-mail e/ou senha estão inválidos!" />
          )}

          <Input
            name="email"
            control={control}
            keyboardType="email-address"
            placeholder="E-mail"
          />
          <ErrorText name="email" errors={errors} />

          <Input
            name="password"
            control={control}
            secureTextEntry
            placeholder="Senha"
          />
          <ErrorText name="password" errors={errors} />

          <Button label="Conectar" onPress={handleSubmit(onSubmit)} />
          <Button
            variant="outline"
            label="Cadastrar-se"
            onPress={() => navigation.navigate('SignUp')}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  logoView: {
    alignSelf: 'center',
    paddingVertical: 40,
  },
  title: {
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 24,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
});
