"use client";

import { useRouter } from "next/navigation";
import TarjetaDestino from "@/components/inicio/TarjetaDestino";
import HeroDestino from "@/components/inicio/HeroDestino";
import ExploraVisualmenteCard from "@/components/inicio/ExploraVisualmenteCard";
import EventoDiaCard from "@/components/inicio/EventoDiaCard";
import RecomendacionCard from "@/components/inicio/RecomendacionCard";
import SeccionInicio from "@/components/inicio/SeccionInicio";
import CambiarDestinoButton from "@/components/inicio/CambiarDestinoButton";
import { destinosMock } from "@/data/mock/destinos";
import { inicioPorDestino } from "@/data/mock/inicioPorDestino";
import { useDestinoStore } from "@/store/useDestinoStore";

export default function InicioPantalla() {
  const router = useRouter();
  const destinoSeleccionado = useDestinoStore((state) => state.destinoSeleccionado);
  const setDestinoSeleccionado = useDestinoStore(
    (state) => state.setDestinoSeleccionado
  );
  const limpiarDestinoSeleccionado = useDestinoStore(
    (state) => state.limpiarDestinoSeleccionado
  );

  if (!destinoSeleccionado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 pb-24">
        <div className="mx-auto w-full max-w-[393px] px-6 pt-8">
          <div className="mb-8">
            <h1
              className="text-4xl font-bold text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              Descubre tu destino
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Selecciona una ciudad o región para empezar a explorar
            </p>
          </div>

          <div className="space-y-5">
            {destinosMock.map((destino) => (
              <TarjetaDestino
                key={destino.id}
                destino={destino}
                onClick={() => setDestinoSeleccionado(destino.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const data = inicioPorDestino[destinoSeleccionado];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/20 min-h-screen w-full max-w-[393px] mx-auto relative overflow-y-auto pb-24">
      <HeroDestino
        titulo={data.heroTitulo}
        subtitulo={data.heroSubtitulo}
        imagen={data.heroImagen}
        onExplorar={() => router.push("/mapa")}
        onEventos={() => router.push("/calendario")}
        botonExplorarTexto={data.botonExplorarTexto}
        botonEventosTexto={data.botonEventosTexto}
      />

      <ExploraVisualmenteCard
        titulo={data.exploraTitulo}
        descripcion={data.exploraDescripcion}
        imagen={data.exploraImagen}
        onAbrirMapa={() => router.push("/mapa")}
      />

      <div className="px-6">
        <SeccionInicio titulo="Eventos de hoy">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {data.eventosHoy.length > 0 ? (
              data.eventosHoy.map((evento) => (
                <EventoDiaCard
                  key={evento.id}
                  titulo={evento.titulo}
                  imagen={evento.imagen}
                />
              ))
            ) : (
              <p className="text-[12px] text-[#7c6b69]">
                Próximamente habrá eventos destacados para este destino.
              </p>
            )}
          </div>
        </SeccionInicio>

        <SeccionInicio titulo="Recomendaciones del día">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {data.recomendaciones.length > 0 ? (
              data.recomendaciones.map((recomendacion) => (
                <RecomendacionCard
                  key={recomendacion.id}
                  titulo={recomendacion.titulo}
                  imagen={recomendacion.imagen}
                />
              ))
            ) : (
              <p className="text-[12px] text-[#7c6b69]">
                Próximamente habrá recomendaciones destacadas para este destino.
              </p>
            )}
          </div>
        </SeccionInicio>
      </div>

      <CambiarDestinoButton onClick={limpiarDestinoSeleccionado} />
    </div>
  );
}