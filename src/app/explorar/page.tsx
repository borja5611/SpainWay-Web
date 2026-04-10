"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import InfoModal from "@/components/ui/InfoModal";

const destinos = [
  {
    nombre: "Andalucía",
    slug: "andalucia",
    tipo: "Ruta cultural y paisajística",
    descripcion:
      "Patrimonio histórico, pueblos con identidad, costa y una gran riqueza cultural.",
    detalle:
      "Andalucía representa una mezcla muy potente de patrimonio monumental, rutas urbanas, naturaleza y experiencias culturales. Es ideal para construir itinerarios variados y de gran impacto visual.",
  },
  {
    nombre: "Asturias",
    slug: "asturias",
    tipo: "Naturaleza y tradición",
    descripcion:
      "Montaña, costa y recursos naturales perfectos para una escapada más escénica.",
    detalle:
      "Asturias funciona muy bien para una inspiración orientada a paisaje, cultura local y recorridos más tranquilos, donde el entorno natural es un protagonista principal.",
  },
  {
    nombre: "Baleares",
    slug: "baleares",
    tipo: "Experiencia insular",
    descripcion:
      "Mar, calas, patrimonio y una propuesta ideal para rutas mediterráneas.",
    detalle:
      "Baleares aporta una experiencia turística ligada al entorno insular, con una mezcla interesante entre costa, identidad local y espacios visualmente muy atractivos.",
  },
  {
    nombre: "Barcelona",
    slug: "barcelona",
    tipo: "Escapada urbana",
    descripcion:
      "Arquitectura, costa y una combinación muy fuerte entre ciudad y experiencia local.",
    detalle:
      "Barcelona es un destino ideal para enseñar itinerarios urbanos, patrimonio arquitectónico y recorridos que combinan cultura, movilidad y atractivo visual.",
  },
  {
    nombre: "Canarias",
    slug: "canarias",
    tipo: "Destino atlántico",
    descripcion:
      "Paisajes volcánicos, costa y una identidad muy marcada para experiencias diferenciadas.",
    detalle:
      "Canarias encaja muy bien en una propuesta que quiera mostrar variedad geográfica, riqueza paisajística y posibilidades de rutas más experienciales.",
  },
  {
    nombre: "Cantabria",
    slug: "cantabria",
    tipo: "Costa y patrimonio natural",
    descripcion:
      "Un destino muy apropiado para combinar mar, paisaje y recursos culturales.",
    detalle:
      "Cantabria destaca por su equilibrio entre costa, territorio y patrimonio, siendo una muy buena opción para mostrar itinerarios de descubrimiento tranquilos y visuales.",
  },
  {
    nombre: "Madrid",
    slug: "madrid",
    tipo: "Ruta cultural",
    descripcion:
      "Museos, plazas, patrimonio urbano y una experiencia ideal para escapadas culturales.",
    detalle:
      "Madrid es perfecta para mostrar una ruta cultural intensa, con recursos bien conectados, peso patrimonial y una gran capacidad para estructurar itinerarios por jornadas.",
  },
  {
    nombre: "Valencia",
    slug: "valencia",
    tipo: "Experiencia mediterránea",
    descripcion:
      "Ciudad, mar y espacios modernos para una ruta equilibrada y visualmente atractiva.",
    detalle:
      "Valencia combina entorno mediterráneo, modernidad, patrimonio y una experiencia urbana muy útil para demostrar el valor de un itinerario equilibrado.",
  },
];

export default function ExplorarPage() {
  const router = useRouter();
  const [modalDestino, setModalDestino] = useState<(typeof destinos)[number] | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <MarketingHeader />
      <InfoModal
        isOpen={!!modalDestino}
        title={modalDestino?.nombre ?? ""}
        subtitle={modalDestino?.tipo}
        content={
          modalDestino ? (
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={`/imagenes/destinos/${modalDestino.slug}.png`}
                  alt={modalDestino.nombre}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-[17px] leading-8 text-[#5E6282]">
                  {modalDestino.detalle}
                </p>

                <div className="mt-6 rounded-[22px] bg-[#F8F9FF] p-6">
                  <h4 className="text-[22px] font-semibold text-[#14183E]">
                    Qué transmite este destino
                  </h4>
                  <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
                    Esta vista sirve como ejemplo de cómo SpainWay podría
                    presentar inspiración turística más rica, visual y orientada
                    a la creación de itinerarios personalizados.
                  </p>
                </div>
              </div>
            </div>
          ) : null
        }
        onClose={() => setModalDestino(null)}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => router.push("/")}
            className="rounded-[14px] border border-[#DADADA] bg-white px-5 py-3 text-[#5E6282] transition hover:border-[#DF6951] hover:text-[#DF6951]"
          >
            ← Volver a la landing
          </button>

          <div className="rounded-full bg-[#DF6951] px-5 py-2 text-sm font-semibold text-white">
            SpainWay · Exploración
          </div>
        </div>

        <div className="mt-10 max-w-[860px]">
          <p className="text-[16px] font-semibold uppercase text-[#DF6951]">
            Exploración de destinos
          </p>
          <h1
            className="mt-4 text-[48px] font-bold leading-tight text-[#14183E] md:text-[62px]"
            style={{ fontFamily: "Volkhov, serif" }}
          >
            Descubre Ciudades Y Experiencias Para Tu Próxima Ruta
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-[#5E6282]">
            SpainWay presenta destinos con valor cultural, urbano, natural y
            turístico para inspirar itinerarios personalizados por toda España.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinos.map((destino) => (
            <div
              key={destino.slug}
              className="overflow-hidden rounded-[26px] bg-white shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={`/imagenes/destinos/${destino.slug}.png`}
                  alt={destino.nombre}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[26px] font-semibold text-[#14183E]">
                    {destino.nombre}
                  </h2>
                  <span className="rounded-full bg-[#FFF1DA] px-3 py-1 text-sm font-semibold text-[#DF6951]">
                    {destino.tipo}
                  </span>
                </div>

                <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
                  {destino.descripcion}
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => setModalDestino(destino)}
                    className="rounded-[12px] bg-[#DF6951] px-5 py-3 text-white transition hover:bg-[#c95b45]"
                  >
                    Ver inspiración
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
          <h3
            className="text-[32px] font-bold text-[#14183E]"
            style={{ fontFamily: "Volkhov, serif" }}
          >
            Qué transmite esta vista
          </h3>
          <p className="mt-4 max-w-[900px] text-[17px] leading-8 text-[#5E6282]">
            Esta pantalla funciona como una puerta de entrada al catálogo
            turístico de SpainWay. Refuerza visualmente la idea de descubrimiento
            de destinos y permite imaginar cómo se integrarán después filtros,
            recomendaciones y acceso directo a itinerarios.
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}