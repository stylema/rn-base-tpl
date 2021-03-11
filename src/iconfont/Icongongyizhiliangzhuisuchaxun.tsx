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

let Icongongyizhiliangzhuisuchaxun: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M27.908793 532.812543s-1.00351 0.99327-2.09918 0.99327c-29.101792 26.009343-31.200971 69.70299-6.205378 98.896941l237.29941 271.603071c32.29664 36.3926 78.099707 57.200074 125.899554 57.200074h355.887677l62.401942 62.391702 220.598136-215.396268-158.104035-157.090284c-65.596791-64.511361-162.394552-86.404265-249.792087-56.206804l-34.30366 12.502916H363.009475c-37.498509 1.00351-66.600301 32.29664-65.596791 69.70299 3.102689 37.498509 33.30015 66.590061 70.79866 65.596791h127.998732c12.492676 2.099179 21.903143 11.397007 22.896414 22.896413 2.099179 14.602095-8.294318 27.105012-22.896414 29.101792h-127.998732c-65.596791 0-119.704415-50.994695-122.796865-116.601726v-2.099179L126.703334 542.110371c-24.893194-29.101792-68.69948-33.30015-98.794541-9.297828zM234.508987 298.912778a171.149666 171.149666 0 0 1 9.000871-131.29598c20.490037-41.205352 55.694809-71.904568 99.193898-86.496423a171.149666 171.149666 0 0 1 131.29598 9.00087c41.195112 20.500277 71.904568 55.694809 86.496424 99.193898a171.149666 171.149666 0 0 1-9.000871 131.295981 170.842469 170.842469 0 0 1-99.193898 86.496423 171.149666 171.149666 0 0 1-131.29598-9.000871c-41.102953-20.490037-71.904568-55.694809-86.496424-99.193898m-68.197725 22.896414c42.997334 127.793935 181.287165 196.503655 308.988941 153.49608 127.691536-42.997334 196.503655-181.287165 153.496081-308.988941C585.798949 38.614555 447.601278-30.197563 319.807343 12.810011 192.003168 55.817585 123.293448 194.117656 166.301022 321.809192z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M866.792008 477.107494a35.870365 35.870365 0 0 1-48.199203 16.19952L598.199467 383.811778a35.870365 35.870365 0 0 1-16.19952-48.199203 35.870365 35.870365 0 0 1 48.199203-16.19952l220.393338 109.495236a36.494999 36.494999 0 0 1 18.104141 20.797235c3.00029 8.703914 2.498535 18.503497-1.904621 27.401968z"
        fill={getIconColor(color, 1, '#E0E7F5')}
      />
    </Svg>
  );
};

Icongongyizhiliangzhuisuchaxun.defaultProps = {
  size: 18,
};

Icongongyizhiliangzhuisuchaxun = React.memo ? React.memo(Icongongyizhiliangzhuisuchaxun) : Icongongyizhiliangzhuisuchaxun;

export default Icongongyizhiliangzhuisuchaxun;