import { Text, StyleSheet } from 'react-native';

import { Themes } from '../../themes';

type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 24,
    padding: 20,
  },
});
