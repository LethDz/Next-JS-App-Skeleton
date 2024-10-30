'use client';
import { ButtonProps, Button as CustomButton } from '@ds/common-components';
import '@ds/common-styles/dist/atoms/Button.css';
import { ReactElement } from 'react';

/**
 * A basic button component.
 *
 * @remarks
 * This component is a wrapper around the base component in the design system.
 * It adds an onClick event handler that logs the event to the console.
 *
 * @param props - The props for the button.
 * @returns A React element.
 */
const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElement => (
  <CustomButton
    {...props}
    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e);
    }}
  ></CustomButton>
);

export default Button;
