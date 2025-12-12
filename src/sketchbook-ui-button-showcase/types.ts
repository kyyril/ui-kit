import React from 'react';

export type ButtonVariant = 
  | 'ink'       // Blue Pen filled
  | 'graphite'  // Dark Pencil filled
  | 'paper'     // White/Cream filled
  | 'doodle'    // Outline only
  | 'marker'    // Red Accent
  | 'tape';     // Masking tape look

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
  wobbly?: boolean; // Adds organic border radius
  rounded?: boolean;
}