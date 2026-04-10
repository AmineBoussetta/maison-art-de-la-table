
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Mail, MapPin, ArrowRight, Instagram, Linkedin, ChevronLeft, ChevronRight, MessageCircle, Package, Globe, Home, Compass, Award, DollarSign } from 'lucide-react';
import SectionHeading from './components/SectionHeading';
import { NAV_KEYS, PARTNERS, PRODUCTS } from './constants';
import { translations, Lang } from './translations';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const carouselRef = useRef<HTMLDivElement>(null);

  const t = useCallback((key: string) => translations[lang][key] ?? key, [lang]);

  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('div')?.offsetWidth ?? 300;
    const scrollAmount = (cardWidth + 24) * 5;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === 'right') {
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const newPos = Math.min(container.scrollLeft + scrollAmount, maxScroll);
        container.scrollTo({ left: newPos, behavior: 'smooth' });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        const newPos = Math.max(container.scrollLeft - scrollAmount, 0);
        container.scrollTo({ left: newPos, behavior: 'smooth' });
      }
    }
  }, []);

  const langToggle = (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 text-xs uppercase tracking-[0.2em]"
    >
      <span className={lang === 'fr' ? 'text-mat-olive font-medium' : isScrolled ? 'text-gray-400' : 'text-white/50'}>FR</span>
      <span className={isScrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
      <span className={lang === 'en' ? 'text-mat-olive font-medium' : isScrolled ? 'text-gray-400' : 'text-white/50'}>EN</span>
    </button>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <nav className={`fixed w-full z-50 transition-all duration-500 py-2 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent'}`}>
        <div className="w-full px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
             <a href="#home">
               <img
                 src="/logo-mat-transparent.png"
                 alt="Maison Art de la Table"
                 className={`h-12 sm:h-16 md:h-20 -my-4 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
               />
             </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_KEYS.map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className={`text-xs uppercase tracking-[0.3em] hover:text-mat-olive transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-300/30">
              {langToggle}
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {langToggle}
            <button 
              className="p-2 transition-colors duration-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 md:hidden animate-in fade-in duration-300">
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-900" />
            </button>
             {NAV_KEYS.map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className="text-base sm:text-lg uppercase tracking-[0.3em] text-gray-800 hover:text-mat-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="pt-8 text-center">
               <img src="/logo-mat-transparent.png" alt="Maison Art de la Table" className="h-12 w-auto mx-auto" />
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative pt-16 flex items-center justify-center overflow-hidden bg-mat-olive scroll-mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/logo-mat-transparent.png"
              alt="Maison Art de la Table"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/80 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] max-w-2xl mx-auto font-light">
            {t('hero.locations')}
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-3 font-light">
            {t('hero.based')}
          </p>
          <div className="mt-8 sm:mt-12">
             <a href="#about" className="inline-block px-8 sm:px-10 py-3 sm:py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-gray-900 transition-all duration-300">
               {t('hero.cta')}
             </a>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6 bg-mat-olive overflow-hidden relative">
        <div className="relative z-10">
          <div className="animate-marquee flex items-center">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={`partner-${index}`} className="flex-shrink-0 px-6 sm:px-8 md:px-16">
                <div className="w-28 h-20 sm:w-40 sm:h-24 md:w-52 md:h-28 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-default">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-mat-olive to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-mat-olive to-transparent z-10" />
        </div>
      </section>

      <section id="collections" className="pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-24 bg-[#F5F5F0] scroll-mt-20">
        <div className="px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex-1 h-[1px] bg-[#A8A24F] opacity-30" />
            <h2 className="text-base sm:text-lg md:text-xl font-serif text-mat-olive whitespace-nowrap">{t('collections.title')}</h2>
            <div className="flex-1 h-[1px] bg-[#A8A24F] opacity-30" />
          </div>
        </div>

        <div className="relative mt-6 sm:mt-10 group/carousel">
          <div className="px-4 sm:px-6 md:px-12">
            <div
              ref={carouselRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PRODUCTS.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[44%] sm:w-[30%] lg:w-[calc((100%-5*1.5rem)/6)] group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={t(item.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 sm:mt-3 text-center">
                    <h4 className="text-gray-900 font-serif text-xs sm:text-sm">{t(item.titleKey)}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-1 sm:left-2 md:left-6 top-[calc(50%-40px)] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-1 sm:right-2 md:right-6 top-[calc(50%-40px)] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      <section id="about" className="pt-6 pb-12 lg:pt-8 lg:pb-24 bg-[#F5F5F0] scroll-mt-20">
        <div className="px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <SectionHeading subtitle={t('about.subtitle')} title={t('about.title')} />
            <div className="space-y-4 sm:space-y-5">
              {['about.full.p1', 'about.full.p2', 'about.full.p3', 'about.full.p4', 'about.full.p5'].map((key) => (
                <p key={key} className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t(key)}
                </p>
              ))}
            </div>
          </div>
          <div className="relative group h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center bg-gray-200 shadow-2xl">
            <div className="absolute -inset-4 border border-mat-olive/20 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700 hidden lg:block" />
            <img 
              src="/image.png" 
              alt="Artistic table setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-6 pb-12 lg:pt-8 lg:pb-24 bg-[#F5F5F0]">
        <div className="px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative group h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center bg-gray-200 shadow-2xl order-2 lg:order-1">
            <img 
              src="/products/dining-experience.png" 
              alt="Table setting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading subtitle={t('mission.subtitle')} title={t('mission.title')} />
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic font-serif">
              {t('mission.quote')}
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
              — Ghassen Ghariani
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="pt-2 pb-12 sm:pt-4 sm:pb-16 lg:pt-4 lg:pb-24 bg-[#F5F5F0] scroll-mt-20">
        <div className="px-4 sm:px-6 md:px-12">
          <SectionHeading subtitle={t('strengths.subtitle')} title={t('strengths.title')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-8 sm:mt-12 lg:mt-14">
            {([
              { icon: Package, idx: 1 },
              { icon: Globe, idx: 2 },
              { icon: Home, idx: 3 },
              { icon: Compass, idx: 4 },
              { icon: Award, idx: 5 },
              { icon: DollarSign, idx: 6 },
            ]).map(({ icon: Icon, idx }) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-mat-olive/30 flex items-center justify-center text-mat-olive flex-shrink-0 group-hover:bg-mat-olive group-hover:text-white transition-all duration-500">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-serif text-gray-900 mb-1.5 sm:mb-2">{t(`strengths.${idx}.title`)}</h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">{t(`strengths.${idx}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-12 sm:py-16 lg:py-24 bg-mat-olive scroll-mt-20">
        <div className="px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-white mb-8 sm:mb-12">{t('contact.title')}</h3>
              <div className="space-y-8 sm:space-y-12">
                <div className="flex items-start gap-4 sm:gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} className="sm:hidden" />
                    <MapPin size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-[10px] sm:text-xs text-white/60 mb-1">{t('contact.address.label')}</h5>
                    <p className="text-white font-serif text-sm sm:text-base">
                      {t('contact.address.value')}<br />
                      {t('contact.address.line2')}<br />
                      {t('contact.address.city')}
                    </p>
                    <p className="text-white/50 text-[10px] sm:text-xs italic mt-1.5">{t('contact.address.appointment')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} className="sm:hidden" />
                    <Mail size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-[10px] sm:text-xs text-white/60 mb-1">{t('contact.email.label')}</h5>
                    <a href="mailto:info@maisonartdelatable.com" className="text-white font-serif text-sm sm:text-base hover:text-white/80 transition-colors break-all sm:break-normal">info@maisonartdelatable.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle size={20} className="sm:hidden" />
                    <MessageCircle size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-[10px] sm:text-xs text-white/60 mb-1">{t('contact.whatsapp.label')}</h5>
                    <a href="https://wa.me/23058580930" target="_blank" rel="noopener noreferrer" className="text-white font-serif text-sm sm:text-base hover:text-white/80 transition-colors">{t('contact.whatsapp.value')}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-10 md:p-16 relative">
              <h3 className="text-lg sm:text-xl font-serif mb-4 sm:mb-6 text-white">{t('contact.form.title')}</h3>
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-white font-serif text-lg mb-2">{t('contact.form.success.title')}</p>
                  <p className="text-white/60 text-sm">{t('contact.form.success.desc')}</p>
                </div>
              ) : (
              <form
                className="space-y-4 sm:space-y-6"
                action="https://formspree.io/f/xwvwgedn"
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('submitting');
                  const form = e.currentTarget;
                  try {
                    const res = await fetch(form.action, {
                      method: 'POST',
                      body: new FormData(form),
                      headers: { Accept: 'application/json' },
                    });
                    if (res.ok) {
                      setFormStatus('success');
                      form.reset();
                    } else {
                      setFormStatus('error');
                    }
                  } catch {
                    setFormStatus('error');
                  }
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{t('contact.form.name')} *</label>
                    <input type="text" name="name" required className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{t('contact.form.email')} *</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{t('contact.form.phone')} *</label>
                    <input type="tel" name="phone" required className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{t('contact.form.business')} *</label>
                    <input type="text" name="business" required className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{t('contact.form.message')} *</label>
                  <textarea rows={4} name="message" required className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                </div>
                {formStatus === 'error' && (
                  <p className="text-red-300 text-xs">{t('contact.form.error')}</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="flex items-center gap-2 sm:gap-3 bg-white text-mat-olive px-5 sm:px-8 py-2.5 sm:py-3 uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? t('contact.form.sending') : t('contact.form.submit')} <ArrowRight size={16} />
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 sm:py-12 border-t border-gray-100 font-sans">
        <div className="px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo-mat-transparent.png" alt="Maison Art de la Table" className="h-12 sm:h-16 w-auto mb-3 sm:mb-4" />
            <p className="text-xs uppercase tracking-widest text-gray-400 text-center md:text-left">{t('footer.rights')}</p>
          </div>
          <div className="flex gap-6 sm:gap-8">
            <a href="https://www.instagram.com/maisonartdelatable/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mat-olive transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-mat-olive transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">{t('footer.tagline.top')}</p>
            <p className="text-sm font-serif text-gray-900 italic">{t('footer.tagline.bottom')}</p>
          </div>
        </div>
        <p className="mt-4 text-[9px] text-gray-300 tracking-widest uppercase text-center"><a href="mailto:amineboussetta006@gmail.com" className="hover:text-gray-400 transition-colors">Developed by AB</a></p>
      </footer>
    </div>
  );
};

export default App;
