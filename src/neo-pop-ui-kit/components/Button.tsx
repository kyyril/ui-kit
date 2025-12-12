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
  
  // 1. Base Styles: Bold, bordered, and ready for interaction
  const baseStyles = 'relative inline-flex items-center justify-center font-bold border-2 border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';
  
  // 2. Variants: High contrast, distinct palettes
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-500',
    secondary: 'bg-white text-black hover:bg-gray-50',
    accent: 'bg-yellow-400 text-black hover:bg-yellow-300',
    danger: 'bg-rose-500 text-white hover:bg-rose-400',
    retro: 'bg-orange-500 text-black hover:bg-orange-400',
    ghost: 'bg-transparent border-transparent text-black hover:bg-black/5 shadow-none hover:translate-y-0 active:translate-y-0', // Ghost overrides shadow manually
  };
  
  // 3. Sizes: Adjusted for the thicker borders
  const sizes = {
    xs: 'px-2 py-1 text-xs gap-1.5 h-7',
    sm: 'px-3 py-1.5 text-sm gap-2 h-9',
    md: 'px-5 py-2.5 text-base gap-2.5 h-11',
    lg: 'px-7 py-3.5 text-lg gap-3 h-14',
    xl: 'px-9 py-4 text-xl gap-3.5 h-16',
  };

  // 4. Radius: Consistent styling
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded-lg',
    full: 'rounded-full',
  };

  // 5. The "Signature" Effect: Hard Shadows + Translation on Click
  // If shadow is true and not ghost, apply the Neo-Brutalist shadow mechanics
  const isGhost = variant === 'ghost';
  const hasEffect = shadow && !isGhost && !disabled;

  const effectStyles = hasEffect 
    ? `shadow-neo active:shadow-none active:translate-x-[4px] active:translate-y-[4px]`
    : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${roundedStyles[rounded]}
    ${effectStyles}
    ${fullWidth ? 'w-full flex' : ''}
    ${className}
  `;
  
  return (
    <button
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {/* Loading State Overlay or Icon Replacement */}
      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'lg' ? 24 : 18} strokeWidth={3} />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 font-bold">{leftIcon}</span>}
          <span className="truncate">{children}</span>
          {rightIcon && <span className="flex-shrink-0 font-bold">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};