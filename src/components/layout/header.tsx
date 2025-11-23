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
          {/* Mobile menu button will be added later */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
