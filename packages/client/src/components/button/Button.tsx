import React from 'react';
import './button.scss';

export enum ButtonType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DARK = 'dark',
  INFO = 'info',
  SECONDARY = 'secondary',
}

interface ButtonProps {
  label: string;
  type?: ButtonType;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({
  label,
  type = ButtonType.PRIMARY,
  size = 'medium',
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={['btn', `btn-${type}`, `btn-${size}`].join(' ')}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
