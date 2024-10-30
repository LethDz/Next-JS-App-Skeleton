'use client';
import { Margin, MarginProps } from '@ds/common-components';
import '@ds/common-styles/dist/atoms/Margin.css';
import React from 'react';

/**
 * A function component that renders a margin.
 *
 * @param {MarginProps} props - The props for the margin component.
 * @returns {React.ReactElement} A React element representing the margin component.
 */
const MarginBox: React.FC<MarginProps> = ({ ...props }: MarginProps): React.ReactElement => {
  return <Margin {...props} />;
};

export default MarginBox;
