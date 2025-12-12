import React from 'react';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent'
  | 'neutral'
  | 'ghost' 
  | 'destructive' 
  | 'outline';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  active?: boolean;
  // Specific prop for Kinetik: "Flat" mode (removes depth for use in tight spaces)
  flat?: boolean;
}