import { SVGProps } from 'react';
import { ImageProps } from 'next/image';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LogoProps = ImageProps & {
  size?: number | `${number}`;
};