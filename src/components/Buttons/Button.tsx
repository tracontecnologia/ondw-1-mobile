import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Themes } from '../../themes';

type Props = {
  variant?: 'primary' | 'outline';
  label: string;
  onPress?: VoidFunction;
};

export function Button({ variant = 'primary', label, onPress }: Props) {
  let touchableVariant = styles.buttonPrimary;
  let textVariant = styles.buttonPrimaryText;
  if (variant === 'outline') {
    touchableVariant = styles.buttonOutline;
    textVariant = styles.buttonOutlineText;
  }

  return (
    <TouchableOpacity
      style={[styles.button, touchableVariant]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textVariant]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Themes.colors.primary,
    paddingVertical: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 16,
  },
  buttonPrimary: {
    backgroundColor: Themes.colors.primary,
  },
  buttonPrimaryText: {
    color: '#ffffff',
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Themes.colors.primary,
  },
  buttonOutlineText: {
    color: Themes.colors.primary,
  },
});
