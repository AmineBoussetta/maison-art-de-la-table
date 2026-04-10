export type Lang = 'en' | 'fr';

type Translations = Record<Lang, Record<string, string>>;

export const translations: Translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.collections': 'Collections',
    'nav.contact': 'Contact',

    // Hero
    'hero.locations': 'Mauritius • Seychelles • Maldives',
    'hero.based': 'Based in Mauritius',
    'hero.cta': 'Explore Our Vision',

    // Collections
    'collections.title': 'Our Collections',

    // About
    'about.subtitle': '',
    'about.title': 'Elevating the Art of the Table',
    'about.full.p1': 'Maison Art de la Table is a hospitality supply company based in Mauritius, dedicated to elevating the dining experience of hotels, restaurants, and homes through carefully curated tableware, service essentials, and décor pieces.',
    'about.full.p2': 'Bringing years of experience from the North American hospitality and distribution markets, Maison Art de la Table was founded by Ghassen Ghariani, who introduces a fresh perspective to the industry by combining international expertise, refined aesthetics, and a new way of working with hospitality partners. Our showroom in Mauritius allows professionals and clients to discover and experience our collections firsthand.',
    'about.full.p3': 'In addition to our own brand, we collaborate closely with renowned manufacturers and emerging designers from around the world. Many of these relationships were established during international trade shows and industry events where we were exhibiting our own collections, allowing us to build direct and trusted connections with brands that share our vision for design, quality, and hospitality. Through these partnerships, we continuously bring new brands, styles, and innovations to Mauritius in order to refine and expand our offer.',
    'about.full.p4': 'From professional hospitality environments to private homes, our mission is to provide durable, beautifully designed collections that enhance the art of the table and interior spaces while meeting the practical needs of everyday use.',
    'about.full.p5': 'At Maison Art de la Table, we believe that the table and the objects that surround it are more than functional — they are part of the atmosphere, the experience, and the story each place tells.',

    // Mission
    'mission.subtitle': '',
    'mission.title': 'Our Mission',
    'mission.quote': '"Hospitality is about creating emotions. It lives in the details — the texture of a plate, the weight of a cup, the beauty of what surrounds a meal."',

    // Strengths
    'strengths.subtitle': 'Why Work With Us',
    'strengths.title': 'Our Strengths',
    'strengths.1.title': 'In-Stock & Ready to Deliver',
    'strengths.1.desc': 'A curated selection of key pieces available locally, allowing for fast and reliable supply tailored to hospitality operations.',
    'strengths.2.title': 'Global Brand Partnerships',
    'strengths.2.desc': 'We collaborate with leading international tableware brands and designers to bring exclusive collections to the region.',
    'strengths.3.title': 'Exclusive House Collections',
    'strengths.3.desc': 'Our own brand combines refined design, durability, and functionality tailored for hospitality and everyday use.',
    'strengths.4.title': 'International Expertise',
    'strengths.4.desc': 'Years of experience across North American and global hospitality markets, bringing a fresh and strategic approach.',
    'strengths.5.title': 'Premium Quality Standards',
    'strengths.5.desc': 'Carefully curated high-end products designed to meet the expectations of hotels, restaurants, and luxury environments.',
    'strengths.6.title': 'Transparent & Competitive Pricing',
    'strengths.6.desc': 'Clear, honest pricing with no hidden margins, ensuring long-term value for our partners.',

    // Contact
    'contact.subtitle': 'Contact',
    'contact.title': "Let's Start a Conversation",
    'contact.address.label': 'Showroom Address',
    'contact.address.appointment': 'By appointment only',
    'contact.address.value': 'Maison Art de la Table',
    'contact.address.line2': 'Ken Lee House, M3',
    'contact.address.city': 'Riche-Terre, Mauritius',
    'contact.email.label': 'Email Address',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': '+230 5858 0930',
    'contact.form.title': 'Send a Message',
    'contact.form.quote': 'Get a Quote',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.business': 'Business Name',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // Footer
    'footer.rights': '© 2026 Maison Art de la Table. All rights reserved.',
    'footer.tagline.top': 'Designed for',
    'footer.tagline.bottom': 'Exceptional Destinations',

    // Products
    'product.dining_experience': 'Dining Experience',
    'product.fine_dining_signature': 'Fine Dining & Signature Restaurants',
    'product.asian_contemporary': 'Asian & Contemporary Dining',
    'product.beach_poolside': 'Beach & Poolside',
    'product.buffet_service': 'Buffet & Service',
    'product.glassware_beverage': 'Glassware & Beverage',
    'product.cutlery_essentials': 'Cutlery & Table Essentials',
  },
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.collections': 'Collections',
    'nav.contact': 'Contact',

    // Hero
    'hero.locations': 'Île Maurice • Seychelles • Maldives',
    'hero.based': 'Basé à Île Maurice',
    'hero.cta': 'Explorer Notre Vision',

    // Collections
    'collections.title': 'Nos Collections',

    // About
    'about.subtitle': '',
    'about.title': "Élever l'Art de la Table",
    'about.full.p1': "Maison Art de la Table est une société d'équipement pour l'hôtellerie basée à Maurice, dédiée à sublimer l'expérience de table des hôtels, restaurants et particuliers à travers une sélection soignée de vaisselle, d'accessoires de service et d'objets de décoration.",
    'about.full.p2': "Forte de plusieurs années d'expérience sur les marchés nord-américains de l'hôtellerie et de la distribution, Maison Art de la Table a été fondée par Ghassen Ghariani, qui apporte une nouvelle vision au secteur en combinant expertise internationale, sens du détail et approche renouvelée de la collaboration avec les acteurs de l'hospitalité. Notre showroom à Maurice permet aux professionnels comme aux particuliers de découvrir et d'expérimenter nos collections.",
    'about.full.p3': "En complément de notre propre marque, nous collaborons étroitement avec des fabricants reconnus et des designers émergents du monde entier. Nombre de ces partenariats ont été établis lors de salons internationaux et d'événements professionnels où nous exposions nos collections, nous permettant de créer des relations directes et de confiance avec des marques partageant notre exigence en matière de design, de qualité et d'hospitalité. À travers ces collaborations, nous introduisons continuellement de nouvelles marques, styles et innovations à Maurice afin d'enrichir et d'affiner notre offre.",
    'about.full.p4': "Des environnements professionnels aux espaces privés, notre mission est de proposer des collections durables, esthétiques et fonctionnelles, pensées pour sublimer l'art de la table et les intérieurs tout en répondant aux exigences du quotidien.",
    'about.full.p5': "Chez Maison Art de la Table, nous considérons que la table et les objets qui l'entourent ne sont pas simplement fonctionnels — ils participent à l'atmosphère, à l'expérience et à l'histoire que chaque lieu raconte.",

    // Mission
    'mission.subtitle': '',
    'mission.title': 'Notre Mission',
    'mission.quote': "\"L'hospitalité consiste à créer des émotions. Elle vit dans les détails — la texture d'une assiette, le poids d'une tasse, la beauté de ce qui entoure un repas.\"",

    // Strengths
    'strengths.subtitle': 'Pourquoi Travailler Avec Nous',
    'strengths.title': 'Nos Forces',
    'strengths.1.title': 'Stock Disponible & Livraison Rapide',
    'strengths.1.desc': "Une sélection de pièces essentielles disponibles localement, permettant un approvisionnement rapide et fiable, adapté aux exigences de l'hôtellerie.",
    'strengths.2.title': 'Partenariats Internationaux',
    'strengths.2.desc': "Nous collaborons avec des marques de vaisselle et des designers reconnus à l'international afin d'introduire des collections exclusives sur le marché.",
    'strengths.3.title': 'Collections Exclusives Maison',
    'strengths.3.desc': 'Notre propre marque allie design raffiné, durabilité et fonctionnalité, pensée pour les environnements professionnels comme pour un usage quotidien.',
    'strengths.4.title': 'Expertise Internationale',
    'strengths.4.desc': "Une expérience développée sur les marchés nord-américains et internationaux, apportant une vision stratégique et contemporaine à l'hospitalité.",
    'strengths.5.title': 'Standards de Qualité Premium',
    'strengths.5.desc': "Des produits soigneusement sélectionnés, conçus pour répondre aux exigences des hôtels, restaurants et environnements haut de gamme.",
    'strengths.6.title': 'Transparence & Justesse des Prix',
    'strengths.6.desc': 'Une politique de prix claire et maîtrisée, sans marges cachées, pour garantir une relation de confiance durable avec nos partenaires.',

    // Contact
    'contact.subtitle': 'Contact',
    'contact.title': 'Commençons une Conversation',
    'contact.address.label': 'Adresse du Showroom',
    'contact.address.appointment': 'Sur rendez-vous uniquement',
    'contact.address.value': 'Maison Art de la Table',
    'contact.address.line2': 'Ken Lee House, M3',
    'contact.address.city': 'Riche-Terre, Île Maurice',
    'contact.email.label': 'Adresse E-mail',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': '+230 5858 0930',
    'contact.form.title': 'Envoyer un Message',
    'contact.form.quote': 'Demander un Devis',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Téléphone',
    'contact.form.business': "Nom de l'Entreprise",
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',

    // Footer
    'footer.rights': '© 2026 Maison Art de la Table. Tous droits réservés.',
    'footer.tagline.top': 'Conçu pour les',
    'footer.tagline.bottom': "Destinations d'Exception",

    // Products
    'product.dining_experience': 'Expérience de Table',
    'product.fine_dining_signature': 'Haute Gastronomie & Restaurants Signature',
    'product.asian_contemporary': 'Cuisine Asiatique & Contemporaine',
    'product.beach_poolside': 'Plage & Bord de Piscine',
    'product.buffet_service': 'Buffet & Service',
    'product.glassware_beverage': 'Verrerie & Boissons',
    'product.cutlery_essentials': 'Couverts & Essentiels de Table',
  }
};
