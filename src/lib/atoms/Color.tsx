'use client';
import { Color, ColorProps } from '@ds/common-components';
import '@ds/common-styles/dist/atoms/ColorPalette.css';
import React, { ReactElement } from 'react';

/**
 * A color component with specified hex code, width, and height.
 *
 * @param {ColorProps} props - The props for the color component.
 * @returns {React.ReactElement} A React element representing the color component.
 */
const ColorBox: React.FunctionComponent<ColorProps> = ({
  color,
  width,
  height,
  ...props
}: ColorProps): ReactElement => {
  return (
    <Color
      color={color}
      height={height}
      width={width}
      {...props}
    ></Color>
  );
};

export default ColorBox;
