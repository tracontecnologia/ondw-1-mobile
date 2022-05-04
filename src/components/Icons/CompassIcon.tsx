import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function CompassIcon({ width = 22, height = 22, fill = '#61B7DC' }: Props) {
  return (
    <View style={{ width, height }}>
      <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M20.858.06L8.654 4.94a6.664 6.664 0 00-3.713 3.713L.06 20.858a.833.833 0 001.083 1.082l12.203-4.881a6.665 6.665 0 003.713-3.713L21.94 1.143A.833.833 0 0020.858.06zM11 13.499a2.499 2.499 0 110-4.998 2.499 2.499 0 010 4.998z"
          fill={fill}
        />
      </Svg>
    </View>
  );
}
