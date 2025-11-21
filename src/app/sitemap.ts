import { MetadataRoute } from 'next'
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `https://mixport.de/produkt/${product.slug}`,
    lastModified: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://mixport.de',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mixport.de/impressum',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://mixport.de/datenschutz',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productEntries,
  ]
}
