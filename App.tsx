
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Facebook, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Logo from './components/Logo';
import SectionHeading from './components/SectionHeading';
import { NAV_ITEMS, PARTNERS, MAT_LOGO_COLOR } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1614030424754-24d1f93f181c?auto=format&fit=crop&q=80&w=1200";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const generateArtisticImage = async () => {
      try {
        // Vérification sécurisée de la clé API
        const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
        
        if (!apiKey) {
          console.warn("Clé API manquante. Utilisation de l'image par défaut.");
          setGeneratedImage(FALLBACK_IMAGE);
          setIsImageLoading(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const prompt = "A stunning, professional high-end minimalist photograph of a luxury table setting for 'Maison Art de la Table'. The color palette is strictly sophisticated olive green (#A8A24F) and warm off-white. Features include matte olive green ceramic dinnerware, a textured cream linen napkin, minimalist thin-stemmed glassware, and a single elegant botanical leaf. The lighting is soft, natural tropical daylight with soft artistic shadows. 8k resolution, serene and deeply elegant atmosphere, Mauritian luxury style.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
          config: {
            imageConfig: {
              aspectRatio: "3:4"
            }
          }
        });

        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part?.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
        } else {
          setGeneratedImage(FALLBACK_IMAGE);
        }
      } catch (error) {
        console.error("Erreur lors de la génération de l'image:", error);
        setGeneratedImage(FALLBACK_IMAGE);
      } finally {
        setIsImageLoading(false);
      }
    };

    generateArtisticImage();
  }, []);

  return (
    <div className="min-h-screen">
      <nav className={`fixed w-full z-50 transition-all duration-500 py-6 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
             <a href="#home" className={`text-sm md:text-base tracking-[0.3em] font-serif uppercase transition-colors duration-500 hover:text-mat-olive ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
               Maison Art de la Table
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
               <span className="text-xs uppercase tracking-[0.4em] text-mat-olive">Maison Art de la Table</span>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-mat-olive scroll-mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
        <div className="relative z-20 text-center px-6">
          <div className="mb-12 flex justify-center">
            <Logo className="w-48 h-48 animate-pulse-slow" circleColor="white" textColor={MAT_LOGO_COLOR} />
          </div>
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl mb-6 font-serif tracking-tighter">
            Maison Art de la Table
          </h1>
          <p className="text-white/80 text-lg md:text-xl uppercase tracking-[0.5em] max-w-2xl mx-auto font-light">
            Île Maurice • Novembre 2025
          </p>
          <div className="mt-12">
             <a href="#about" className="inline-block px-10 py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-mat-olive transition-all duration-300">
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
           <Logo className="w-96 h-96" />
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

      <section className="py-24 bg-mat-olive overflow-hidden relative scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10 text-center">
           <span className="text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block font-serif italic">Curateurs de Marques de Prestige</span>
        </div>
        <div className="relative z-10">
          <div className="animate-marquee flex gap-12 md:gap-32 items-center">
            {PARTNERS.map((partner, index) => (
              <div key={`partner-1-${index}`} className="flex-shrink-0 px-4">
                <span className="text-white/90 font-serif text-xl md:text-3xl uppercase tracking-[0.4em] whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  {partner.name}
                </span>
              </div>
            ))}
            {PARTNERS.map((partner, index) => (
              <div key={`partner-2-${index}`} className="flex-shrink-0 px-4">
                <span className="text-white/90 font-serif text-xl md:text-3xl uppercase tracking-[0.4em] whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-mat-olive to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-mat-olive to-transparent z-10" />
        </div>
      </section>

      <section id="contact" className="relative py-24 lg:py-40 bg-[#F5F5F0] scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading subtitle="Contact" title="Commençons une Conversation" />
              <div className="space-y-12 mt-16">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-mat-olive/30 flex items-center justify-center text-mat-olive">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-xs text-mat-olive mb-2">Adresse du Showroom</h5>
                    <p className="text-gray-900 font-serif text-xl">Ken Lee House, M3<br />Riche-Terre, Île Maurice</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-mat-olive/30 flex items-center justify-center text-mat-olive">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-xs text-mat-olive mb-2">Adresse E-mail</h5>
                    <a href="mailto:info@maisonartdelatable.com" className="text-gray-900 font-serif text-xl hover:text-mat-olive transition-colors">info@maisonartdelatable.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 md:p-16 shadow-xl relative">
              <h3 className="text-3xl font-serif mb-8 text-gray-900">Envoyer un Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Nom</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-mat-olive transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">E-mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-mat-olive transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-mat-olive transition-colors resize-none"></textarea>
                </div>
                <button className="flex items-center gap-4 bg-mat-olive text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black transition-all duration-300">
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
            <Logo className="w-16 h-16 mb-4" circleColor={MAT_LOGO_COLOR} />
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
