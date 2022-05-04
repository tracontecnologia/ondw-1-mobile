import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ErrorText, HighlightErrorText, Input } from '../../components';
import { useAuth } from '../../hooks';
import { ISignUpForm } from '../../interfaces';
import { UnauthenticatedNativeStackProps } from '../../navigations/UnauthenticatedNavigation';
import { Themes } from '../../themes';
import { SignUpResolver } from '../../validations';

type Props = {
  navigation: NativeStackNavigationProp<UnauthenticatedNativeStackProps>;
};

export function SigUpScreen({ navigation }: Props) {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ISignUpForm>({ resolver: SignUpResolver });
  const { signUp } = useAuth();
  const [isError, setIsError] = useState(false);

  async function onSubmit(values: ISignUpForm) {
    try {
      await signUp(values);
      navigation.navigate('SignIn');
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Cadastre-se</Text>
          <Text style={styles.subTitle}>Crie sua conta agora</Text>

          {isError && (
            <HighlightErrorText message="Houve um erro ao cadastrar!" />
          )}

          <Input name="name" control={control} placeholder="Nome completo" />
          <ErrorText name="name" errors={errors} />

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

          <Button label="Cadastrar" onPress={handleSubmit(onSubmit)} />
          <Button
            variant="outline"
            label="Conectar-se"
            onPress={() => navigation.goBack()}
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
  textInput: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    marginBottom: 10,
    borderRadius: 4,
  },
});
