import { SVGProps } from 'react';
import { ImageProps } from 'next/image';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LogoProps = ImageProps & {
  size?: number | `${number}`;
};

export interface RatingTotal {
  rating: number;
  percentage: number;
  count: number;
}

export interface Review {
  rating: number;
  title: string;
  author: string;
  date: string;
  content: string;
  authorImage: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  detail: string;
  price: number;
  images: string[];
  rating: number;
}