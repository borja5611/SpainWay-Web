"use client";

import { useRouter } from "next/navigation";
import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export default function AsistentePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <MarketingHeader />

      <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => router.push("/")}
            className="rounded-[14px] border border-[#DADADA] bg-white px-5 py-3 text-[#5E6282] transition hover:border-[#DF6951] hover:text-[#DF6951]"
          >
            ← Volver a la landing
          </button>

          <div className="rounded-full bg-[#DF6951] px-5 py-2 text-sm font-semibold text-white">
            SpainWay · Asistente
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[16px] font-semibold uppercase text-[#DF6951]">
              Asistente SpainWay
            </p>

            <h1
              className="mt-4 text-[46px] font-bold leading-tight text-[#14183E] md:text-[60px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              Una Experiencia Conversacional Para Planificar El Viaje
            </h1>

            <p className="mt-6 text-[18px] leading-8 text-[#5E6282]">
              Esta vista muestra cómo se presentaría el asistente inteligente de
              SpainWay: una interfaz visual para recoger preferencias, entender
              restricciones y proponer itinerarios adaptados al viajero.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#5E6282] shadow-sm">
                Cultura
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#5E6282] shadow-sm">
                Naturaleza
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#5E6282] shadow-sm">
                3 días
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#5E6282] shadow-sm">
                Sin coche
              </span>
            </div>

            <div className="mt-10 rounded-[28px] bg-white p-7 shadow-[0_20px_45px_rgba(0,0,0,0.06)]">
              <h3 className="text-[24px] font-semibold text-[#14183E]">
                Qué comunica esta demo
              </h3>
              <ul className="mt-5 space-y-3 text-[16px] leading-8 text-[#5E6282]">
                <li>• Recogida de preferencias en lenguaje natural</li>
                <li>• Propuesta de itinerario coherente y legible</li>
                <li>• Sugerencias alineadas con el contexto del usuario</li>
                <li>• Presentación visual atractiva para el TFG</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-[0_25px_55px_rgba(0,0,0,0.08)] md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F1F1F1] pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#5E6282]">
                  Demo visual
                </p>
                <h2 className="mt-1 text-[28px] font-bold text-[#14183E]">
                  Asistente IA
                </h2>
              </div>

              <div className="rounded-full bg-[#DF6951] px-4 py-2 text-sm font-semibold text-white">
                SpainWay
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="max-w-[82%] rounded-[22px] rounded-bl-sm bg-[#F5F5F5] px-5 py-4 text-[#5E6282]">
                Quiero una escapada de 3 días por España con enfoque cultural y
                sin necesidad de coche.
              </div>

              <div className="ml-auto max-w-[82%] rounded-[22px] rounded-br-sm bg-[#181E4B] px-5 py-4 text-white">
                Perfecto. Te propongo una experiencia urbana con recursos
                culturales, desplazamientos razonables y una organización clara
                por jornadas.
              </div>

              <div className="rounded-[24px] border border-[#F0F0F0] bg-[#FAFAFA] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#DF6951]">
                  Itinerario sugerido
                </p>

                <div className="mt-4 space-y-4">
                  <div className="rounded-[18px] bg-white p-4 shadow-sm">
                    <p className="text-[17px] font-semibold text-[#14183E]">
                      Día 1 · Madrid
                    </p>
                    <p className="mt-2 text-[15px] leading-7 text-[#5E6282]">
                      Centro histórico, museos y plazas emblemáticas con una ruta
                      compacta y fácil de seguir.
                    </p>
                  </div>

                  <div className="rounded-[18px] bg-white p-4 shadow-sm">
                    <p className="text-[17px] font-semibold text-[#14183E]">
                      Día 2 · Recursos culturales prioritarios
                    </p>
                    <p className="mt-2 text-[15px] leading-7 text-[#5E6282]">
                      Ajuste del recorrido en función del tiempo disponible y del
                      interés del viajero.
                    </p>
                  </div>

                  <div className="rounded-[18px] bg-white p-4 shadow-sm">
                    <p className="text-[17px] font-semibold text-[#14183E]">
                      Día 3 · Cierre de ruta
                    </p>
                    <p className="mt-2 text-[15px] leading-7 text-[#5E6282]">
                      Últimas visitas y visualización general del plan para una
                      despedida ordenada del destino.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] bg-[#FFF1DA] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#DF6951]">
                  Valor de producto
                </p>
                <p className="mt-2 text-[16px] leading-7 text-[#5E6282]">
                  Esta vista hace visible cómo SpainWay puede transformar una
                  conversación en una propuesta concreta, organizada y fácil de
                  entender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}