
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Facebook, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './components/SectionHeading';
import { NAV_ITEMS, PARTNERS, PRODUCT_SLIDES, PRODUCT_GALLERY } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setGeneratedImage("/image.png");
    setIsImageLoading(false);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % PRODUCT_SLIDES.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + PRODUCT_SLIDES.length) % PRODUCT_SLIDES.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen">
      <nav className={`fixed w-full z-50 transition-all duration-500 py-6 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
             <a href="#home">
               <img
                 src="/logo-mat-transparent.png"
                 alt="Maison Art de la Table"
                 className={`h-24 md:h-28 -my-8 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
               />
             </a>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.3em] hover:text-mat-olive transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2 transition-colors duration-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-in fade-in duration-300">
             {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg uppercase tracking-[0.3em] text-gray-800 hover:text-mat-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-12 text-center">
               <img src="/logo-mat-transparent.png" alt="Maison Art de la Table" className="h-16 w-auto mx-auto" />
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-mat-olive scroll-mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
        <div className="relative z-20 text-center px-6">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo-mat-transparent.png"
              alt="Maison Art de la Table"
              className="w-64 md:w-80 lg:w-96 h-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/80 text-lg md:text-xl uppercase tracking-[0.5em] max-w-2xl mx-auto font-light">
            Île Maurice • Novembre 2025
          </p>
          <div className="mt-12">
             <a href="#about" className="inline-block px-10 py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-gray-900 transition-all duration-300">
               Explorer Notre Vision
             </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      <section id="about" className="py-24 lg:py-40 bg-[#F5F5F0] scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="À Propos" title="Une Passion pour le Design Authentique" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Maison Art De La Table est née d'une passion profonde pour le design authentique et l'artisanat d'exception. Nous apportons une vision globale renouvelée, une structure moderne et une expertise éprouvée dans la distribution internationale des arts de la table.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Notre mission est de connecter les plus beaux arts de la table du monde aux destinations les plus exceptionnelles de l'Océan Indien.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl text-mat-olive mb-2">Vision Globale</h4>
                <p className="text-sm text-gray-500">Présence au Canada, aux États-Unis, en Europe, en Tunisie et à l'Île Maurice.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-mat-olive mb-2">Expertise Éprouvée</h4>
                <p className="text-sm text-gray-500">Des décennies d'expérience en logistique et distribution internationale.</p>
              </div>
            </div>
          </div>
          <div className="relative group min-h-[600px] flex items-center justify-center bg-gray-200 shadow-2xl">
            {isImageLoading ? (
              <div className="flex flex-col items-center gap-4 text-mat-olive">
                <Loader2 className="animate-spin w-12 h-12" />
                <span className="text-xs uppercase tracking-widest font-serif italic">Création de votre mise en table...</span>
              </div>
            ) : (
              <>
                <div className="absolute -inset-4 border border-mat-olive/20 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
                {generatedImage && (
                  <img 
                    src={generatedImage} 
                    alt="Mise en table artistique"
                    className="w-full h-[600px] object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <section id="mission" className="py-32 bg-mat-olive relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <img src="/logo-mat-transparent.png" alt="" className="w-96 h-96 object-contain brightness-0 invert" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-white text-3xl md:text-5xl font-serif leading-tight italic mb-12">
              “L'hospitalité consiste à créer des émotions. Elle vit dans les détails — la texture d'une assiette, le poids d'une tasse, la beauté de ce qui entoure un repas.”
            </p>
            <footer className="text-white/80 uppercase tracking-[0.4em] text-sm">
              — Ghassen Ghariani
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="services" className="py-24 lg:py-40 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading subtitle="L'Avantage Stratégique" title="Nos Forces et Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {[
              { title: "Expertise Internationale", desc: "Logistique optimisée et service après-vente sur plusieurs continents." },
              { title: "Curation Stratégique", desc: "Compréhension approfondie des besoins hôteliers pour sélectionner les meilleures collections." },
              { title: "Présence Locale", desc: "Showroom M3 à Ken Lee House, Riche-Terre pour une réactivité et un suivi rapides." },
              { title: "Logistique Fiable", desc: "Gestion efficace des stocks et opérations régionales consolidées." }
            ].map((strength, i) => (
              <div key={i} className="border-l border-mat-olive/30 pl-8 group hover:border-mat-olive transition-colors duration-500">
                <span className="text-mat-olive font-serif text-3xl block mb-6 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="py-24 lg:py-40 bg-[#F5F5F0] scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Nos Collections" title="L'Art de Recevoir" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto mt-8 overflow-hidden group/carousel">
          <div className="relative aspect-[21/9] bg-gray-100 overflow-hidden">
            {PRODUCT_SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/70 mb-2 block">{slide.brand}</span>
                  <h3 className="text-white text-2xl md:text-4xl font-serif">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            aria-label="Diapositive précédente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            aria-label="Diapositive suivante"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {PRODUCT_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-[2px] transition-all duration-500 ${
                  index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PRODUCT_GALLERY.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${
                  index === 0 ? 'row-span-2' : ''
                } ${index === 3 ? 'col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-gray-200 ${
                  index === 0 ? 'h-full min-h-[400px] md:min-h-[600px]' : 'aspect-square'
                } ${index === 3 ? 'aspect-[2/1]' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs uppercase tracking-[0.4em] text-white/70 mb-2">{item.brand}</span>
                    <h4 className="text-white text-lg md:text-2xl font-serif text-center px-4">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden relative scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-mat-olive mb-4 block font-serif italic">Nos Partenaires de Prestige</span>
          <div className="w-16 h-[1px] bg-mat-olive/30 mx-auto mt-6" />
        </div>
        <div className="relative z-10">
          <div className="animate-marquee flex items-center">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={`partner-${index}`} className="flex-shrink-0 px-8 md:px-16">
                <div className="w-32 h-20 md:w-44 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-default">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

      <section id="contact" className="relative py-24 lg:py-40 bg-mat-olive scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading subtitle="Contact" title="Commençons une Conversation" light />
              <div className="space-y-12 mt-16">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-xs text-white/60 mb-2">Adresse du Showroom</h5>
                    <p className="text-white font-serif text-xl">Ken Lee House, M3<br />Riche-Terre, Île Maurice</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-xs text-white/60 mb-2">Adresse E-mail</h5>
                    <a href="mailto:info@maisonartdelatable.com" className="text-white font-serif text-xl hover:text-white/80 transition-colors">info@maisonartdelatable.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 md:p-16 relative">
              <h3 className="text-3xl font-serif mb-8 text-white">Envoyer un Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">Nom</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">E-mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                </div>
                <button className="flex items-center gap-4 bg-white text-mat-olive px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Envoyer le Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-16 border-t border-gray-100 font-sans">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo-mat-transparent.png" alt="Maison Art de la Table" className="h-16 w-auto mb-4" />
            <p className="text-xs uppercase tracking-widest text-gray-400">© 2025 Maison Art de la Table. Tous droits réservés.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-mat-olive transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-mat-olive transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <div className="text-right flex flex-col items-center md:items-end">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Conçu pour les</p>
            <p className="text-sm font-serif text-gray-900 italic">Destinations d'Exception</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
