import React from 'react';
import { ButtonProps } from '../types';
import { Loader2 } from './Icons';

/**
 * Bubble UI Button
 * 
 * Distinct Characteristic:
 * - "Claymorphism": Inflated 3D look using multiple inset shadows.
 * - "Soft": Extra rounded corners (3xl).
 * - "Elastic": Bouncy hover and click effects.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'sky',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  floating = false,
  active = false,
  ...props
}) => {
  
  // 1. Base Geometry
  const baseStyles = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-bold',
    'tracking-wide',
    'rounded-3xl',         // Extra round for "Bubble" look
    'transition-all',
    'duration-300',
    'ease-elastic',        // Bouncy physics
    'focus-visible:outline-none',
    'focus-visible:ring-4',
    'focus-visible:ring-opacity-50',
    'disabled:opacity-60',
    'disabled:cursor-not-allowed',
    'disabled:shadow-none',
    'select-none',
    'active:scale-95',     // Squish effect on click
    'hover:-translate-y-1', // Float up on hover
  ];

  // 2. Variants (Color & Highlight configuration)
  // Claymorphism relies on a solid base color, then shadows do the 3D work.
  const variants = {
    berry: [
      'bg-clay-berry text-white',
      'shadow-clay-md',
      'hover:bg-clay-berryDark',
      'focus-visible:ring-clay-berry',
    ].join(' '),

    mint: [
      'bg-clay-mint text-emerald-900',
      'shadow-clay-md',
      'hover:bg-clay-mintDark',
      'focus-visible:ring-clay-mint',
    ].join(' '),

    sky: [
      'bg-clay-sky text-white',
      'shadow-clay-md',
      'hover:bg-clay-skyDark',
      'focus-visible:ring-clay-sky',
    ].join(' '),

    lemon: [
      'bg-clay-lemon text-amber-900',
      'shadow-clay-md',
      'hover:bg-clay-lemonDark',
      'focus-visible:ring-clay-lemon',
    ].join(' '),

    cloud: [
      'bg-white text-slate-600',
      'shadow-clay-md',
      'hover:bg-gray-50 hover:text-slate-800',
      'focus-visible:ring-slate-300',
    ].join(' '),

    night: [
      'bg-slate-700 text-white',
      'shadow-clay-md',
      'hover:bg-slate-800',
      'focus-visible:ring-slate-700',
    ].join(' '),
  };

  // 3. Sizes
  const sizes = {
    sm: 'h-10 px-4 text-sm gap-1.5',
    md: 'h-12 px-6 text-base gap-2',
    lg: 'h-14 px-8 text-lg gap-2.5',
    xl: 'h-16 px-10 text-xl gap-3',
  };

  const widthStyles = fullWidth ? 'w-full flex' : '';
  const loadingStyles = loading ? 'cursor-wait opacity-80' : '';
  const floatingStyles = floating && !disabled ? 'animate-[bounce_3s_infinite]' : '';
  
  const iconSizeMap = { sm: 16, md: 20, lg: 24, xl: 28 };
  const iconSize = iconSizeMap[size] || 20;

  const buttonClasses = `
    ${baseStyles.join(' ')} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${widthStyles} 
    ${loadingStyles}
    ${floatingStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {/* Glossy Reflection (Optional, adds to the 3D feel) */}
      <div className="absolute top-1 right-2 w-3 h-3 bg-white opacity-20 rounded-full blur-[1px]"></div>
      <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-white opacity-40 rounded-full blur-[0.5px]"></div>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="animate-spin" size={iconSize} />
        </span>
      )}

      <span className={`flex items-center gap-[inherit] ${loading ? 'invisible' : ''} z-10`}>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;