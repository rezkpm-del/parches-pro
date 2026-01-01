/**
 * ParchesPro Landing Page - Rediseño Minimalista Contemporáneo
 * Design Philosophy: Minimalismo elegante con énfasis en imágenes de productos
 * - Paleta: Crema suave, carbón oscuro, azul marino profundo, magenta vibrante
 * - Tipografía: Sans-serif moderna y audaz
 * - Espacios en blanco generosos
 * - Galería masonry con 85+ escudos como protagonistas
 * - Hover effects sofisticados y elegantes
 * - Animaciones de scroll escalonadas
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
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimalista */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-[#f5f5f0] overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
              data-aos="fade-up-subtle"
            >
              Escudos Bordados de Calidad Premium
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              Transforma cualquier prenda en una obra única. Nuestros escudos bordados termoadhesivos se aplican en 30 segundos con una plancha.
            </p>
            <Button
              onClick={scrollToGallery}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              Explorar Colección
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona - Simplificado */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
            data-aos="fade-up-subtle"
          >
            Tres pasos simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div
              className="text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Elige tu diseño
              </h3>
              <p className="text-foreground/60">
                Selecciona entre más de 85 diseños exclusivos
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Posiciona en la prenda
              </h3>
              <p className="text-foreground/60">
                Coloca el escudo donde desees
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="text-center"
              data-aos="fade-up-subtle"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Plancha 30 segundos
              </h3>
              <p className="text-foreground/60">
                Aplica calor y listo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Escudos - Masonry */}
      <section
        id="galeria"
        className="py-20 md:py-32 bg-background"
      >
        <div className="container">
          <div className="mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              data-aos="fade-up-subtle"
            >
              Nuestra Colección
            </h2>
            <p
              className="text-lg text-foreground/60 max-w-2xl"
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

      {/* Beneficios - Minimalista */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-16"
            data-aos="fade-up-subtle"
          >
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {[
              {
                title: "Durabilidad Premium",
                description: "Nuestros escudos resisten lavados intensos sin perder color ni forma",
                icon: "✓",
              },
              {
                title: "100% Lavables",
                description: "Perfectos para lavadora y secadora - mantienen su calidad intacta",
                icon: "✓",
              },
              {
                title: "Aplicación Instantánea",
                description: "Solo 30 segundos con la plancha - sin costuras ni complicaciones",
                icon: "✓",
              },
              {
                title: "Diseños Exclusivos",
                description: "Colecciones que no encontrarás en ningún otro lugar",
                icon: "✓",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6"
                data-aos="fade-up-subtle"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/60">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container">
          <div
            className="max-w-2xl mx-auto text-center text-white"
            data-aos="fade-up-subtle"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu ropa?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Explora nuestra colección completa de escudos bordados premium
            </p>
            <Button
              onClick={scrollToGallery}
              className="bg-white text-secondary hover:bg-white/90 rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Ver Colección Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">ParchesPro</h3>
              <p className="text-white/70">
                Escudos bordados premium que transforman tu estilo
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/70">
                <li>📧 info@parchespro.com</li>
                <li>📱 WhatsApp: +1 234 567 890</li>
                <li>📍 Ciudad, País</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Síguenos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2025 ParchesPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
