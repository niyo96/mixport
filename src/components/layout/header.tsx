import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-neutral-light/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-neutral-dark tracking-tighter">
              MIXPORT
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Equipment
              </Link>
              <Link href="/impressum" className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-neutral-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
          {/* Mobile menu button will be added later */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
