import React from 'react';
import { Loader2, Zap } from 'lucide-react';
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
  rounded = 'default', // In this theme, we mostly ignore rounded in favor of clipped corners, unless specified
  shadow = true,
  ...props
}) => {
  
  // 1. Base Styles: Angled corners, uppercase, technical tracking
  const baseStyles = 'relative inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/50 disabled:opacity-40 disabled:pointer-events-none select-none overflow-hidden group';
  
  // 2. Variants: Neon outlines, solid fills, glowing text
  const variants = {
    primary: 'bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black hover:shadow-neon-cyan',
    secondary: 'bg-cyber-panel border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white',
    accent: 'bg-cyber-pink/10 border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black hover:shadow-neon-pink',
    danger: 'bg-cyber-red/10 border border-cyber-red text-cyber-red hover:bg-cyber-red hover:text-black hover:shadow-[0_0_15px_rgba(255,42,42,0.6)]',
    retro: 'bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-black hover:shadow-[0_0_15px_rgba(252,238,10,0.6)]',
    success: 'bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-neon-green',
    ghost: 'bg-transparent border border-transparent text-cyber-cyan/70 hover:text-cyber-cyan hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5',
  };
  
  // 3. Sizes: Technical padding
  const sizes = {
    xs: 'px-3 py-1 text-[10px] gap-1',
    sm: 'px-4 py-1.5 text-xs gap-2',
    md: 'px-6 py-2.5 text-sm gap-2.5',
    lg: 'px-8 py-3.5 text-base gap-3',
    xl: 'px-10 py-4 text-lg gap-3.5',
  };

  // 4. Shape: "Cut" corners via clip-path classes defined in CSS
  const shapeClass = rounded === 'full' ? 'rounded-full border' : 'clip-corner border-0'; // Use border-0 for clip-corner to avoid double border issues if handled by pseudo-elements, but here we use simple borders which might get clipped.
  // Actually, for clip-path borders, standard CSS border is clipped. 
  // To make it look good, we often use the background/border approach or accept the clipped border look.
  // For this theme, standard border with clip-path works fine for the aesthetic (cut wireframe).
  
  // Special handling for the "clip" effect on borders:
  // Since clip-path cuts the border, we might need a specific class.
  // We will apply the clip-corner class directly.
  
  const computedShape = rounded === 'full' ? 'rounded-full' : (size === 'xs' || size === 'sm') ? 'clip-corner-sm' : 'clip-corner';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${computedShape}
    ${fullWidth ? 'w-full flex' : ''}
    ${className}
  `;
  
  return (
    <button
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {/* Decorative lines for tech feel (only on primary/accent/danger) */}
      {!loading && !['ghost', 'secondary'].includes(variant) && (
        <>
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50"></span>
        </>
      )}
      
      {/* Scanline overlay on hover */}
      <div className="absolute inset-0 bg-scanlines opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-200" />

      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 12 : size === 'lg' ? 20 : 16} />
          <span className="animate-pulse">PROCESSING</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 group-hover:animate-pulse">{leftIcon}</span>}
          <span className="relative z-10 font-sans font-bold">{children}</span>
          {rightIcon && <span className="flex-shrink-0 group-hover:animate-pulse">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};