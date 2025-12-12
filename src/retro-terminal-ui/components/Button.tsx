import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';
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
  // Rounded property is ignored in this theme to enforce consistency
  shadow = false, 
  ...props
}) => {
  
  // 1. Base Styles: Monospace, Uppercase, Sharp Edges
  const baseStyles = 'relative inline-flex items-center justify-center font-mono uppercase tracking-widest transition-all duration-75 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-black border-2 select-none active:translate-y-[2px] disabled:opacity-50 disabled:pointer-events-none rounded-none';
  
  // 2. Variants: High Contrast Terminal Colors (Outline default -> Solid hover)
  const variants = {
    primary: 'border-term-green text-term-green hover:bg-term-green hover:text-black focus:ring-term-green shadow-term-green/40',
    secondary: 'border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-black focus:ring-slate-500',
    accent: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-cyan-400/40',
    danger: 'border-term-red text-term-red hover:bg-term-red hover:text-black focus:ring-term-red shadow-term-red/40',
    retro: 'border-term-amber text-term-amber hover:bg-term-amber hover:text-black focus:ring-term-amber shadow-term-amber/40',
    ghost: 'border-transparent text-term-green/60 hover:text-term-green hover:bg-term-green/10 hover:border-term-green/30',
  };
  
  // 3. Sizes: Blocky dimensions
  const sizes = {
    xs: 'px-2 py-0 text-sm h-6 gap-1',
    sm: 'px-4 py-1 text-base h-8 gap-2',
    md: 'px-6 py-2 text-xl h-10 gap-3', // Larger text for pixel font legibility
    lg: 'px-8 py-3 text-2xl h-14 gap-3',
    xl: 'px-10 py-4 text-3xl h-16 gap-4',
  };

  const shadowClass = shadow ? 'hover:shadow-glow' : '';

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
      {/* Decorative corners for the "technical" look on Primary/Danger/Retro */}
      {['primary', 'danger', 'retro', 'accent'].includes(variant) && !disabled && (
        <>
          <span className="absolute -top-[2px] -left-[2px] w-1 h-1 bg-current opacity-100" />
          <span className="absolute -top-[2px] -right-[2px] w-1 h-1 bg-current opacity-100" />
          <span className="absolute -bottom-[2px] -left-[2px] w-1 h-1 bg-current opacity-100" />
          <span className="absolute -bottom-[2px] -right-[2px] w-1 h-1 bg-current opacity-100" />
        </>
      )}

      {loading ? (
        <>
          <span className="animate-pulse mr-2">[WAIT]</span>
          <span>EXECUTING...</span>
        </>
      ) : (
        <>
          {/* Default left icon for primary if none provided to enhance terminal feel */}
          {leftIcon ? (
            <span className="flex-shrink-0">{leftIcon}</span>
          ) : variant === 'primary' && !leftIcon ? (
            <ChevronRight size={size === 'xs' ? 14 : 20} strokeWidth={3} />
          ) : null}
          
          <span className="relative z-10">{children}</span>
          
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};