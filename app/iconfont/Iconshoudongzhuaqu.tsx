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

let Iconshoudongzhuaqu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640.877714 997.376c-101.595429 0-189.001143-40.96-281.6-84.626286l-23.771428-10.971428c-144.676571-67.584-249.124571-123.392-250.148572-123.757715C24.283429 749.494857-2.486857 675.547429 26.331429 612.937143a124.489143 124.489143 0 0 1 111.981714-71.68c18.285714 0 35.986286 4.022857 52.589714 11.702857l114.468572 56.612571c-26.624-72.557714-76.288-202.386286-117.467429-274.285714-34.816-60.854857-68.242286-83.456-98.011429-103.204571C70.217143 218.697143 51.273143 206.409143 36.864 185.197714a104.740571 104.740571 0 0 1-13.312-91.428571c9.508571-28.818286 31.670857-51.565714 60.123429-62.025143 9.508571-3.364571 19.382857-5.12 29.403428-5.12 59.465143 0 126.171429 53.979429 171.300572 99.254857 24.868571 24.941714 51.2 61.659429 74.459428 97.353143 11.702857-36.571429 42.496-64.658286 77.385143-77.385143a105.764571 105.764571 0 0 1 117.540571 31.085714c12.434286-21.138286 31.744-37.083429 55.003429-45.421714a105.837714 105.837714 0 0 1 132.681143 55.149714 111.908571 111.908571 0 0 1 30.208-17.627428c10.459429-3.803429 21.284571-5.851429 32.256-5.851429 39.789714 0 74.898286 23.625143 87.771428 59.026286 5.339429 14.482286 128.585143 355.181714 116.662858 460.507429-12.653714 109.421714-39.936 221.622857-219.794286 286.939428a426.276571 426.276571 0 0 1-147.748572 27.721143zM138.24 586.752c-30.573714 0-57.929143 17.261714-70.729143 45.494857a78.774857 78.774857 0 0 0 37.888 104.96c2.194286 1.170286 105.618286 56.466286 249.051429 123.392l23.771428 10.971429c91.867429 43.154286 171.154286 80.310857 262.363429 80.310857 42.715429 0 86.381714-8.118857 132.534857-25.014857 155.794286-56.685714 178.468571-146.358857 190.171429-249.490286 9.142857-78.555429-79.36-343.917714-114.322286-439.881143-6.144-16.822857-24.576-28.745143-45.129143-28.745143-5.778286 0-11.702857 0.731429-16.822857 2.925715-9.728 3.657143-22.674286 14.043429-28.672 20.699428l19.968 55.076572a22.747429 22.747429 0 0 1-13.458286 29.110857 22.747429 22.747429 0 0 1-29.110857-13.458286L702.025143 210.651429a60.854857 60.854857 0 0 0-57.124572-40.009143 58.441143 58.441143 0 0 0-20.699428 3.803428 60.123429 60.123429 0 0 0-36.205714 77.604572l12.946285 35.84a22.747429 22.747429 0 0 1-13.458285 29.184 22.747429 22.747429 0 0 1-29.110858-13.531429l-28.672-78.409143a61.44 61.44 0 0 0-57.197714-39.862857 58.441143 58.441143 0 0 0-20.699428 3.803429c-28.598857 10.459429-65.097143 43.154286-47.981715 90.185143l20.772572 57.124571a22.674286 22.674286 0 0 1-12.141715 28.598857 22.381714 22.381714 0 0 1-29.257142-10.24C382.464 353.28 309.76 216.137143 252.342857 158.72c-62.976-62.976-121.270857-95.085714-152.868571-83.675429a53.394286 53.394286 0 0 0-32.768 33.353143 60.416 60.416 0 0 0 8.118857 51.931429c9.142857 13.458286 23.04 22.966857 40.155428 34.230857 30.427429 20.48 71.972571 48.347429 112.274286 118.491429 61.001143 106.788571 136.557714 325.705143 139.995429 334.701714a22.235429 22.235429 0 0 1-6.582857 24.283428 22.893714 22.893714 0 0 1-25.088 3.291429L171.300571 594.358857a73.142857 73.142857 0 0 0-33.060571-7.606857z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconshoudongzhuaqu.defaultProps = {
  size: 18,
};

Iconshoudongzhuaqu = React.memo ? React.memo(Iconshoudongzhuaqu) : Iconshoudongzhuaqu;

export default Iconshoudongzhuaqu;