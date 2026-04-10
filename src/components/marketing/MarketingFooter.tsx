"use client";

import InfoModal from "@/components/ui/InfoModal";
import { useState } from "react";

export default function MarketingFooter() {
  const [modalKey, setModalKey] = useState<string | null>(null);

  const modalMap = {
    sobre: {
      title: "Sobre SpainWay",
      subtitle: "Proyecto de turismo inteligente",
      content: (
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-[17px] leading-8 text-[#5E6282]">
              SpainWay es una plataforma de turismo inteligente orientada a
              descubrir destinos de España y generar itinerarios personalizados
              mediante inteligencia artificial, visualización en mapa e
              integración de datos abiertos.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-[#5E6282]">
              La propuesta busca unificar información turística dispersa y
              convertirla en una experiencia más clara, útil y adaptada a las
              necesidades reales del viajero.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#F8F9FF] p-6">
            <h4 className="text-[22px] font-semibold text-[#14183E]">
              Qué diferencia a SpainWay
            </h4>
            <ul className="mt-4 space-y-3 text-[16px] leading-7 text-[#5E6282]">
              <li>• Descubrimiento de destinos en España</li>
              <li>• Itinerarios visuales y personalizados</li>
              <li>• Enfoque apoyado en datos abiertos</li>
              <li>• Experiencia orientada al viajero</li>
            </ul>
          </div>
        </div>
      ),
    },
    objetivos: {
      title: "Objetivos del TFG",
      subtitle: "Enfoque del proyecto",
      content: (
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] bg-[#FFF1DA] p-6">
            <h4 className="text-[22px] font-semibold text-[#14183E]">
              Objetivo general
            </h4>
            <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
              Diseñar una plataforma capaz de ayudar al viajero a descubrir
              destinos y generar itinerarios inteligentes por España mediante IA
              conversacional y fuentes abiertas.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#FDEEF5] p-6">
            <h4 className="text-[22px] font-semibold text-[#14183E]">
              Valor principal
            </h4>
            <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
              Reducir el tiempo de planificación, mejorar la claridad del viaje
              y ofrecer una experiencia más contextualizada y personalizada.
            </p>
          </div>
        </div>
      ),
    },
    arquitectura: {
      title: "Arquitectura",
      subtitle: "Estructura funcional",
      content: (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Datos abiertos", "Normalización e integración de recursos turísticos."],
            ["Asistente IA", "Recogida de preferencias en lenguaje natural."],
            ["Motor de itinerarios", "Generación de rutas coherentes y viables."],
            ["Interfaz web", "Visualización clara de destinos, rutas y apoyo al usuario."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[22px] bg-[#F8F9FF] p-5">
              <h4 className="text-[20px] font-semibold text-[#14183E]">{title}</h4>
              <p className="mt-3 text-[15px] leading-7 text-[#5E6282]">{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    datos: {
      title: "Datos abiertos",
      subtitle: "Base informativa de la plataforma",
      content: (
        <div className="space-y-5 text-[16px] leading-8 text-[#5E6282]">
          <p>
            SpainWay se apoya en información procedente de fuentes públicas
            relacionadas con patrimonio, turismo, recursos naturales, movilidad
            y contexto territorial.
          </p>
          <div className="rounded-[22px] bg-[#F8F9FF] p-6">
            <p>
              El objetivo es construir una base más rica, fiable y reutilizable
              para alimentar recomendaciones, vistas de descubrimiento y
              propuestas de itinerario.
            </p>
          </div>
        </div>
      ),
    },
    fuentes: {
      title: "Fuentes turísticas",
      subtitle: "Información oficial y contextual",
      content: (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] bg-[#FFF1DA] p-6">
            <h4 className="text-[20px] font-semibold text-[#14183E]">
              Qué tipos de fuentes se contemplan
            </h4>
            <ul className="mt-4 space-y-2 text-[16px] leading-7 text-[#5E6282]">
              <li>• Portales turísticos oficiales</li>
              <li>• Catálogos de patrimonio</li>
              <li>• Recursos naturales y culturales</li>
              <li>• Información complementaria de contexto</li>
            </ul>
          </div>

          <div className="rounded-[22px] bg-[#FDEEF5] p-6">
            <h4 className="text-[20px] font-semibold text-[#14183E]">
              Para qué sirven
            </h4>
            <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
              Permiten enriquecer la exploración de destinos, construir una vista
              más completa del viaje y acercar la propuesta del TFG a una
              plataforma útil y creíble.
            </p>
          </div>
        </div>
      ),
    },
    casos: {
      title: "Casos de uso",
      subtitle: "Cómo se utilizaría SpainWay",
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Planificación de viaje personalizada",
            "Descubrimiento de destinos por intereses",
            "Visualización del itinerario en mapa",
            "Adaptación del plan según contexto",
          ].map((item) => (
            <div key={item} className="rounded-[20px] border border-[#EFEFEF] p-5">
              <p className="text-[17px] font-semibold text-[#14183E]">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
  } as const;

  const currentModal = modalKey ? modalMap[modalKey as keyof typeof modalMap] : null;

  return (
    <>
      <InfoModal
        isOpen={!!currentModal}
        title={currentModal?.title ?? ""}
        subtitle={currentModal?.subtitle}
        content={currentModal?.content ?? null}
        onClose={() => setModalKey(null)}
      />

      <footer className="bg-white pb-10 pt-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
            <div className="max-w-[320px]">
              <img src="/imagenes/LogoSpainway.png" alt="SpainWay" className="h-8 w-auto" />
              <p className="mt-6 text-[16px] leading-8 text-[#5E6282]">
                SpainWay es una plataforma de turismo inteligente orientada a
                descubrir destinos de España y generar itinerarios personalizados
                mediante inteligencia artificial y datos abiertos.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-[21px] font-bold text-[#080809]">
                Proyecto
              </h3>
              <ul className="space-y-4 text-[16px] text-[#5E6282]">
                <li><button onClick={() => setModalKey("sobre")} className="transition hover:text-[#DF6951]">Sobre SpainWay</button></li>
                <li><button onClick={() => setModalKey("objetivos")} className="transition hover:text-[#DF6951]">Objetivos del TFG</button></li>
                <li><button onClick={() => setModalKey("arquitectura")} className="transition hover:text-[#DF6951]">Arquitectura</button></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[21px] font-bold text-[#080809]">
                Plataforma
              </h3>
              <ul className="space-y-4 text-[16px] text-[#5E6282]">
                <li><a href="/#destinos" className="transition hover:text-[#DF6951]">Destinos</a></li>
                <li><a href="/#itinerarios" className="transition hover:text-[#DF6951]">Itinerarios</a></li>
                <li><a href="/#mapa" className="transition hover:text-[#DF6951]">Mapa interactivo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[21px] font-bold text-[#080809]">
                Recursos
              </h3>
              <ul className="space-y-4 text-[16px] text-[#5E6282]">
                <li><button onClick={() => setModalKey("datos")} className="transition hover:text-[#DF6951]">Datos abiertos</button></li>
                <li><button onClick={() => setModalKey("fuentes")} className="transition hover:text-[#DF6951]">Fuentes turísticas</button></li>
                <li><button onClick={() => setModalKey("casos")} className="transition hover:text-[#DF6951]">Casos de uso</button></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-[#E5E5EA] pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-5">
                <p className="text-[16px] text-[#5E6282]">
                  Descarga la aplicación
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[18px] bg-[#080809] px-6 py-3 text-white transition hover:bg-[#1d1d1d]"
                  >
                    <span className="flex items-center gap-2 text-white">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      <span className="text-white">App Store</span>
                    </span>
                  </a>

                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[18px] bg-[#080809] px-6 py-3 text-white transition hover:bg-[#1d1d1d]"
                  >
                    <span className="flex items-center gap-2 text-white">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span className="text-white">Google Play</span>
                    </span>
                  </a>
                </div>
              </div>

              <p className="text-[15px] text-[#5E6282]">
                © 2026 SpainWay. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}