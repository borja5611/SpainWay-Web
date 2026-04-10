"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DemoSlides from "@/components/ui/DemoSlides";
import InfoModal from "@/components/ui/InfoModal";

const imgTraveller = "/imagenes/Viajera.png";
const imgHeroShape = "/imagenes/RectanguloViajero.png";
const imgLogoSpainWay = "/imagenes/LogoSpainway.png";
const imgMadrid = "/imagenes/destinos/Madrid.png";
const imgBarcelona = "/imagenes/destinos/Barcelona.png";
const imgValencia = "/imagenes/destinos/Valencia.png";
const imgPlanning = "/imagenes/Playa.png";
const imgLogoMini = "/imagenes/LogoSpainway.png";
const imgAvatar1 = "/imagenes/PersonaRiendo.png";
const imgAvatar2 = "/imagenes/PersonaRiendo.png";
const imgAvatar3 = "/imagenes/PersonaRiendo.png";

const testimonios = [
  {
    nombre: "Mike Taylor",
    ciudad: "Málaga, España",
    texto:
      "SpainWay me permitió descubrir lugares que no habría encontrado fácilmente y organizar una ruta mucho más clara por España.",
    imagen: imgAvatar1,
  },
  {
    nombre: "Lucía Romero",
    ciudad: "Sevilla, España",
    texto:
      "La propuesta de itinerario fue muy útil porque no solo recomendaba sitios, sino que ordenaba el viaje de una forma realista y cómoda.",
    imagen: imgAvatar2,
  },
  {
    nombre: "Carlos Nieto",
    ciudad: "Valencia, España",
    texto:
      "Lo que más me gustó fue poder entender el viaje visualmente, consultar el mapa y adaptar el plan según el tiempo disponible.",
    imagen: imgAvatar3,
  },
  {
    nombre: "Andrea Gil",
    ciudad: "Granada, España",
    texto:
      "La combinación entre diseño, mapa y recomendaciones hace que la experiencia sea muy intuitiva y útil para descubrir destinos.",
    imagen: imgAvatar1,
  },
  {
    nombre: "Javier Ruiz",
    ciudad: "Bilbao, España",
    texto:
      "Me parece una propuesta muy potente para planificar rutas temáticas en España sin depender de decenas de webs distintas.",
    imagen: imgAvatar2,
  },
  {
    nombre: "Elena Castro",
    ciudad: "A Coruña, España",
    texto:
      "La idea del asistente conversacional me gustó mucho porque permite adaptar el itinerario a preferencias reales del viajero.",
    imagen: imgAvatar3,
  },
];

function TestimonioCard({
  nombre,
  ciudad,
  texto,
  imagen,
}: {
  nombre: string;
  ciudad: string;
  texto: string;
  imagen: string;
}) {
  return (
    <div className="rounded-[22px] bg-white p-7 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
      <div className="mb-5 flex items-center gap-4">
        <img
          src={imagen}
          alt={nombre}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-[20px] font-semibold text-[#5E6282]">{nombre}</h4>
          <p className="text-[15px] text-[#84829A]">{ciudad}</p>
        </div>
      </div>

      <p className="min-h-[140px] text-[17px] leading-8 text-[#5E6282]">
        “{texto}”
      </p>

      <div className="mt-5 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-[#FFB800]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  onClick,
  active = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[30px] bg-white px-8 py-10 text-center transition hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] ${
        active ? "ring-2 ring-[#DF6951]" : ""
      }`}
    >
      <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[20px] bg-[#FFF1DA]">
        {icon}
      </div>
      <h3 className="mb-4 text-[22px] font-semibold text-[#1E1D4C]">{title}</h3>
      <p className="text-[16px] leading-7 text-[#5E6282]">{description}</p>
      <p className="mt-5 text-sm font-semibold text-[#DF6951]">
        Pulsar para saber más
      </p>
    </button>
  );
}

export default function SpainWayLanding() {
  const router = useRouter();
  const [showDemo, setShowDemo] = useState(false);
  const [modalKey, setModalKey] = useState<string | null>(null);
  const [featureKey, setFeatureKey] = useState<string | null>(null);
  const [grupoActivo, setGrupoActivo] = useState(0);

  const totalGroups = Math.ceil(testimonios.length / 2);
  const testimoniosVisibles = testimonios.slice(grupoActivo * 2, grupoActivo * 2 + 2);

  const nextTestimonials = () => {
    setGrupoActivo((prev) => (prev + 1) % totalGroups);
  };

  const prevTestimonials = () => {
    setGrupoActivo((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

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

  const featureModalMap = {
    asistente: {
      title: "Asistente conversacional",
      subtitle: "Cómo ayuda al viajero",
      content: (
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[17px] leading-8 text-[#5E6282]">
              El asistente conversacional permite recoger preferencias de forma
              natural: destino, duración, intereses, restricciones o estilo de
              viaje.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-[#5E6282]">
              En lugar de obligar al usuario a rellenar formularios complejos,
              SpainWay transforma la interacción en una experiencia más cercana,
              guiada y comprensible.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#F8F9FF] p-6">
            <h4 className="text-[22px] font-semibold text-[#14183E]">
              Qué aporta
            </h4>
            <ul className="mt-4 space-y-3 text-[16px] leading-7 text-[#5E6282]">
              <li>• Recoge preferencias del usuario</li>
              <li>• Mejora la experiencia de entrada</li>
              <li>• Facilita una interacción más natural</li>
              <li>• Refuerza la propuesta de valor del TFG</li>
            </ul>
          </div>
        </div>
      ),
    },
    itinerarios: {
      title: "Itinerarios inteligentes",
      subtitle: "Planificación personalizada",
      content: (
        <div className="space-y-5 text-[17px] leading-8 text-[#5E6282]">
          <p>
            SpainWay no se limita a sugerir sitios, sino que organiza un plan por
            jornadas con una lógica más clara para el usuario.
          </p>
          <div className="rounded-[24px] bg-[#FFF1DA] p-6">
            <p>
              La idea es construir propuestas visuales y coherentes teniendo en
              cuenta intereses, duración del viaje y utilidad real del recorrido.
            </p>
          </div>
        </div>
      ),
    },
    mapa: {
      title: "Mapa interactivo",
      subtitle: "Visualización del viaje",
      content: (
        <div className="space-y-5 text-[17px] leading-8 text-[#5E6282]">
          <p>
            El mapa ayuda a entender el itinerario, situar los recursos y hacer
            más clara la lectura del viaje.
          </p>
          <div className="rounded-[24px] bg-[#FDEEF5] p-6">
            <p>
              Su papel es convertir la planificación en una experiencia visual y
              comprensible, reforzando el valor práctico de la plataforma.
            </p>
          </div>
        </div>
      ),
    },
    datos: {
      title: "Datos abiertos oficiales",
      subtitle: "Fundamento informativo",
      content: (
        <div className="space-y-5 text-[17px] leading-8 text-[#5E6282]">
          <p>
            Esta funcionalidad explica que SpainWay se apoya en fuentes públicas
            para enriquecer el catálogo de recursos turísticos.
          </p>
          <div className="rounded-[24px] bg-[#F8F9FF] p-6">
            <p>
              Esto da sentido académico y técnico al proyecto, diferenciándolo de
              una simple web promocional y conectándolo con la propuesta real del
              TFG.
            </p>
          </div>
        </div>
      ),
    },
  } as const;

  const currentModal = modalKey ? modalMap[modalKey as keyof typeof modalMap] : null;
  const currentFeatureModal = featureKey
    ? featureModalMap[featureKey as keyof typeof featureModalMap]
    : null;

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#181E4B]">
      {showDemo ? <DemoSlides onClose={() => setShowDemo(false)} /> : null}

      <InfoModal
        isOpen={!!currentModal}
        title={currentModal?.title ?? ""}
        subtitle={currentModal?.subtitle}
        content={currentModal?.content ?? null}
        onClose={() => setModalKey(null)}
      />

      <InfoModal
        isOpen={!!currentFeatureModal}
        title={currentFeatureModal?.title ?? ""}
        subtitle={currentFeatureModal?.subtitle}
        content={currentFeatureModal?.content ?? null}
        onClose={() => setFeatureKey(null)}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid h-[92px] grid-cols-[auto_1fr_auto] items-center gap-8">
            <div className="flex items-center">
              <img
                src={imgLogoSpainWay}
                alt="SpainWay"
                className="h-[42px] w-auto md:h-[48px]"
              />
            </div>

            <nav className="hidden items-center justify-center gap-10 text-[15px] font-medium text-[#212832] lg:flex xl:gap-12">
              <a href="#destinos" className="transition hover:text-[#DF6951]">
                Destinos
              </a>
              <a href="#itinerarios" className="transition hover:text-[#DF6951]">
                Itinerarios
              </a>
              <a href="#mapa" className="transition hover:text-[#DF6951]">
                Mapa
              </a>
              <a href="#asistente" className="transition hover:text-[#DF6951]">
                Asistente IA
              </a>
            </nav>

            <div className="flex items-center justify-end gap-3 text-[15px] text-[#212832] md:gap-5">
              <button
                onClick={() => router.push("/explorar")}
                className="hidden transition hover:text-[#DF6951] md:inline-block"
              >
                Explorar
              </button>

              <button
                onClick={() => setShowDemo(true)}
                className="rounded-[6px] border border-[#212832] px-5 py-2.5 font-medium transition hover:border-[#DF6951] hover:bg-[#DF6951] hover:text-white"
              >
                Probar demo
              </button>

              <button className="hidden items-center gap-1 transition hover:text-[#DF6951] md:flex">
                <span>ES</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-8 lg:px-10 lg:pb-20 lg:pt-6">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10 max-w-[620px] pt-6 lg:pt-10">
              <p className="mb-6 text-[16px] font-bold uppercase tracking-[0.03em] text-[#DF6951]">
                Descubre los mejores rincones de España
              </p>

              <h1
                className="max-w-[620px] text-[58px] font-bold leading-[0.96] text-[#181E4B] md:text-[78px] xl:text-[86px]"
                style={{ fontFamily: "Volkhov, serif" }}
              >
                Explora España,
                <br />
                Planifica Rutas
                <br />
                Inteligentes
              </h1>

              <p className="mt-8 max-w-[520px] text-[18px] leading-8 text-[#5E6282]">
                SpainWay te ayuda a descubrir ciudades, recursos turísticos y
                rutas personalizadas por toda España mediante un asistente
                conversacional basado en inteligencia artificial y datos abiertos.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => router.push("/explorar")}
                  className="rounded-[10px] bg-[#DF6951] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_30px_rgba(223,105,81,0.35)] transition hover:bg-[#cf5b45]"
                >
                  Explorar destinos
                </button>

                <button
                  onClick={() => router.push("/asistente")}
                  className="flex items-center gap-4 text-[17px] text-[#686D77] transition hover:text-[#DF6951]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DF6951] text-white shadow-[0_12px_25px_rgba(223,105,81,0.35)]">
                    <svg
                      className="ml-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="font-medium">Probar asistente</span>
                </button>
              </div>
            </div>

            <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[720px]">
              <img
                src={imgHeroShape}
                alt=""
                aria-hidden="true"
                className="absolute right-[-90px] top-[10px] z-0 hidden w-[760px] max-w-none lg:block xl:right-[-110px] xl:top-[0px] xl:w-[820px]"
              />

              <div className="absolute left-[8%] top-[36%] z-[1] hidden rotate-[-22deg] text-[#00A7E7] lg:block">
                <svg className="h-14 w-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 16l20-8-20-2 5 5-5 5zm7-4.5l4.5-1.8" />
                </svg>
              </div>

              <div className="absolute right-[9%] top-[38%] z-[1] hidden rotate-[12deg] text-[#00A7E7] lg:block">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 16l20-8-20-2 5 5-5 5zm7-4.5l4.5-1.8" />
                </svg>
              </div>

              <img
                src={imgTraveller}
                alt="Viajera explorando España"
                className="relative z-10 w-full max-w-[640px] object-contain lg:max-w-[760px] xl:max-w-[820px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="asistente" className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <p className="mb-3 text-[16px] font-semibold uppercase text-[#5E6282]">
              Funcionalidades
            </p>
            <h2
              className="text-[40px] font-bold text-[#14183E] md:text-[50px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              SpainWay Te Ayuda A Planificar Mejor
            </h2>
          </div>

          <div className="mt-18 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              title="Asistente conversacional"
              description="Habla con SpainWay en lenguaje natural para indicar destino, fechas, intereses, presupuesto o restricciones de viaje."
              onClick={() => setFeatureKey("asistente")}
              active={featureKey === "asistente"}
              icon={
                <svg className="h-10 w-10 text-[#DF6951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              }
            />

            <FeatureCard
              title="Itinerarios inteligentes"
              description="Genera rutas viables y personalizadas teniendo en cuenta horarios, tiempos, distancias, accesibilidad y contexto."
              onClick={() => setFeatureKey("itinerarios")}
              active={featureKey === "itinerarios"}
              icon={
                <svg className="h-10 w-10 text-[#F1A501]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              }
            />

            <FeatureCard
              title="Mapa interactivo"
              description="Visualiza puntos de interés, recorridos y recursos cercanos en un mapa pensado para entender mejor cada plan."
              onClick={() => setFeatureKey("mapa")}
              active={featureKey === "mapa"}
              icon={
                <svg className="h-10 w-10 text-[#DF6951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              }
            />

            <FeatureCard
              title="Datos abiertos oficiales"
              description="Integra información turística, cultural, natural y de movilidad procedente de fuentes públicas para enriquecer la experiencia."
              onClick={() => setFeatureKey("datos")}
              active={featureKey === "datos"}
              icon={
                <svg className="h-10 w-10 text-[#181E4B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* DESTINOS */}
      <section id="destinos" className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <p className="mb-3 text-[16px] font-semibold uppercase text-[#5E6282]">
              Destinos destacados
            </p>
            <h2
              className="text-[40px] font-bold text-[#14183E] md:text-[50px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              Lugares Para Empezar Tu Próxima Ruta
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-[#5E6282]">
              Ciudades y entornos con gran valor cultural, urbano y paisajístico
              para inspirar escapadas, rutas temáticas e itinerarios a medida.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[340px] overflow-hidden">
                <img
                  src={imgMadrid}
                  alt="Madrid"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[22px] font-semibold text-[#14183E]">
                    Madrid
                  </h3>
                  <span className="text-[18px] font-semibold text-[#5E6282]">
                    Ruta cultural
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[15px] text-[#5E6282]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span>Patrimonio, museos y vida urbana</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[340px] overflow-hidden">
                <img
                  src={imgBarcelona}
                  alt="Barcelona"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[22px] font-semibold text-[#14183E]">
                    Barcelona
                  </h3>
                  <span className="text-[18px] font-semibold text-[#5E6282]">
                    Escapada urbana
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[15px] text-[#5E6282]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span>Arquitectura, costa y experiencia local</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[340px] overflow-hidden">
                <img
                  src={imgValencia}
                  alt="Valencia"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[22px] font-semibold text-[#14183E]">
                    Valencia
                  </h3>
                  <span className="text-[18px] font-semibold text-[#5E6282]">
                    Experiencia mediterránea
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[15px] text-[#5E6282]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span>Cultura contemporánea, costa y ocio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARIOS */}
      <section id="itinerarios" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="mb-3 text-[16px] font-semibold uppercase text-[#5E6282]">
              Planificación inteligente
            </p>
            <h2
              className="mb-12 text-[40px] font-bold leading-tight text-[#14183E] md:text-[50px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              Planifica Tu Viaje En 3 Pasos
            </h2>

            <div className="space-y-9">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[13px] bg-[#F0BB1F] text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#5E6282]">
                    Cuéntanos cómo viajas
                  </h3>
                  <p className="mt-1 text-[16px] leading-7 text-[#5E6282]">
                    Indica destino, duración, intereses, presupuesto o
                    restricciones para que SpainWay entienda la experiencia que
                    buscas.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[13px] bg-[#F15A2B] text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#5E6282]">
                    Recibe tu itinerario
                  </h3>
                  <p className="mt-1 text-[16px] leading-7 text-[#5E6282]">
                    Obtén una propuesta diaria con puntos de interés, tiempos
                    aproximados, desplazamientos y alternativas coherentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[13px] bg-[#006380] text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#5E6282]">
                    Explora y adapta tu ruta
                  </h3>
                  <p className="mt-1 text-[16px] leading-7 text-[#5E6282]">
                    Consulta el mapa, revisa recursos cercanos y ajusta el plan
                    si cambian las condiciones del viaje.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <img
                src={imgPlanning}
                alt="Vista de un destino costero en España"
                className="h-[360px] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-[22px] font-semibold text-[#080809]">
                  Ruta temática sugerida
                </h3>
                <p className="mt-2 text-[16px] text-[#84829A]">
                  Descubrimiento, planificación y visualización en un único flujo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-14 px-6 lg:grid-cols-[0.62fr_1.38fr] lg:px-10">
          <div>
            <p className="mb-3 text-[16px] font-semibold uppercase text-[#5E6282]">
              Testimonios
            </p>

            <h2
              className="text-[42px] font-bold leading-[1.08] text-[#14183E] md:text-[54px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              Las Opiniones De
              <br />
              Nuestros Viajeros
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prevTestimonials}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DADADA] text-[#5E6282] transition hover:border-[#DF6951] hover:text-[#DF6951]"
                aria-label="Anterior"
              >
                ←
              </button>

              <div className="flex gap-3">
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-3.5 w-3.5 rounded-full ${
                      grupoActivo === index ? "bg-[#39425D]" : "bg-[#E5E5E5]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonials}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DADADA] text-[#5E6282] transition hover:border-[#DF6951] hover:text-[#DF6951]"
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimoniosVisibles.map((item) => (
              <TestimonioCard key={`${grupoActivo}-${item.nombre}`} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="rounded-[48px] bg-[#FAFAFA] px-8 py-16 text-center shadow-[0_25px_55px_rgba(0,0,0,0.08)] md:px-14">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7F3DFF] to-[#5A2BFF] text-white shadow-[0_18px_30px_rgba(127,61,255,0.3)]">
              <svg
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2
              className="mx-auto max-w-[760px] text-[34px] font-bold leading-tight text-[#14183E] md:text-[48px]"
              style={{ fontFamily: "Volkhov, serif" }}
            >
              Mantente al día de nuevos destinos, rutas inteligentes y novedades
              de SpainWay
            </h2>

            <form className="mx-auto mt-10 flex max-w-[760px] flex-col gap-4 rounded-[20px] bg-[#F1F1F1] p-3 sm:flex-row">
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="h-[64px] flex-1 rounded-[16px] border-0 bg-white px-6 text-[16px] text-[#39425D] outline-none"
              />
              <button
                type="submit"
                className="h-[64px] rounded-[16px] bg-gradient-to-r from-[#FF946D] to-[#FF6E4E] px-8 text-[16px] font-semibold text-white transition hover:opacity-95"
              >
                Recibir novedades
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pb-10 pt-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
            <div className="max-w-[320px]">
              <img src={imgLogoMini} alt="SpainWay" className="h-8 w-auto" />
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
                <li>
                  <button
                    onClick={() => setModalKey("sobre")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Sobre SpainWay
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalKey("objetivos")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Objetivos del TFG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalKey("arquitectura")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Arquitectura
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[21px] font-bold text-[#080809]">
                Plataforma
              </h3>
              <ul className="space-y-4 text-[16px] text-[#5E6282]">
                <li>
                  <a href="#destinos" className="transition hover:text-[#DF6951]">
                    Destinos
                  </a>
                </li>
                <li>
                  <a
                    href="#itinerarios"
                    className="transition hover:text-[#DF6951]"
                  >
                    Itinerarios
                  </a>
                </li>
                <li>
                  <a href="#mapa" className="transition hover:text-[#DF6951]">
                    Mapa interactivo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[21px] font-bold text-[#080809]">
                Recursos
              </h3>
              <ul className="space-y-4 text-[16px] text-[#5E6282]">
                <li>
                  <button
                    onClick={() => setModalKey("datos")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Datos abiertos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalKey("fuentes")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Fuentes turísticas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalKey("casos")}
                    className="transition hover:text-[#DF6951]"
                  >
                    Casos de uso
                  </button>
                </li>
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
                    className="rounded-[18px] bg-[#F1F1F1] px-6 py-3 text-white transition "
                  >
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      <span>App Store</span>
                    </span>
                  </a>

                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[18px] bg-[#F1F1F1] px-6 py-3 text-white transition "
                  >
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span>Google Play</span>
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
    </div>
  );
}