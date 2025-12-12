import React from 'react';

export type ButtonVariant = 
  | 'berry'   // Pink
  | 'mint'    // Green
  | 'sky'     // Blue
  | 'lemon'   // Yellow
  | 'cloud'   // White/Gray
  | 'night';  // Dark

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
  floating?: boolean; // Adds a float animation
}