/**
 * ParchesPro Landing Page - Diseño Futurista Eléctrico
 * Design Philosophy: Estética cyberpunk/synthwave con efectos neón
 * - Gradiente azul noche → violeta intenso
 * - Patrones geométricos brillantes en cian y magenta
 * - Tipografía Poppins audaz con efectos de resplandor
 * - Botones neón magenta con bordes cian y brillo pulsante
 * - Marcos neón en galería con hover effects intensos
 * - Transiciones suaves y efectos de luz en todos los elementos
 */

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import { ESCUDOS, getEscudoUrl } from "@/lib/escudos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const scrollToGallery = () => {
    document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Futurista */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern">
        {/* Elementos decorativos de luz */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-magenta-600/20 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container relative z-10 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight glow-cyan"
              data-aos="fade-up-subtle"
              style={{
                textShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5)",
              }}
            >
              Escudos Bordados
            </h1>
            <h2
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-400 mb-8"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              de Calidad Premium
            </h2>
            <p
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              Transforma cualquier prenda en una obra única. Nuestros escudos bordados termoadhesivos se aplican en 30 segundos con una plancha.
            </p>
            <button
              onClick={scrollToGallery}
              className="btn-neon text-lg md:text-xl"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              Explorar Colección
            </button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona - Futurista */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent relative geometric-pattern">
        <div className="container relative z-10">
          <h2
            className="text-5xl md:text-6xl font-black text-center text-white mb-16 glow-magenta"
            data-aos="fade-up-subtle"
          >
            Tres pasos simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div
              className="p-8 rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm hover:border-magenta-500 transition-all duration-300"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50">
                <span className="text-4xl font-black text-night-blue">1</span>
              </div>
              <h3 className="text-2xl font-black text-white text-center mb-3">
                Elige tu diseño
              </h3>
              <p className="text-white/70 text-center">
                Selecciona entre más de 85 diseños exclusivos
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="p-8 rounded-xl border-2 border-magenta-500/50 bg-gradient-to-br from-magenta-500/10 to-transparent backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-magenta-500 to-magenta-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-magenta-500/50">
                <span className="text-4xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-black text-white text-center mb-3">
                Posiciona en la prenda
              </h3>
              <p className="text-white/70 text-center">
                Coloca el escudo donde desees
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="p-8 rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm hover:border-magenta-500 transition-all duration-300"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50">
                <span className="text-4xl font-black text-night-blue">3</span>
              </div>
              <h3 className="text-2xl font-black text-white text-center mb-3">
                Plancha 30 segundos
              </h3>
              <p className="text-white/70 text-center">
                Aplica calor y listo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Escudos - Marcos Neón */}
      <section
        id="galeria"
        className="py-20 md:py-32 relative geometric-pattern"
      >
        <div className="container relative z-10">
          <div className="mb-16">
            <h2
              className="text-5xl md:text-6xl font-black text-white mb-4 glow-cyan"
              data-aos="fade-up-subtle"
            >
              Nuestra Colección
            </h2>
            <p
              className="text-xl text-white/70 max-w-2xl"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              Más de 85 diseños exclusivos, cada uno bordado con precisión y calidad premium.
            </p>
          </div>

          <div className="gallery-masonry">
            {ESCUDOS.map((escudo, index) => (
              <div
                key={escudo}
                className="escudo-card"
                data-aos="fade-up-subtle"
                data-aos-delay={Math.min(index * 30, 600)}
              >
                <img
                  src={getEscudoUrl(escudo)}
                  alt={`Escudo ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - Futurista */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent relative geometric-pattern">
        <div className="container relative z-10">
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-16 glow-magenta"
            data-aos="fade-up-subtle"
          >
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: "Durabilidad Premium",
                description: "Nuestros escudos resisten lavados intensos sin perder color ni forma",
                color: "cyan",
              },
              {
                title: "100% Lavables",
                description: "Perfectos para lavadora y secadora - mantienen su calidad intacta",
                color: "magenta",
              },
              {
                title: "Aplicación Instantánea",
                description: "Solo 30 segundos con la plancha - sin costuras ni complicaciones",
                color: "cyan",
              },
              {
                title: "Diseños Exclusivos",
                description: "Colecciones que no encontrarás en ningún otro lugar",
                color: "magenta",
              },
            ].map((benefit, index) => {
              const isCyan = benefit.color === "cyan";
              return (
                <div
                  key={benefit.title}
                  className={`p-8 rounded-xl border-2 ${
                    isCyan ? "border-cyan-500/50" : "border-magenta-500/50"
                  } bg-gradient-to-br ${
                    isCyan
                      ? "from-cyan-500/10 to-transparent"
                      : "from-magenta-500/10 to-transparent"
                  } backdrop-blur-sm hover:${
                    isCyan ? "border-magenta-500" : "border-cyan-500"
                  } transition-all duration-300`}
                  data-aos="fade-up-subtle"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`flex items-start gap-4 ${
                      isCyan ? "shadow-lg shadow-cyan-500/30" : "shadow-lg shadow-magenta-500/30"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-black text-2xl ${
                        isCyan
                          ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-night-blue"
                          : "bg-gradient-to-br from-magenta-500 to-magenta-600 text-white"
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Futurista */}
      <section className="py-20 md:py-32 relative overflow-hidden geometric-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-magenta-600/20 to-cyan-600/20"></div>
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up-subtle"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 glow-cyan">
              ¿Listo para transformar tu ropa?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Explora nuestra colección completa de escudos bordados premium
            </p>
            <button
              onClick={scrollToGallery}
              className="btn-neon text-lg md:text-xl"
            >
              Ver Colección Completa
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-night-blue/80 to-night-blue border-t-2 border-cyan-500/30 py-12 relative geometric-pattern">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-3 glow-cyan">
                ParchesPro
              </h3>
              <p className="text-white/70">
                Escudos bordados premium que transforman tu estilo
              </p>
            </div>

            <div>
              <h4 className="text-xl font-black text-white mb-4 glow-magenta">
                Contacto
              </h4>
              <ul className="space-y-2 text-white/70">
                <li>📧 info@parchespro.com</li>
                <li>📱 WhatsApp: +1 234 567 890</li>
                <li>📍 Ciudad, País</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black text-white mb-4 glow-cyan">
                Síguenos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-magenta-400 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 text-center text-white/60">
            <p>© 2025 ParchesPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
