export interface PriceTier {
  duration: string;
  price: number;
}

export interface RentalConditions {
  deposit: number;
  paymentMethods: string[];
  requirements: string[];
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription: string; // Für die Produktkachel
  longDescription: string; // Für die Detailseite
  priceInfo: string; // z.B. "ab 100€ / Tag"
  priceTiers: PriceTier[];
  rentalConditions: RentalConditions;
  technicalData: { [key: string]: string };
  benefits: string[];
  imageUrl: string;
}
