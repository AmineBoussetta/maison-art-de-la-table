
import { NavItem, Partner, ProductSlide } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À Propos', href: '#about' },
  { label: 'Notre Mission', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Collections', href: '#collections' },
  { label: 'Contact', href: '#contact' }
];

export const PRODUCT_SLIDES: ProductSlide[] = [
  {
    image: '/products/ambiance-2.png',
    title: 'L\'Élégance au Quotidien',
    brand: 'Art de la Table'
  },
  {
    image: '/products/porland-banner.png',
    title: 'Collection Terre & Tradition',
    brand: 'Porland'
  },
  {
    image: '/products/bernardaud.png',
    title: 'Pureté & Raffinement',
    brand: 'Bernardaud'
  }
];

export const PRODUCT_GALLERY: ProductSlide[] = [
  {
    image: '/products/koziol.png',
    title: 'Verres Design',
    brand: 'Koziol'
  },
  {
    image: '/products/porland-1.png',
    title: 'Assiettes Artisanales',
    brand: 'Porland'
  },
  {
    image: '/products/porland-2.png',
    title: 'Collection Texturée',
    brand: 'Porland'
  },
  {
    image: '/products/ambiance-1.png',
    title: 'L\'Art du Dressage',
    brand: 'Ambiance'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Alessi', logoUrl: '/logos/alessi.png' },
  { name: 'Bernardaud', logoUrl: '/logos/bernardaud.png' },
  { name: 'Gharyan', logoUrl: '/logos/gharyan.png' },
  { name: 'Koziol', logoUrl: '/logos/koziol.png' },
  { name: 'Nosse Ceramics', logoUrl: '/logos/nosse.png' },
  { name: 'Porland', logoUrl: '/logos/porland.png' }
];

export const MAT_LOGO_COLOR = '#A8A24F';
