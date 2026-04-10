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
  { name: 'Bernardaud', logoUrl: '/partner-logos/Logos-01.svg' },
  { name: 'Broggi', logoUrl: '/partner-logos/Logos-02.svg' },
  { name: 'M.A.T', logoUrl: '/partner-logos/Logos-03.svg' },
  { name: 'Gharyan Stoneware', logoUrl: '/partner-logos/Logos-04.svg' },
  { name: 'Koziol', logoUrl: '/partner-logos/Logos-05.svg' },
  { name: 'Alessi', logoUrl: '/partner-logos/Logos-10.svg' },
  { name: 'Nosse Ceramics', logoUrl: '/partner-logos/Logos-07.svg' },
  { name: 'Not Neutral', logoUrl: '/partner-logos/Logos-08.svg' },
  { name: 'Porland', logoUrl: '/partner-logos/Logos-09.svg' },
  { name: 'Italesse', logoUrl: '/partner-logos/Logos-11.svg' },
  { name: 'Partner', logoUrl: '/partner-logos/Logos-06.svg' },
];
