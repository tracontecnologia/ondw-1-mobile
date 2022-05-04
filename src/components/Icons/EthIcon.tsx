import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function EthIcon({ width = 9, height = 13, fill = '#000000' }: Props) {
  return (
    <View style={{ width, height }}>
      <Svg width="100%" height="100%" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M4.06 9.073L.088 6.9l3.968 5.19 3.972-5.19-3.972 2.174h.002zM4.117.09L.15 6.2l3.97 2.178 3.97-2.176L4.119.09z"
          fill={fill}
        />
      </Svg>
    </View>
  );
}
