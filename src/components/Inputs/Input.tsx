import { useController } from 'react-hook-form';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

type Props = {
  name: string;
  control: any;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholder?: string;
};

export function Input({
  name,
  control,
  keyboardType,
  secureTextEntry = false,
  placeholder,
}: Props) {
  const {
    field: { onChange },
  } = useController({ name, control });

  return (
    <TextInput
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    marginBottom: 10,
    borderRadius: 4,
  },
});
