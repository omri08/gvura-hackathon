import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={414}
      height={228}
      viewBox="0 0 414 229"
      preserveAspectRatio="none"
      {...props}
    >
      <Path d="M414 0H0v154.5l414 74.2z" fill="#212A4E" fillRule="evenodd" />
    </Svg>
  );
}

export default SvgComponent;
