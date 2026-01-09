import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-fast ease-out focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-honey-gold text-white hover:bg-deep-honey active:bg-[#B8810C] shadow-level-2 hover:shadow-level-3',
      secondary: 'bg-transparent border-2 border-honey-gold text-honey-gold hover:bg-soft-honey hover:text-deep-honey active:bg-soft-honey',
      ghost: 'bg-transparent text-navy hover:bg-slate-100',
      text: 'bg-transparent text-honey-gold hover:text-deep-honey hover:underline underline-offset-4',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-md',
      lg: 'px-8 py-4 text-lg rounded-md',
    }
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className)
    
    if (asChild && React.isValidElement(children) && children.type === Link) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(classes, (children as any).props.className),
        ref,
      })
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
