import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { ArrowLeftIcon, ArtCryptoLogo, SignOutIcon } from '../Icons';

type Props = {
  goBack?: VoidFunction;
  onLogout?: VoidFunction;
};

export function Header({ goBack, onLogout }: Props) {
  return (
    <View style={styles.container}>
      {!!goBack && (
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      )}
      <View style={styles.logoView}>
        <ArtCryptoLogo width={153.6} height={36} />
      </View>
      {!!onLogout && (
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <SignOutIcon />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoView: {
    flex: 1,
  },
  button: {
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 30,
  },
});
