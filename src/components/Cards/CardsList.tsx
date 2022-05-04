import { FlatList, StyleSheet } from 'react-native';

import { Card } from './Card';
import { INFT } from '../../interfaces';

type Props = {
  data: INFT[];
  onPress(id: string): void;
  onLike(id: string): void;
};

export function CardsList({ data, onPress, onLike }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card
          onPress={() => onPress(item.id)}
          nftImageURL={item.photoUrl}
          nftName={item.name}
          authorName={item.author.name}
          ethPrice={item.price}
          isLiked={item.likedByUser}
          onLike={() => onLike(item.id)}
        />
      )}
      style={styles.flatList}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
  },
});
