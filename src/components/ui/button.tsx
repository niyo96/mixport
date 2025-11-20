import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
}

const Button = ({ href, children, variant = 'primary', className = '' }: ButtonProps) => {
  const baseClasses = 'inline-block px-8 py-4 rounded-full font-semibold text-center transition-transform transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-neutral-dark text-white',
    whatsapp: 'text-white', // bg-whatsapp entfernt
  };

  const style: CSSProperties = {};
  if (variant === 'whatsapp') {
    style.backgroundColor = '#34C759'; // Direktes Setzen der Farbe
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {children}
    </Link>
  );
};

export default Button;
