import { Text, StyleSheet } from 'react-native';

import { Themes } from '../../themes';

type Props = {
  message: string;
};

export function HighlightErrorText({ message }: Props) {
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Themes.colors.secondary,
    borderRadius: 4,
    color: Themes.colors.secondary,
  },
});
