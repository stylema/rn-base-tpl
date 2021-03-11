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

let Iconqingkongchufatiaojian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M274.545778 799.004444l19.456-25.144888-33.792 68.551111a18.147556 18.147556 0 0 0 11.548444 25.6l59.733334 15.928889a18.147556 18.147556 0 0 0 17.294222-4.437334c20.48-19.854222 35.612444-36.010667 45.283555-48.469333l19.456-25.144889-33.792 68.551111a18.147556 18.147556 0 0 0 11.548445 25.6l84.48 22.584889a18.147556 18.147556 0 0 0 17.294222-4.494222c20.48-19.797333 35.612444-35.953778 45.226667-48.469334l19.456-25.144888-33.792 68.608a18.147556 18.147556 0 0 0 11.605333 25.543111l72.078222 19.342222a18.147556 18.147556 0 0 0 17.294222-4.494222c20.48-19.854222 35.612444-36.010667 45.283556-48.469334l19.456-25.144889-33.848889 68.551112a18.147556 18.147556 0 0 0 11.605333 25.543111l86.414223 23.324444 3.868444-0.170667c13.255111-0.739556 29.013333-5.063111 43.804445-12.856888 29.809778-15.701333 48.184889-43.178667 52.167111-78.222223 2.161778-18.488889 4.778667-38.570667 8.419555-63.544889l6.257778-41.813333c11.036444-73.329778 14.620444-101.034667 17.066667-133.688889l0.967111-12.344889 2.844444-2.958222 12.344889-1.308444a41.813333 41.813333 0 0 0 24.803556-11.264c10.752-10.24 14.791111-25.372444 11.093333-42.154667l-37.546667-171.576889a84.024889 84.024889 0 0 0-23.153777-39.822222 92.103111 92.103111 0 0 0-39.879112-23.893333l-113.265777-30.378667-2.275556-3.982222 52.906667-197.233778c8.305778-31.004444-11.776-63.715556-44.942222-72.590222L649.728 36.181333c-33.223111-8.874667-66.958222 9.386667-75.264 40.391111l-52.906667 197.290667-3.868444 2.275556-118.101333-31.630223a91.875556 91.875556 0 0 0-46.535112 0.739556 83.854222 83.854222 0 0 0-39.936 22.926222l-118.328888 129.820445c-11.605333 12.686222-15.644444 27.818667-11.491556 42.097777 4.152889 14.222222 15.815111 25.144889 32.881778 30.492445l13.653333 4.266667 2.104889 3.868444-3.640889 13.824c-21.105778 79.872-52.906667 136.931556-85.731555 150.869333-47.502222 20.195556-72.931556 49.493333-78.392889 85.048889-5.063111 32.711111 9.272889 67.128889 37.546666 91.591111l22.072889 8.305778 74.638222 20.024889a42.666667 42.666667 0 0 0 41.244445-11.093333c15.246222-15.246222 26.851556-27.989333 34.816-38.286223z m551.367111-396.572444c14.222222 3.811556 29.980444 19.228444 32.768 32.028444l34.588444 157.752889a10.638222 10.638222 0 0 1-13.198222 12.572445L240.64 433.493333a10.638222 10.638222 0 0 1-5.12-17.521777l108.828444-119.352889c8.817778-9.671111 30.151111-15.132444 44.373334-11.377778l141.312 37.888a21.333333 21.333333 0 0 0 26.168889-15.075556L614.4 90.453333a21.333333 21.333333 0 0 1 26.168889-15.132444l77.027555 20.650667a21.333333 21.333333 0 0 1 15.075556 26.168888l-58.311111 217.656889c-3.072 11.377778 3.697778 23.04 15.075555 26.112l136.476445 36.522667z m-510.464 299.121778c-33.678222 45.169778-64.568889 79.075556-92.785778 101.831111l-5.916444 4.778667-2.844445 0.568888-88.120889-24.064-2.901333-3.242666c-13.084444-14.165333-19.342222-31.004444-16.952889-46.592 3.242667-21.333333 22.016-39.310222 53.191111-52.565334 31.687111-13.482667 59.790222-47.104 82.887111-99.896888 10.069333-22.983111 18.887111-48.753778 26.396445-76.572445l3.925333-14.449778 3.868445-2.275555 566.158222 151.722666 2.332444 3.299556-0.739555 12.231111c-1.991111 30.606222-30.378667 229.432889-32.142223 244.906667-2.332444 20.48-11.320889 34.986667-27.591111 44.373333a73.216 73.216 0 0 1-21.447111 8.135111l-5.006222 0.739556-60.302222-16.156445 11.207111-20.309333c8.248889-14.961778 22.641778-43.804444 43.064889-86.641778a21.105778 21.105778 0 0 0-9.955556-28.16l-3.128889-1.479111a21.333333 21.333333 0 0 0-26.282666 6.485333c-33.621333 45.056-64.512 78.904889-92.672 101.546667l-5.916445 4.778667-2.844444 0.568889-52.508445-14.051556 11.093334-20.252444c3.584-6.485333 7.054222-13.084444 10.467555-19.626667 7.054222-13.539556 17.92-35.84 32.597334-66.844444a21.276444 21.276444 0 0 0-9.955556-28.273778l-3.072-1.479111a21.333333 21.333333 0 0 0-26.339556 6.428444c-33.564444 44.999111-64.455111 78.848-92.615111 101.489778l-5.916444 4.778667-2.844445 0.568888-52.110222-13.937777 11.093334-20.309334c3.242667-5.859556 6.712889-12.401778 10.467555-19.626666 6.997333-13.425778 17.976889-35.953778 32.881778-67.413334a20.992 20.992 0 0 0-10.126222-27.989333L460.8 727.04a21.333333 21.333333 0 0 0-26.055111 6.599111c-33.678222 45.056-64.568889 78.961778-92.785778 101.660445l-5.916444 4.778666-2.844445 0.568889-32.654222-8.704 11.093333-20.252444c3.584-6.485333 7.054222-13.084444 10.467556-19.626667 6.997333-13.482667 17.92-35.953778 32.881778-67.470222a21.048889 21.048889 0 0 0-10.069334-28.046222l-3.242666-1.536a21.333333 21.333333 0 0 0-26.168889 6.542222z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconqingkongchufatiaojian.defaultProps = {
  size: 18,
};

Iconqingkongchufatiaojian = React.memo ? React.memo(Iconqingkongchufatiaojian) : Iconqingkongchufatiaojian;

export default Iconqingkongchufatiaojian;
