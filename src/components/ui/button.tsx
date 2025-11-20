import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ href, children, variant = 'primary', className = '' }: ButtonProps) => {
  const baseClasses = 'inline-block px-8 py-4 rounded-full font-semibold text-center transition-transform transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-neutral-dark text-white',
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
