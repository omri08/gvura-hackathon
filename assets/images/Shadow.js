import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={414}
      height={438}
      viewBox="0 0 414 438"
      preserveAspectRatio="none"
      {...props}
    >
      <Defs>
        <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="55.202%">
          <Stop offset="0%" stopColor="#FFF" stopOpacity={0} />
          <Stop offset="100%" stopColor="#212A4E" stopOpacity={0.322} />
        </LinearGradient>
      </Defs>
      <Path
        d="M0 298h414v438H0z"
        fill="url(#prefix__a)"
        transform="translate(0 -298)"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
