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
  
  // Entferne Tailwind bg-Klassen hier, da wir sie per Inline-Style setzen
  const variantClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    whatsapp: 'text-white',
  };

  const style: CSSProperties = {};
  if (variant === 'primary') {
    style.backgroundColor = '#BFBFBF'; // Dunkleres Blau für besseren Kontrast
  } else if (variant === 'secondary') {
    style.backgroundColor = '#1D1D1F'; // Direktes Setzen der Neutral-Dark-Farbe
  } else if (variant === 'whatsapp') {
    style.backgroundColor = '#128c7e'; // Offizielle WhatsApp-Farbe
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {children}
    </Link>
  );
};

export default Button;
