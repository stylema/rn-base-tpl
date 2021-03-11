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

let Iconbaojingchulishuai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M445.805714 902.070857a48.786286 48.786286 0 0 1 0 97.572572H134.070857A97.499429 97.499429 0 0 1 36.571429 902.070857V121.929143C36.571429 68.022857 80.237714 24.356571 134.070857 24.356571H768c53.833143 0 97.499429 43.666286 97.499429 97.572572v264.630857a48.786286 48.786286 0 1 1-97.499429 0V121.929143H134.070857v780.141714h311.734857zM277.942857 441.051429a48.786286 48.786286 0 1 1 0-97.499429H525.165714a48.786286 48.786286 0 0 1 0 97.499429H277.942857z m0 239.396571a48.786286 48.786286 0 0 1 0-97.499429h133.12a48.786286 48.786286 0 1 1 0 97.499429H277.942857z m366.957714-125.659429L740.205714 703.707429c8.192 12.873143 8.192 29.257143 0 42.130285l-97.060571 151.259429c-0.146286 1.024 0.219429 1.462857 0.731428 1.462857h239.396572c0.877714-0.512 0.950857-1.024-0.292572-2.779429l-101.961142-148.992a38.985143 38.985143 0 0 1 0-44.032l102.912-150.308571a0.877714 0.877714 0 0 0-0.146286-1.243429l-239.908572-0.219428a0.877714 0.877714 0 0 0-0.877714 0.877714c0 0.146286 0.585143 1.097143 1.828572 2.925714z m-79.872-2.925714c0-43.52 35.328-78.848 78.921143-78.848h239.396572c17.042286 0 33.645714 5.485714 47.323428 15.725714 34.889143 26.185143 41.910857 75.629714 16.822857 109.129143l-86.966857 126.902857 85.942857 125.513143a78.921143 78.921143 0 0 1-63.122285 126.244572H643.876571a78.921143 78.921143 0 0 1-64.804571-123.830857l81.92-127.926858-81.188571-126.902857a78.921143 78.921143 0 0 1-14.848-46.006857z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbaojingchulishuai.defaultProps = {
  size: 18,
};

Iconbaojingchulishuai = React.memo ? React.memo(Iconbaojingchulishuai) : Iconbaojingchulishuai;

export default Iconbaojingchulishuai;