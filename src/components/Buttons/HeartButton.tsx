import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { HeartIcon } from '../Icons';
import { Themes } from '../../themes';

type Props = {
  isLiked?: boolean;
  likesNumber?: number;
  onPress: VoidFunction;
};

export function HeartButton({ isLiked = false, likesNumber, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.heartButton} onPress={onPress}>
      <View style={[styles.heartButtonContainer, isLiked && styles.likedHeartButton]}>
        <HeartIcon fill={isLiked ? '#fff' : undefined} />
      </View>
      {likesNumber !== undefined && (
        <Text style={styles.likesNumberText}>{likesNumber}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  heartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartButtonContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Themes.colors.secondary,
    borderRadius: 999,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likedHeartButton: {
    backgroundColor: Themes.colors.secondary,
  },
  likesNumberText: {
    fontFamily: Themes.fontFamily.Poppins.Bold,
    fontSize: 22,
    color: Themes.colors.secondary,
    marginLeft: 10,
  },
});
