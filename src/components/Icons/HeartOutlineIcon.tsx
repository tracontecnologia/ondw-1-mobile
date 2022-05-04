import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function HeartOutlineIcon({ width = 26, height = 24, fill = '#61B7DC' }: Props) {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M18.552 2C14.833 2 13 5.666 13 5.666S11.167 2 7.448 2C4.425 2 2.032 4.529 2 7.546c-.063 6.263 4.968 10.718 10.483 14.46a.916.916 0 001.032 0c5.514-3.742 10.546-8.197 10.483-14.46C23.97 4.53 21.575 2 18.552 2v0z"
          stroke={fill}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
