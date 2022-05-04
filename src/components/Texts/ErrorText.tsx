import { FieldErrors } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';

import { Themes } from '../../themes';

type Props = {
  errors: FieldErrors;
  name: string;
};

export function ErrorText({ errors, name }: Props) {
  const hasError = !!errors?.[name]?.message;

  if (!hasError) return null;

  return <Text style={styles.errorText}>{errors[name].message}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    color: Themes.colors.secondary,
    fontSize: 12,
    marginBottom: 10,
  },
});
