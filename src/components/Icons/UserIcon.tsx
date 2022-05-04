import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function UserIcon({ width = 32, height = 32, fill = '#61B7DC' }: Props) {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M21.5 9c-.245 3.304-2.75 6-5.5 6s-5.26-2.695-5.5-6c-.25-3.438 2.188-6 5.5-6 3.313 0 5.75 2.625 5.5 6z"
          stroke={fill}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 19c-5.438 0-10.956 3-11.977 8.663C3.899 28.345 4.286 29 5 29h22c.715 0 1.101-.655.978-1.337C26.956 22 21.438 19 16 19z"
          stroke={fill}
          strokeWidth={3}
          strokeMiterlimit={10}
        />
      </Svg>
    </View>
  );
}
