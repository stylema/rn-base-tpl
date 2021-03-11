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

let Iconshebei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.437723 515.946511a31.579562 31.579562 0 0 0-31.587037 31.579562v250.222248a31.579562 31.579562 0 0 1-31.579562 31.579562H98.483387a31.579562 31.579562 0 0 1-31.587037-31.579562V229.286307a31.579562 31.579562 0 0 1 31.587037-31.587037h523.712467a31.579562 31.579562 0 0 0 0-63.159124H98.483387C46.162219 134.540146 3.737226 176.957664 3.737226 229.286307v568.462014c0 52.321168 42.417518 94.746161 94.746161 94.746161h694.787737c52.321168 0 94.746161-42.417518 94.746161-94.746161V547.526073a31.579562 31.579562 0 0 0-31.579562-31.579562z m-15.793519 439.707095H51.110307a31.579562 31.579562 0 1 0 0 63.159124h789.526423a31.579562 31.579562 0 1 0 0-63.159124z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M828.393577 294.276672V188.744876H726.337401C713.638307 188.744876 706.335766 176.830599 706.335766 161.448175c0-14.223883 5.381606-27.677898 18.835621-27.677898h106.690336V30.92181c0-14.986277 11.144409-23.447358 27.677897-23.447357 15.382423 0 27.296701 6.921343 27.296701 19.99416v102.452321h109.381139c15.374949 0 16.144818 18.461898 16.144817 31.146044 0 12.684146-4.23054 27.296701-19.605489 27.296701h-105.912992v105.912993c0.373723 13.072818-11.540555 19.994161-27.304176 19.99416s-31.138569-3.460672-31.138569-19.99416z"
        fill={getIconColor(color, 1, '#F5222D')}
      />
    </Svg>
  );
};

Iconshebei.defaultProps = {
  size: 18,
};

Iconshebei = React.memo ? React.memo(Iconshebei) : Iconshebei;

export default Iconshebei;