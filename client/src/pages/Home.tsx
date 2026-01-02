/**
 * ParchesPro Landing Page - Pop Art Digital Brillante
 * Design Philosophy: Explosión de color contemporánea, vibrante y alegre
 * - Gradiente fluido multicolor (fucsia, naranja, turquesa, amarillo, magenta)
 * - Títulos con degradados multicolor y contornos brillantes
 * - Botones con degradados intensos y efectos de brillo líquido
 * - Marcos de galería con colores vibrantes y cambiantes
 * - Diseño rico en color, vivo y visualmente explosivo
 * - Nueva sección DTF para personalización de prendas
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

  const DTF_IMAGES = [
    "WhatsApp_Image_2026-01-02_at_11.25.06-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.09__1_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.09__2_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.10__1_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.10__2_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.10__3_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.11-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.34-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.34__2_-removebg-preview.png",
    "WhatsApp_Image_2026-01-02_at_11.25.35-removebg-preview.png",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Pop Art */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elementos decorativos de luz */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container relative z-10 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight title-pop-gradient"
              data-aos="fade-up-subtle"
            >
              Escudos Sublimados
            </h1>
            <h2
              className="text-5xl md:text-7xl font-black mb-8 title-pop-gradient"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              de Calidad Premium
            </h2>
            <p
              className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed font-bold"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              Diseños exclusivos y armamos el diseño que nos pidas.
            </p>
            <button
              onClick={scrollToGallery}
              className="btn-pop-art text-lg md:text-xl"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              Explorar Colección
            </button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona - Pop Art */}
      <section className="py-20 md:py-32 bg-white/90 backdrop-blur-sm">
        <div className="container">
          <h2
            className="text-5xl md:text-6xl font-black text-center text-black mb-16 title-pop-gradient"
            data-aos="fade-up-subtle"
          >
            Tres pasos simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div
              className="p-8 rounded-xl border-4 border-black bg-gradient-to-br from-yellow-300/30 to-orange-300/30 hover:from-pink-300/40 hover:to-purple-300/40 transition-all duration-300 shadow-lg"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-black text-black text-center mb-3">
                Elige tu diseño
              </h3>
              <p className="text-black/70 text-center font-bold">
                Selecciona entre más de 82 diseños exclusivos
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="p-8 rounded-xl border-4 border-black bg-gradient-to-br from-cyan-300/30 to-blue-300/30 hover:from-magenta-300/40 hover:to-pink-300/40 transition-all duration-300 shadow-lg"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-black text-black text-center mb-3">
                Posiciona en la prenda
              </h3>
              <p className="text-black/70 text-center font-bold">
                Coloca el escudo donde desees
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="p-8 rounded-xl border-4 border-black bg-gradient-to-br from-lime-300/30 to-green-300/30 hover:from-yellow-300/40 hover:to-orange-300/40 transition-all duration-300 shadow-lg"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-black text-black text-center mb-3">
                Plancha 30 segundos
              </h3>
              <p className="text-black/70 text-center font-bold">
                Aplica calor y listo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Escudos - Marcos Vibrantes */}
      <section
        id="galeria"
        className="py-20 md:py-32 bg-white/80 backdrop-blur-sm"
      >
        <div className="container">
          <div className="mb-16">
            <h2
              className="text-5xl md:text-6xl font-black text-black mb-4 title-pop-gradient"
              data-aos="fade-up-subtle"
            >
              Nuestra Colección
            </h2>
            <p
              className="text-xl text-black/70 max-w-2xl font-bold"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              Más de 82 diseños exclusivos, cada uno bordado con precisión y calidad premium.
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

      {/* Sección DTF - Personalización */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-300/40 via-pink-300/40 to-orange-300/40 backdrop-blur-sm border-t-4 border-b-4 border-black">
        <div className="container">
          <div className="mb-16">
            <h2
              className="text-5xl md:text-6xl font-black text-black mb-4 title-pop-gradient"
              data-aos="fade-up-subtle"
            >
              Personaliza tus remeras como quieras con DTF
            </h2>
            <p
              className="text-xl text-black/80 max-w-3xl font-bold leading-relaxed"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              Hacemos DTF, un método versátil para personalizar prendas sin necesidad de sublimar directamente la tela. Funciona sobre algodón, poliéster, mezclas, telas claras u oscuras. El diseño queda flexible y resistente al lavado.
            </p>
          </div>

          {/* Pasos DTF */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div
              className="p-8 rounded-xl border-4 border-black bg-white/90 hover:bg-white transition-all duration-300 shadow-lg text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Tu Diseño</h3>
              <p className="text-black/70 font-bold">Nos pasas tu diseño o lo diseñamos nosotros</p>
            </div>

            <div
              className="p-8 rounded-xl border-4 border-black bg-white/90 hover:bg-white transition-all duration-300 shadow-lg text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Imprimimos</h3>
              <p className="text-black/70 font-bold">Lo imprimimos y te lo entregamos listo</p>
            </div>

            <div
              className="p-8 rounded-xl border-4 border-black bg-white/90 hover:bg-white transition-all duration-300 shadow-lg text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="400"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-black">
                <span className="text-4xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Plancha</h3>
              <p className="text-black/70 font-bold">Tú solo lo planchas en la tela donde quieras</p>
            </div>
          </div>

          {/* Galería DTF */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {DTF_IMAGES.map((img, index) => (
              <div
                key={img}
                className="relative overflow-hidden rounded-lg border-4 border-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white p-2"
                data-aos="fade-up-subtle"
                data-aos-delay={500 + index * 50}
              >
                <img
                  src={`/images/dtf/${img}`}
                  alt={`DTF ${index + 1}`}
                  className="w-full h-full object-contain"
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

      {/* Beneficios - Pop Art */}
      <section className="py-20 md:py-32 bg-white/90 backdrop-blur-sm">
        <div className="container">
          <h2
            className="text-5xl md:text-6xl font-black text-black mb-16 title-pop-gradient"
            data-aos="fade-up-subtle"
          >
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: "Durabilidad Premium",
                description: "Nuestros escudos resisten lavados intensos sin perder color ni forma",
                gradient: "from-orange-300 to-pink-300",
              },
              {
                title: "100% Lavables",
                description: "Perfectos para lavadora y secadora - mantienen su calidad intacta",
                gradient: "from-cyan-300 to-blue-300",
              },
              {
                title: "Aplicación Instantánea",
                description: "Solo 30 segundos con la plancha - sin costuras ni complicaciones",
                gradient: "from-lime-300 to-green-300",
              },
              {
                title: "Diseños Exclusivos",
                description: "Colecciones que no encontrarás en ningún otro lugar",
                gradient: "from-yellow-300 to-orange-300",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`p-8 rounded-xl border-4 border-black bg-gradient-to-br ${benefit.gradient}/40 hover:${benefit.gradient}/60 transition-all duration-300 shadow-lg`}
                data-aos="fade-up-subtle"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 font-black text-2xl text-white border-3 border-black shadow-lg`}>
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-black/70 font-bold">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Pop Art */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center p-12 rounded-2xl border-4 border-black bg-white/95 shadow-2xl"
            data-aos="fade-up-subtle"
          >
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 title-pop-gradient">
              ¿Listo para transformar tu ropa?
            </h2>
            <p className="text-xl text-black/80 mb-10 font-bold">
              Explora nuestra colección completa de escudos bordados premium
            </p>
            <button
              onClick={scrollToGallery}
              className="btn-pop-art text-lg md:text-xl"
            >
              Ver Colección Completa
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-12 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-8 max-w-3xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-black mb-3 title-pop-gradient">
                ParchesPro
              </h3>
              <p className="text-black/70 font-bold">
                Escudos bordados premium que transforman tu estilo
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-black text-black mb-4 title-pop-gradient">
                Contacto
              </h4>
              <ul className="space-y-2 text-black/70 font-bold">
                <li>📧 barbara_mar.s@hotmail.com</li>
                <li>📱 WhatsApp: +54 1133682905</li>
                <li>📍 Buenos Aires</li>
              </ul>
            </div>
          </div>

          <div className="border-t-4 border-black pt-8 text-center text-black/60 font-bold">
            <p>© 2025 ParchesPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
