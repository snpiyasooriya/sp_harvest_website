import { Metadata } from 'next';
import LandingPageContent from "./component/LandingPageContent";

export const metadata: Metadata = {
  title: 'SP Harvest - Premium Organic Mushrooms | Paluwalgala Road, Koswatta, Nattandiya',
  description: 'SP Harvest is Sri Lanka\'s leading organic mushroom farm...',
  keywords: ['organic mushrooms Koswatta', 'SP Harvest Paluwalgala Road', 'Shiitake mushrooms Nattandiya'],
  openGraph: {
    title: 'SP Harvest - Premium Organic Mushroom Farm',
    description: 'Discover Sri Lanka\'s finest organic mushrooms...',
    images: ['https://www.spharvest.com/images/organic-mushrooms-sp-harvest.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.spharvest.com',
    languages: {
      'si': 'https://www.spharvest.com/si',
      'ta': 'https://www.spharvest.com/ta',
    },
  },
};

export default function Home() {
  return <LandingPageContent />;
}

