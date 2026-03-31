import { Partner } from './types';

export interface ProductItem {
  image: string;
  titleKey: string;
}

export const NAV_KEYS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.collections', href: '#collections' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.contact', href: '#contact' }
];

export const PRODUCTS: ProductItem[] = [
  { image: '/products/dining-experience.png', titleKey: 'product.dining_experience' },
  { image: '/products/fine-dining-signature.png', titleKey: 'product.fine_dining_signature' },
  { image: '/products/asian-contemporary.png', titleKey: 'product.asian_contemporary' },
  { image: '/products/beach-poolside.png', titleKey: 'product.beach_poolside' },
  { image: '/products/buffet-service.png', titleKey: 'product.buffet_service' },
  { image: '/products/glassware-beverage.png', titleKey: 'product.glassware_beverage' },
  { image: '/products/cutlery-table-essentials.png', titleKey: 'product.cutlery_essentials' },
];

export const PARTNERS: Partner[] = [
  { name: 'Bernardaud', logoUrl: '/logos/bernardaud.png' },
  { name: 'Broggi', logoUrl: '/logos/broggi.png' },
  { name: 'Alessi', logoUrl: '/logos/alessi.png' },
  { name: 'Italesse', logoUrl: '/logos/italesse.png' },
  { name: 'Gharyan Stoneware', logoUrl: '/logos/gharyan.png' },
  { name: 'M.A.T', logoUrl: '/logos/mat.png' },
  { name: 'Koziol', logoUrl: '/logos/koziol.png' },
  { name: 'Nosse Ceramics', logoUrl: '/logos/nosse.png' },
  { name: 'Not Neutral', logoUrl: '/logos/notneutral.png' },
  { name: 'Porland', logoUrl: '/logos/porland.png' },
];
