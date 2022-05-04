import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function SignOutIcon({ width = 28, height = 22, fill = '#000000' }: Props) {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M27 11l-5-5v10l5-5zm0 0H9.937M18 6V3.5A2.5 2.5 0 0015.5 1h-12A2.5 2.5 0 001 3.5v15A2.5 2.5 0 003.5 21h12a2.5 2.5 0 002.5-2.5V6z"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
