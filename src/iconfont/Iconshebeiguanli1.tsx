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

let Iconshebeiguanli1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1061 1024" width={size} height={size} {...rest}>
      <Path
        d="M451.508148 672.540444v-61.25037c0-8.457481 6.826667-15.322074 15.208296-15.322074h106.571852v76.61037H910.222222v244.963556c0 16.877037-13.653333 30.606222-30.454518 30.606222H360.144593v-245.001481c0-16.877037 13.653333-30.606222 30.454518-30.606223h60.909037z m60.909037 183.751112a61.060741 61.060741 0 0 0 60.909037-61.250371 61.060741 61.060741 0 0 0-60.909037-61.25037 61.060741 61.060741 0 0 0-60.909037 61.25037 61.060741 61.060741 0 0 0 60.909037 61.250371zM272.421926 526.980741c62.198519-79.68237 140.325926-119.504593 234.458074-119.504593 104.675556 0 189.364148 49.303704 254.027852 147.835259l-45.549037 26.055112a30.340741 30.340741 0 0 1-39.063704-7.698963c-44.259556-56.813037-100.731259-85.257481-169.415111-85.257482-76.762074 0-138.619259 35.877926-185.571556 107.557926L280.993185 572.302222a30.72 30.72 0 0 1-8.571259-45.321481zM157.202963 412.899556C243.294815 289.336889 359.917037 227.555556 507.183407 227.555556c157.961481 0 280.727704 71.149037 368.260741 213.409185l-48.355555 27.230815a30.340741 30.340741 0 0 1-38.608593-7.54726c-78.734222-98.607407-172.487111-148.859259-281.296593-150.793481-116.129185-2.085926-215.419259 55.030519-297.908148 171.311407L167.139556 457.083259a30.72 30.72 0 0 1-9.936593-44.183703z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconshebeiguanli1.defaultProps = {
  size: 18,
};

Iconshebeiguanli1 = React.memo ? React.memo(Iconshebeiguanli1) : Iconshebeiguanli1;

export default Iconshebeiguanli1;
