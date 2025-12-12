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
  
  // 1. Base Styles: Organic feeling, transition for lift
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black/5 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] transform-gpu';
  
  // 2. Variants: Matte paper colors
  const variants = {
    primary: 'bg-paper-blue text-white',
    secondary: 'bg-white text-paper-text border-2 border-slate-100',
    accent: 'bg-paper-purple text-white',
    danger: 'bg-paper-red text-white',
    retro: 'bg-paper-yellow text-paper-text',
    success: 'bg-paper-green text-white',
    ghost: 'bg-transparent hover:bg-black/5 text-paper-text shadow-none',
  };
  
  // 3. Sizes: Friendly padding
  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-1.5',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3.5',
  };

  // 4. Radius: Soft, slightly large
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-md',
    default: 'rounded-2xl', // More playful curve
    full: 'rounded-full',
  };

  // Paper lift shadow logic
  const shadowClass = (shadow && variant !== 'ghost') 
    ? 'shadow-paper hover:shadow-paper-hover hover:-translate-y-1 active:shadow-paper-active active:translate-y-0' 
    : '';

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
      {/* Texture overlay for button to make it look like paper */}
      {variant !== 'ghost' && (
        <div className="absolute inset-0 bg-white opacity-10 pointer-events-none rounded-[inherit]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.5%22/%3E%3C/svg%3E")' }}></div>
      )}

      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'lg' ? 24 : 18} />
          <span>Working...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 transform group-hover:rotate-6 transition-transform">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="flex-shrink-0 transform group-hover:-rotate-6 transition-transform">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};