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
  rounded = 'full', // Default to pill shape for this theme
  shadow = true,
  ...props
}) => {
  
  // 1. Base Styles: Glassmorphism foundation
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none select-none backdrop-blur-md border';
  
  // 2. Variants: Luminous Neon Colors
  // Using semi-transparent backgrounds + matching borders + colored shadows for the glow effect
  const variants = {
    primary: 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300 shadow-cyan-500/20 hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-100 hover:shadow-cyan-400/40 focus:ring-cyan-500',
    secondary: 'bg-white/5 border-white/20 text-slate-200 shadow-white/5 hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-white/20 focus:ring-white',
    accent: 'bg-fuchsia-500/10 border-fuchsia-500/50 text-fuchsia-300 shadow-fuchsia-500/20 hover:bg-fuchsia-400/20 hover:border-fuchsia-400 hover:text-fuchsia-100 hover:shadow-fuchsia-400/40 focus:ring-fuchsia-500',
    danger: 'bg-red-500/10 border-red-500/50 text-red-300 shadow-red-500/20 hover:bg-red-400/20 hover:border-red-400 hover:text-red-100 hover:shadow-red-400/40 focus:ring-red-500',
    retro: 'bg-amber-500/10 border-amber-500/50 text-amber-300 shadow-amber-500/20 hover:bg-amber-400/20 hover:border-amber-400 hover:text-amber-100 hover:shadow-amber-400/40 focus:ring-amber-500',
    ghost: 'bg-transparent border-transparent text-slate-400 shadow-transparent hover:text-white hover:bg-white/5',
  };
  
  // 3. Sizes
  const sizes = {
    xs: 'px-3 py-1 text-xs gap-1.5',
    sm: 'px-4 py-1.5 text-sm gap-2',
    md: 'px-6 py-2.5 text-base gap-2.5',
    lg: 'px-8 py-3 text-lg gap-3',
    xl: 'px-10 py-4 text-xl gap-3.5',
  };

  // 4. Radius
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded',
    default: 'rounded-xl',
    full: 'rounded-full',
  };

  // 5. Glow & Animation Effects
  const effectStyles = shadow && variant !== 'ghost' && !disabled
    ? 'shadow-glow-md hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'
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
      {/* Background shimmer effect for primary/accent */}
      {!disabled && !loading && (variant === 'primary' || variant === 'accent') && (
        <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] transition-all" />
        </span>
      )}

      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'lg' ? 24 : 18} />
          <span className="opacity-90">Initializing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 opacity-80">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="flex-shrink-0 opacity-80">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};