import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function HeartIcon({ width = 16, height = 15, fill = '#F6696A' }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.178 3.561a4.446 4.446 0 00-.996-1.416 4.641 4.641 0 00-1.471-.95 4.743 4.743 0 00-1.793-.347A4.761 4.761 0 007.98 1.86 4.761 4.761 0 005.044.85c-.622 0-1.224.115-1.793.346a4.63 4.63 0 00-1.471.95A4.419 4.419 0 00.783 3.56a4.298 4.298 0 00-.368 1.743c0 .57.12 1.163.356 1.767.198.504.482 1.028.844 1.556.574.837 1.364 1.71 2.345 2.593a26.145 26.145 0 003.303 2.52l.415.26c.184.115.42.115.604 0l.415-.26A26.482 26.482 0 0012 11.22c.98-.884 1.77-1.756 2.345-2.593a7.761 7.761 0 00.844-1.556 4.85 4.85 0 00.355-1.767 4.268 4.268 0 00-.366-1.743z"
        fill={fill}
      />
    </Svg>
  );
}
