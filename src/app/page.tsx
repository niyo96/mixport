import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button';
import type { Product } from '@/lib/types';

// SEO-optimierte Texte
const seo = {
  title: "Professionelles DJ Equipment mieten | MIXPORT",
  h1: "Miete High-End DJ-Equipment",
  subheading: "Von Pioneer DJ-Konsolen bis zu kompletten PA-Anlagen – bei uns findest du professionelles Equipment für dein Event. Zuverlässig, einfach und schnell.",
  cta: "Jetzt Equipment ansehen",
  productSectionTitle: "Unser Equipment",
};

// Hero Section Komponente
const HeroSection = () => (
  <section className="text-center py-16 md:py-24">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-neutral-dark animate-fade-in-down text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4.5rem]">
      {seo.h1}
    </h1>
    <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-dark/80 mb-8 animate-fade-in-up">
      {seo.subheading}
    </p>
    <div className="animate-fade-in-up animation-delay-300">
      <Button href="#equipment-grid" variant="primary">
        {seo.cta}
      </Button>
    </div>
  </section>
);

// Überarbeitete Produktkarten Komponente
const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/produkt/${product.slug}`} className="group block rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-1 animate-fade-in-up">
    <div className="p-4 md:p-6">
      <Image
        src={product.imageUrl}
        alt={`Bild von ${product.name}`}
        width={300}
        height={300}
        className="w-full h-48 object-contain rounded-lg transition-transform duration-300"
      />
    </div>
    <div className="p-5 bg-neutral-light rounded-b-2xl">
      <h3 className="text-lg font-bold text-neutral-dark truncate">{product.name}</h3>
      <p className="text-sm text-neutral-dark/70 mt-1">{product.shortDescription}</p>
      <p className="text-base font-semibold text-primary mt-3">
        {product.priceInfo}
      </p>
    </div>
  </Link>
);

// Startseite
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="equipment-grid" className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tighter mb-12 text-neutral-dark">
            {seo.productSectionTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
