import React from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  rounded = 'default',
  shadow = true,
  ...props
}) => {
  
  // 1. Base Styles: Thick borders, geometric, heavy
  const baseStyles = 'relative inline-flex items-center justify-center font-bold uppercase tracking-tight transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-black/20 disabled:opacity-50 disabled:pointer-events-none select-none border-3 border-black active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';
  
  // 2. Variants: Vibrant, high-contrast solid colors
  const variants = {
    primary: 'bg-neo-blue text-black hover:bg-blue-300',
    secondary: 'bg-white text-black hover:bg-gray-100',
    accent: 'bg-neo-purple text-white hover:bg-purple-400',
    danger: 'bg-neo-pink text-black hover:bg-red-300',
    retro: 'bg-neo-orange text-black hover:bg-orange-300',
    success: 'bg-neo-green text-black hover:bg-green-300',
    ghost: 'bg-transparent border-transparent text-black hover:bg-black/5 shadow-none active:translate-x-0 active:translate-y-0 active:scale-95 border-0', // Override border for ghost
  };
  
  // 3. Sizes: Bulky
  const sizes = {
    xs: 'px-2 py-1 text-xs gap-1 h-8',
    sm: 'px-4 py-1.5 text-sm gap-2 h-10',
    md: 'px-6 py-2.5 text-base gap-2.5 h-12',
    lg: 'px-8 py-3.5 text-lg gap-3 h-14',
    xl: 'px-10 py-4 text-xl gap-3.5 h-16',
  };

  // 4. Radius: Mostly sharp or slight rounding
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded-md',
    full: 'rounded-full',
  };

  // Hard shadow logic
  const shadowClass = (shadow && variant !== 'ghost' && !disabled) ? 'shadow-neo hover:shadow-neo-hover hover:-translate-y-[2px] hover:-translate-x-[2px]' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${roundedStyles[rounded]}
    ${shadowClass}
    ${fullWidth ? 'w-full flex' : ''}
    ${className}
  `;
  
  return (
    <button
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'lg' ? 24 : 18} strokeWidth={3} />
          <span>LOADING</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};