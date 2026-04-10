"use client";

import { useState } from "react";

const slides = [
  {
    step: "01",
    title: "Descubre destinos únicos en España",
    description:
      "SpainWay te ayuda a explorar ciudades, patrimonio, naturaleza y recursos turísticos relevantes desde una única plataforma visual.",
    featureA: "Descubrimiento guiado",
    featureAText: "Inspiración y sugerencias por destino.",
    featureB: "Experiencia visual",
    featureBText: "Información clara para demostrar el valor del producto.",
    goal:
      "Convertir la planificación del viaje en una experiencia más inteligente, unificada y visual.",
  },
  {
    step: "02",
    title: "Planifica itinerarios personalizados",
    description:
      "La plataforma organiza propuestas coherentes según intereses, duración del viaje, restricciones y tipo de experiencia buscada.",
    featureA: "Orden y lógica",
    featureAText: "Rutas pensadas para ser comprensibles y realistas.",
    featureB: "Ajuste al contexto",
    featureBText: "El viaje se adapta mejor al perfil del usuario.",
    goal:
      "Demostrar cómo la IA puede transformar preferencias en un plan claro y útil.",
  },
  {
    step: "03",
    title: "Visualiza rutas y recursos relevantes",
    description:
      "SpainWay convierte la información dispersa en una experiencia visual unificada para entender mejor el destino y el itinerario.",
    featureA: "Mapa y estructura",
    featureAText: "Comprensión rápida del recorrido y del valor del destino.",
    featureB: "Apoyo al viajero",
    featureBText: "Más claridad en cada decisión durante la planificación.",
    goal:
      "Hacer que descubrir, entender y organizar un viaje por España sea mucho más sencillo.",
  },
];

export default function DemoSlides({
  onClose,
}: {
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-[980px] overflow-hidden rounded-[30px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.22)]">
        <div className="bg-gradient-to-r from-[#181E4B] to-[#2E3B83] px-6 py-5 text-white md:px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70 md:text-sm">
                Demo interactiva
              </p>
              <h2
                className="mt-2 text-[26px] font-bold leading-tight md:text-[42px]"
                style={{ fontFamily: "Volkhov, serif" }}
              >
                Así se presenta SpainWay
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="max-h-[calc(92vh-96px)] overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#F8F9FF] px-6 py-8 md:px-8 md:py-10">
              <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DF6951] md:text-sm">
                  Slide {slide.step}
                </p>

                <h3
                  className="mt-4 text-[30px] font-bold leading-tight text-[#181E4B] md:text-[44px]"
                  style={{ fontFamily: "Volkhov, serif" }}
                >
                  {slide.title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-[#5E6282] md:text-[17px]">
                  {slide.description}
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[18px] bg-[#FFF1DA] px-5 py-4 text-[#1E1D4C]">
                    <p className="text-sm font-semibold">{slide.featureA}</p>
                    <p className="mt-1 text-sm text-[#5E6282]">
                      {slide.featureAText}
                    </p>
                  </div>

                  <div className="rounded-[18px] bg-[#FDEEF5] px-5 py-4 text-[#1E1D4C]">
                    <p className="text-sm font-semibold">{slide.featureB}</p>
                    <p className="mt-1 text-sm text-[#5E6282]">
                      {slide.featureBText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 md:px-8 md:py-10">
              <div className="rounded-[28px] border border-[#ECECEC] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.06)] md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#5E6282] md:text-sm">
                      Vista de producto
                    </p>
                    <h4 className="mt-1 text-[22px] font-bold text-[#14183E] md:text-[24px]">
                      SpainWay Experience
                    </h4>
                  </div>

                  <div className="rounded-full bg-[#DF6951] px-4 py-2 text-sm font-semibold text-white">
                    Preview
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <div className="rounded-[18px] bg-[#F8F8F8] p-4">
                    <p className="text-sm font-semibold text-[#14183E]">
                      Preferencias del viajero
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-sm text-[#5E6282] shadow-sm">
                        Cultura
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-sm text-[#5E6282] shadow-sm">
                        Escapada urbana
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-sm text-[#5E6282] shadow-sm">
                        3 días
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[18px] bg-[#F8F8F8] p-4">
                    <p className="text-sm font-semibold text-[#14183E]">
                      Resultado esperado
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[#5E6282]">
                      <li>• Itinerario por jornadas</li>
                      <li>• Recursos ordenados y coherentes</li>
                      <li>• Visualización clara del recorrido</li>
                    </ul>
                  </div>

                  <div className="rounded-[18px] bg-gradient-to-r from-[#FF946D] to-[#FF6E4E] p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.15em] text-white/80">
                      Objetivo
                    </p>
                    <p className="mt-2 text-[16px] leading-7">{slide.goal}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={index === 0}
                    className="rounded-[12px] border border-[#DADADA] px-5 py-3 text-[#5E6282] transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-[#DF6951] hover:text-[#DF6951]"
                  >
                    Anterior
                  </button>

                  <div className="flex justify-center gap-2">
                    {slides.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`h-3.5 w-3.5 rounded-full ${
                          dotIndex === index ? "bg-[#DF6951]" : "bg-[#E5E5E5]"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      index === slides.length - 1
                        ? onClose()
                        : setIndex((prev) => prev + 1)
                    }
                    className="rounded-[12px] bg-[#DF6951] px-5 py-3 text-white transition hover:bg-[#c95b45]"
                  >
                    {index === slides.length - 1 ? "Cerrar demo" : "Siguiente"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}