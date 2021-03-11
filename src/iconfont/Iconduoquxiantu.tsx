/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconduoquxiantu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0h1024v1024H0z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M972.8 750.933333a17.066667 17.066667 0 0 1 0 34.133334H51.2a17.066667 17.066667 0 0 1 0-34.133334h921.6zM911.940267 153.634133a17.066667 17.066667 0 0 1 16.042666 18.039467c-7.68 129.723733-43.076267 221.354667-105.8304 273.169067 34.4064 60.0064 58.9824 135.611733 73.6256 226.56a17.066667 17.066667 0 1 1-33.6896 5.4272c-13.858133-86.016-36.488533-156.7744-67.959466-212.5312C758.8352 484.6592 716.680533 494.933333 667.733333 494.933333c-95.556267 0-162.781867-42.1888-243.6096-133.751466l-5.410133-6.178134-10.9568-12.8-5.051733-6.024533-6.536534-7.850667c-119.159467 44.663467-199.8848 160.426667-242.9952 349.576534a17.066667 17.066667 0 1 1-33.28-7.5776c44.253867-194.167467 128.904533-318.122667 253.2352-369.732267l-6.3488-7.662933a1326.592 1326.592 0 0 0-7.253333-8.533334l-3.396267-3.9424-6.4512-7.3728-6.161066-6.8608c-40.516267-44.458667-71.850667-64.631467-105.642667-64.631466-83.626667 0-127.6416 47.735467-135.5264 149.589333a17.066667 17.066667 0 1 1-34.030933-2.628267c9.181867-118.5792 66.833067-181.077333 169.540266-181.077333 45.892267 0 84.497067 24.849067 130.901334 75.758933 8.4992 9.335467 17.1008 19.285333 28.074666 32.426667l4.232534 5.0688 6.417066 7.748267c34.901333-10.257067 72.6016-15.4112 113.066667-15.4112 123.409067 0 217.941333 47.906133 283.170133 142.4384 53.248-45.9776 83.182933-127.368533 90.180267-245.845334a17.066667 17.066667 0 0 1 18.039467-16.042666zM520.533333 307.2c-31.5392 0-61.218133 3.413333-89.019733 10.222933l12.970667 15.2064c77.2608 88.951467 137.9328 128.170667 223.232 128.170667 41.864533 0 77.909333-8.482133 108.168533-25.6512C716.714667 349.44 631.739733 307.2 520.5504 307.2z"
        fill={getIconColor(color, 1, '#2E4257')}
      />
    </Svg>
  );
};

Iconduoquxiantu.defaultProps = {
  size: 18,
};

Iconduoquxiantu = React.memo ? React.memo(Iconduoquxiantu) : Iconduoquxiantu;

export default Iconduoquxiantu;
