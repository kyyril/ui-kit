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
  
  // 1. Base Styles: Rounded, playful, tactile
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-30 disabled:opacity-60 disabled:pointer-events-none select-none active:scale-95';
  
  // 2. Variants: Pastel colors with Claymorphism shadows
  // Note: The "shadow-clay-btn" gives the volume (light top-left, dark bottom-right)
  const variants = {
    primary: 'bg-clay-primary text-white focus:ring-clay-primary hover:bg-violet-400',
    secondary: 'bg-white text-clay-text border border-slate-100 focus:ring-slate-300 hover:bg-slate-50',
    accent: 'bg-clay-accent text-white focus:ring-clay-accent hover:bg-blue-400',
    danger: 'bg-clay-danger text-white focus:ring-clay-danger hover:bg-rose-400',
    retro: 'bg-clay-warning text-white focus:ring-clay-warning hover:bg-amber-400',
    success: 'bg-clay-success text-white focus:ring-clay-success hover:bg-emerald-400',
    ghost: 'bg-transparent text-clay-text hover:bg-black/5 shadow-none hover:shadow-none', // Ghost has no clay shadow
  };
  
  // 3. Sizes: Plump and readable
  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-1.5',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3.5',
  };

  // 4. Radius: Defaults to very rounded for the clay look
  const roundedStyles = {
    none: 'rounded-lg', // Even "none" is slightly rounded in this friendly theme
    sm: 'rounded-xl',
    default: 'rounded-2xl',
    full: 'rounded-[2rem]',
  };

  // Only apply clay shadow if not ghost and shadow prop is true
  const isGhost = variant === 'ghost';
  const shadowStyle = (shadow && !isGhost && !disabled) 
    ? 'shadow-clay-btn hover:shadow-clay-float hover:-translate-y-1 active:shadow-clay-btn-pressed active:translate-y-0' 
    : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${roundedStyles[rounded]}
    ${shadowStyle}
    ${fullWidth ? 'w-full flex' : ''}
    ${className}
  `;
  
  return (
    <button
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {/* Inner Highlight for extra glossy/clay feel on colored buttons */}
      {!isGhost && !disabled && (
        <span className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20 pointer-events-none" />
      )}

      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'lg' ? 24 : 18} strokeWidth={3} />
          <span>Loading...</span>
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