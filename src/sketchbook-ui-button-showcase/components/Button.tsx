import React from 'react';
import { ButtonProps } from '../types';
import { Loader2 } from './Icons';

/**
 * Sketchbook UI Button
 * 
 * Distinct Characteristic:
 * - "Organic": Uses slight rotation and irregular borders to mimic hand-drawing.
 * - "Inky": High contrast black borders and hard offset shadows.
 * - "Tactile": Feels like paper cutouts or stickers.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'ink',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  wobbly = true, // Default to organic shape
  active = false,
  rounded = false,
  ...props
}) => {
  
  // 1. Base Geometry
  const baseStyles = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-bold',
    'text-xl', // Larger font for handwriting legibility
    'tracking-wide',
    'border-2',
    'border-black',
    'transition-all',
    'duration-200',
    'focus:outline-none focus:ring-2 focus:ring-sketch-highlight focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
    'select-none',
    'active:shadow-none', // Flatten on click
    'active:translate-x-[3px] active:translate-y-[3px]', // Physical press down
    'hover:-rotate-1', // Slight organic tilt on hover
  ];

  // 2. Variants (Fill & Texture)
  const variants = {
    // Blue Ink Pen (Primary)
    ink: [
      'bg-sketch-ink text-white',
      'shadow-sketch',
      'hover:bg-blue-700',
    ].join(' '),

    // Graphite Pencil (Secondary)
    graphite: [
      'bg-sketch-graphite text-white',
      'shadow-sketch',
      'hover:bg-gray-800',
    ].join(' '),

    // Paper Cutout (Default / Ghost)
    paper: [
      'bg-sketch-paper text-black',
      'shadow-sketch',
      'hover:bg-white',
    ].join(' '),

    // Doodle (Outline)
    doodle: [
      'bg-transparent text-black',
      'border-dashed', // Dashed line like a sketch
      'hover:bg-sketch-highlight/20',
      'hover:border-solid',
    ].join(' '),

    // Red Marker (Alert)
    marker: [
      'bg-sketch-marker text-white',
      'shadow-sketch',
      'hover:bg-red-600',
      'rotate-1', // Pre-rotated for emphasis
    ].join(' '),

    // Masking Tape
    tape: [
      'bg-yellow-100 text-gray-800',
      'border-none', // No border for tape
      'shadow-sm',
      'opacity-90',
      'hover:opacity-100',
      'hover:rotate-0', // Straighten on hover
      'rotate-2', // Tilted by default
    ].join(' '),
  };

  // 3. Sizes
  const sizes = {
    sm: 'h-8 px-3 text-lg gap-1',
    md: 'h-11 px-6 text-xl gap-2',
    lg: 'h-14 px-8 text-2xl gap-3',
    xl: 'h-16 px-10 text-3xl gap-4',
  };

  const widthStyles = fullWidth ? 'w-full flex' : '';
  const loadingStyles = loading ? 'cursor-wait' : '';
  
  const iconSizeMap = { sm: 16, md: 20, lg: 24, xl: 30 };
  const iconSize = iconSizeMap[size] || 20;

  // Determine border radius class
  let radiusClass = '';
  if (rounded) {
    radiusClass = 'rounded-full';
  } else if (variant !== 'tape') {
    radiusClass = 'rounded-lg';
  }

  const buttonClasses = `
    ${baseStyles.join(' ')} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${widthStyles} 
    ${loadingStyles}
    ${radiusClass} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // For the 'tape' variant, we might want jagged edges, but we'll simulate with shadow/color for now
  // Apply wobbly border radius only if not rounded and not tape
  const style = (!rounded && variant !== 'tape') ? { borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' } : {};
  
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
      style={style}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="animate-spin" size={iconSize} />
        </span>
      )}

      <span className={`flex items-center gap-[inherit] ${loading ? 'invisible' : ''} z-10`}>
        {/* Scribble effect behind text for 'doodle' variant on hover? nice idea but keep simple */}
        {leftIcon}
        <span className="mt-1">{children}</span> {/* Font baseline adjustment */}
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;