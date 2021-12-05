import React, { FC, SVGAttributes } from 'react';

export type SolidSVGProps = {
  path: string;
} & SVGAttributes<SVGElement>;

export const SolidSVG: FC<SolidSVGProps> = (props) => {
  const { path, width = 24, height = 24, viewBox = '0 0 48 48', ...rest } = props;
  const svgProps = { width, height, viewBox, ...rest };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
};

export * from './paths';
