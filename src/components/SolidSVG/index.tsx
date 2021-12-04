import { FC, SVGAttributes } from 'react';
import { theme } from '../theme';

export type SolidSVGProps = {
  path: string;
} & SVGAttributes<SVGElement>;

export const SolidSVG: FC<SolidSVGProps> = (props) => {
  const { path, fill = theme.colors.primary, width = 24, height = 24, viewBox = '0 0 48 48', ...rest } = props;
  const svgProps = { width, height, viewBox, ...rest };
  const pathProps = { d: path, fill };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
      <path {...pathProps} />
    </svg>
  );
};

export * from './paths';
