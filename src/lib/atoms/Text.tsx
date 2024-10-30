'use client';
import { Text, TextProps } from '@ds/common-components';
import '@ds/common-styles/dist/atoms/Text.css';
import React from 'react';

/**
 * A function component that renders a text element.
 *
 * @returns {React.ReactElement} A React element representing the text component.
 */
const AtomText: React.FC<TextProps> = ({ children, size }: TextProps): React.ReactElement => {
  return <Text size={size}>{children}</Text>;
};

export default AtomText;
