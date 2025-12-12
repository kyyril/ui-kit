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
  rounded = 'default', // Ignored in this theme for pure pixel aesthetic
  shadow = true,
  ...props
}) => {
  
  // 1. Base Styles: Blocky, uppercase, pixel font support
  const baseStyles = 'relative inline-flex items-center justify-center font-pixel uppercase leading-none border-4 border-black transition-transform duration-75 focus:outline-none focus:ring-4 focus:ring-arcade-yellow/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:translate-x-1 active:translate-y-1';
  
  // 2. Variants: High contrast arcade colors
  const variants = {
    primary: 'bg-arcade-cyan text-black hover:bg-white',
    secondary: 'bg-gray-200 text-black hover:bg-white',
    accent: 'bg-arcade-neon text-white hover:bg-pink-400',
    danger: 'bg-arcade-red text-white hover:bg-red-400',
    retro: 'bg-arcade-yellow text-black hover:bg-yellow-200',
    success: 'bg-arcade-green text-black hover:bg-green-300',
    ghost: 'bg-transparent border-transparent text-arcade-cyan hover:bg-black/20 hover:border-black/20 shadow-none',
  };
  
  // 3. Sizes: Adjusting for the chunky borders and pixel font
  // Font sizes are smaller because Press Start 2P is wide
  const sizes = {
    xs: 'px-2 py-2 text-[8px] gap-2',
    sm: 'px-4 py-3 text-[10px] gap-2',
    md: 'px-6 py-4 text-[12px] gap-3',
    lg: 'px-8 py-5 text-[14px] gap-4',
    xl: 'px-10 py-6 text-[16px] gap-4',
  };

  // 4. Shadows: Hard pixel shadows
  const shadowClass = (shadow && variant !== 'ghost' && !disabled) 
    ? 'shadow-pixel active:shadow-pixel-active' 
    : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
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
          <Loader2 className="animate-spin mr-3" size={size === 'xs' ? 10 : size === 'xl' ? 20 : 14} />
          <span>LOADING...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 -mt-1">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="flex-shrink-0 -mt-1">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};