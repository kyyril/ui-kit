import React from 'react';
import { ButtonProps } from '../types';
import { Loader2 } from './Icons';

/**
 * Kinetik UI Button
 * 
 * Distinct Characteristic:
 * - "Physical" feel using hard shadows (box-shadow) that collapse on active state.
 * - No gradients, no blur glows. Just geometry and color.
 * - Instant feedback (duration-75) for a snappy feel.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  flat = false,
  active = false,
  ...props
}) => {
  
  // 1. Base Geometry
  const baseStyles = [
    'group',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-bold',           // Manrope looks great bold
    'rounded-lg',          // Consistent corner radius
    'border-2',            // Thick-ish borders for the illustrative look
    'transition-all',
    'duration-75',         // Fast! Snappy!
    'ease-out',
    'focus-visible:outline-none',
    'focus-visible:ring-4',
    'focus-visible:ring-ink-200',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:active:transform-none',
    'disabled:active:shadow-depth-md', // Reset shadow on disabled
    'select-none',
  ];

  // 2. Variants (Color & Depth configuration)
  // Logic: bg + text + border-color + shadow-color (for depth)
  const variants = {
    primary: [
      'bg-blue-600 border-blue-600 text-white',
      'shadow-blue-800', // The "Side" of the button 3D effect
      'hover:bg-blue-500 hover:border-blue-500',
    ].join(' '),

    secondary: [
      'bg-white border-ink-200 text-ink-900',
      'shadow-ink-200',
      'hover:border-ink-300 hover:bg-ink-50',
    ].join(' '),

    accent: [
      'bg-violet-500 border-violet-500 text-white',
      'shadow-violet-800',
      'hover:bg-violet-400 hover:border-violet-400',
    ].join(' '),

    neutral: [
      'bg-ink-800 border-ink-800 text-white',
      'shadow-ink-950',
      'hover:bg-ink-700 hover:border-ink-700',
    ].join(' '),

    destructive: [
      'bg-red-500 border-red-500 text-white',
      'shadow-red-800',
      'hover:bg-red-400 hover:border-red-400',
    ].join(' '),

    outline: [
      'bg-transparent border-dashed border-2 border-ink-300 text-ink-600',
      'hover:bg-ink-50 hover:border-solid hover:border-ink-400 hover:text-ink-900',
      'shadow-transparent', // No depth for outline
    ].join(' '),

    ghost: [
      'bg-transparent border-transparent text-ink-600',
      'hover:bg-ink-100 hover:text-ink-900',
      'shadow-transparent', // No depth for ghost
    ].join(' '),
  };

  // 3. Sizes
  const sizes = {
    sm: 'h-9 px-3 text-sm gap-1.5 shadow-depth-sm active:shadow-none active:translate-y-[2px]',
    md: 'h-11 px-5 text-base gap-2 shadow-depth-md active:shadow-none active:translate-y-[4px]',
    lg: 'h-14 px-8 text-lg gap-3 shadow-depth-lg active:shadow-none active:translate-y-[6px]',
    xl: 'h-16 px-10 text-xl gap-3 shadow-depth-lg active:shadow-none active:translate-y-[6px]',
  };

  // Special Handling: If "flat" is true or variant is ghost/outline, remove the depth mechanics
  const isFlatVariant = variant === 'ghost' || variant === 'outline';
  const effectiveSizeStyles = (flat || isFlatVariant)
    ? sizes[size].replace(/shadow-depth-\w+ active:shadow-none active:translate-y-\[\d+px\]/g, 'active:scale-95')
    : sizes[size];

  const widthStyles = fullWidth ? 'w-full flex' : '';
  const loadingStyles = loading ? 'cursor-wait opacity-80' : '';
  
  // Icon sizes
  const iconSizeMap = { sm: 16, md: 20, lg: 24, xl: 28 };
  const iconSize = iconSizeMap[size] || 20;

  const buttonClasses = `
    ${baseStyles.join(' ')} 
    ${variants[variant]} 
    ${effectiveSizeStyles} 
    ${widthStyles} 
    ${loadingStyles}
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
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="animate-spin" size={iconSize} />
        </span>
      ) : null}

      <span className={`flex items-center gap-[inherit] ${loading ? 'invisible' : ''}`}>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;