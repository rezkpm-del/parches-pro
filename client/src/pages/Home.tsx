/**
 * ParchesPro Landing Page
 * Design Philosophy: Neo-Brutalism Vibrante
 * - Thick black borders (4-6px) on all interactive elements
 * - Saturated colors: electric yellow, hot magenta, cyan blue, lime green
 * - Bold condensed typography with exaggerated hierarchy
 * - Hard drop shadows (8-12px offset, no blur)
 * - Stamp/slap animations simulating sticker application
 * - Asymmetric grid with diagonal overlapping sections
 */

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-back",
      once: true,
      offset: 100,
    });
  }, []);

  const scrollToGallery = () => {
    document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              data-aos="stamp"
              data-aos-delay="100"
            >
              Dale vida a tu ropa con un solo planchazo
            </h1>
            <p 
              className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] max-w-3xl"
              data-aos="stamp"
              data-aos-delay="200"
            >
              Escudos bordados termoadhesivos que transforman cualquier prenda en una obra única
            </p>
            <Button
              onClick={scrollToGallery}
              size="lg"
              className="bg-[var(--color-electric-yellow)] text-black hover:bg-[var(--color-electric-yellow)] border-brutal shadow-brutal hover:shadow-brutal-lg transition-all hover:translate-x-1 hover:translate-y-1 text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 font-accent"
              data-aos="stamp"
              data-aos-delay="300"
            >
              VER CATÁLOGO
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-20 md:py-32 bg-[var(--color-cyan-blue)] relative">
        {/* Decorative geometric shape */}
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-[var(--color-hot-magenta)] transform rotate-12 -translate-y-32 translate-x-32 border-brutal"></div>
        
        <div className="container relative z-10">
          <h2 
            className="font-display text-4xl md:text-6xl lg:text-7xl text-black text-center mb-12 md:mb-16"
            data-aos="slap-left"
          >
            ¿Cómo funciona?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div 
              className="bg-white border-brutal shadow-brutal p-8 transform md:-rotate-2"
              data-aos="stamp"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 bg-[var(--color-electric-yellow)] border-brutal flex items-center justify-center mb-6">
                <span className="font-accent text-4xl text-black">1</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-black mb-4">Elige tu escudo</h3>
              <p className="text-base md:text-lg text-black">
                Selecciona el diseño que mejor represente tu estilo único
              </p>
            </div>

            {/* Step 2 */}
            <div 
              className="bg-white border-brutal shadow-brutal p-8 transform md:rotate-1"
              data-aos="stamp"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 bg-[var(--color-hot-magenta)] border-brutal flex items-center justify-center mb-6">
                <span className="font-accent text-4xl text-white">2</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-black mb-4">Colócalo en la prenda</h3>
              <p className="text-base md:text-lg text-black">
                Posiciona el escudo donde quieras darle ese toque especial
              </p>
            </div>

            {/* Step 3 */}
            <div 
              className="bg-white border-brutal shadow-brutal p-8 transform md:-rotate-1"
              data-aos="stamp"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 bg-[var(--color-lime-green)] border-brutal flex items-center justify-center mb-6">
                <span className="font-accent text-4xl text-black">3</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-black mb-4">Plancha 30 segundos</h3>
              <p className="text-base md:text-lg text-black">
                Aplica calor y listo - tu prenda transformada al instante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Productos Section */}
      <section id="galeria" className="py-20 md:py-32 bg-white relative">
        {/* Decorative elements */}
        <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-lime-green)] transform -rotate-45 -translate-x-24 translate-y-24 border-brutal"></div>
        
        <div className="container relative z-10">
          <h2 
            className="font-display text-4xl md:text-6xl lg:text-7xl text-black text-center mb-4"
            data-aos="slap-right"
          >
            Diseños que destacan
          </h2>
          <p 
            className="text-lg md:text-xl text-center text-black mb-12 md:mb-16 max-w-2xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Cada escudo es una pieza de arte bordada con precisión y colores vibrantes
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Patch 1 - Skull */}
            <div 
              className="bg-white border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4"
              data-aos="stamp"
              data-aos-delay="100"
            >
              <div className="aspect-square bg-gray-100 border-4 border-black mb-4 overflow-hidden">
                <img 
                  src="/images/patch-skull.png" 
                  alt="Escudo bordado de calavera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl text-black text-center">Calavera Punk</h3>
            </div>

            {/* Patch 2 - Lightning */}
            <div 
              className="bg-white border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4"
              data-aos="stamp"
              data-aos-delay="200"
            >
              <div className="aspect-square bg-gray-100 border-4 border-black mb-4 overflow-hidden">
                <img 
                  src="/images/patch-lightning.png" 
                  alt="Escudo bordado de rayo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl text-black text-center">Rayo Eléctrico</h3>
            </div>

            {/* Patch 3 - Star */}
            <div 
              className="bg-white border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4"
              data-aos="stamp"
              data-aos-delay="300"
            >
              <div className="aspect-square bg-gray-100 border-4 border-black mb-4 overflow-hidden">
                <img 
                  src="/images/patch-star.png" 
                  alt="Escudo bordado de estrella" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl text-black text-center">Estrella Pop</h3>
            </div>

            {/* Patch 4 - Heart */}
            <div 
              className="bg-white border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4"
              data-aos="stamp"
              data-aos-delay="400"
            >
              <div className="aspect-square bg-gray-100 border-4 border-black mb-4 overflow-hidden">
                <img 
                  src="/images/patch-heart.png" 
                  alt="Escudo bordado de corazón" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl text-black text-center">Corazón Urbano</h3>
            </div>

            {/* Patch 5 - Flame */}
            <div 
              className="bg-white border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4"
              data-aos="stamp"
              data-aos-delay="500"
            >
              <div className="aspect-square bg-gray-100 border-4 border-black mb-4 overflow-hidden">
                <img 
                  src="/images/patch-flame.png" 
                  alt="Escudo bordado de llamas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl text-black text-center">Llamas Hot Rod</h3>
            </div>

            {/* Patch 6 - Coming Soon */}
            <div 
              className="bg-[var(--color-hot-magenta)] border-brutal shadow-brutal-sm hover:shadow-brutal-lg transition-all hover:-translate-y-2 p-4 flex items-center justify-center"
              data-aos="stamp"
              data-aos-delay="600"
            >
              <div className="text-center">
                <span className="font-accent text-4xl text-white block mb-2">+</span>
                <h3 className="font-display text-lg md:text-xl text-white">Más diseños próximamente</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 md:py-32 bg-[var(--color-electric-yellow)] relative overflow-hidden">
        {/* Decorative shape */}
        <div className="hidden lg:block absolute top-1/2 right-0 w-96 h-96 bg-[var(--color-hot-magenta)] rounded-full transform translate-x-48 -translate-y-1/2 border-brutal"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div data-aos="slap-left">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-black mb-8">
                ¿Por qué elegirnos?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border-brutal shadow-brutal-sm p-6">
                  <h3 className="font-display text-xl md:text-2xl text-black mb-2">🔥 Súper Duraderos</h3>
                  <p className="text-base md:text-lg text-black">
                    Resisten lavados intensos y el uso diario sin perder color ni forma
                  </p>
                </div>
                
                <div className="bg-white border-brutal shadow-brutal-sm p-6">
                  <h3 className="font-display text-xl md:text-2xl text-black mb-2">💧 100% Lavables</h3>
                  <p className="text-base md:text-lg text-black">
                    Perfectos para lavadora y secadora - mantienen su calidad intacta
                  </p>
                </div>
                
                <div className="bg-white border-brutal shadow-brutal-sm p-6">
                  <h3 className="font-display text-xl md:text-2xl text-black mb-2">✨ Diseños Únicos</h3>
                  <p className="text-base md:text-lg text-black">
                    Colecciones exclusivas que no encontrarás en ningún otro lugar
                  </p>
                </div>
                
                <div className="bg-white border-brutal shadow-brutal-sm p-6">
                  <h3 className="font-display text-xl md:text-2xl text-black mb-2">⚡ Aplicación Instantánea</h3>
                  <p className="text-base md:text-lg text-black">
                    Solo 30 segundos con la plancha y listo - sin costuras ni complicaciones
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:block"
              data-aos="slap-right"
            >
              <div className="bg-[var(--color-cyan-blue)] border-brutal shadow-brutal-lg p-12 transform rotate-3">
                <div className="bg-white border-brutal p-8 transform -rotate-6">
                  <p className="font-display text-3xl text-black text-center leading-relaxed">
                    "Transforma cualquier prenda aburrida en una declaración de estilo"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-8 border-[var(--color-hot-magenta)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">ParchesPro</h3>
              <p className="text-base md:text-lg">
                Escudos bordados que cuentan tu historia
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg md:text-xl mb-4">Contacto</h4>
              <ul className="space-y-2 text-base md:text-lg">
                <li>📧 info@parchespro.com</li>
                <li>📱 WhatsApp: +1 234 567 890</li>
                <li>📍 Ciudad, País</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg md:text-xl mb-4">Síguenos</h4>
              <ul className="space-y-2 text-base md:text-lg">
                <li>
                  <a href="#" className="hover:text-[var(--color-electric-yellow)] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-electric-yellow)] transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-electric-yellow)] transition-colors">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-4 border-[var(--color-hot-magenta)] pt-8 text-center">
            <p className="text-base md:text-lg">
              © 2025 ParchesPro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
