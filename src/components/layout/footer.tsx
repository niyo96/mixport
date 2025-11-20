import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-light border-t border-neutral-dark/10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-dark/60">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/impressum" className="hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors">
            Datenschutz
          </Link>
        </div>
        <p>&copy; {currentYear} MIXPORT. Alle Rechte vorbehalten.</p>
        <p className="mt-2">DJ Equipment mieten in Hamburg.</p>
      </div>
    </footer>
  );
};

export default Footer;
