"use client";

import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";


type MapboxModule = typeof import("mapbox-gl");

export default function MapPreviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error(
        "Falta NEXT_PUBLIC_MAPBOX_TOKEN en .env.local"
      );
      return;
    }

    let mounted = true;

    const initMap = async () => {
      const mapboxgl: MapboxModule = await import("mapbox-gl");

      if (!mounted || !mapContainerRef.current) return;

      mapboxgl.default.accessToken = token;

      const map = new mapboxgl.default.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-3.7038, 40.4168], // Madrid
        zoom: 10.5,
        pitch: 20,
        bearing: -10,
        attributionControl: false,
      });

      mapRef.current = map;

      map.addControl(new mapboxgl.default.NavigationControl(), "top-right");

      const puntos = [
        {
          name: "Puerta del Sol",
          coordinates: [-3.7033, 40.4169],
          color: "#DF6951",
        },
        {
          name: "Museo del Prado",
          coordinates: [-3.6921, 40.4138],
          color: "#181E4B",
        },
        {
          name: "Palacio Real",
          coordinates: [-3.7143, 40.4179],
          color: "#DF6951",
        },
      ];

      puntos.forEach((punto) => {
        const popup = new mapboxgl.default.Popup({ offset: 18 }).setHTML(
          `<div style="font-family: Arial, sans-serif;">
            <strong>${punto.name}</strong><br/>
            Recurso destacado en Madrid
          </div>`
        );

        new mapboxgl.default.Marker({ color: punto.color })
          .setLngLat(punto.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map);
      });

      map.on("load", () => {
        map.addSource("ruta-madrid", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [-3.7143, 40.4179],
                [-3.7033, 40.4169],
                [-3.6921, 40.4138],
              ],
            },
          },
        });

        map.addLayer({
          id: "ruta-madrid-line",
          type: "line",
          source: "ruta-madrid",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#DF6951",
            "line-width": 4,
            "line-dasharray": [2, 2],
          },
        });
      });
    };

    initMap();

    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tokenMissing = !process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/55 px-4 py-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-[1260px] flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.22)]">
        <div className="border-b border-[#F0F0F0] bg-gradient-to-r from-[#181E4B] to-[#2B3B84] px-6 py-6 text-white md:px-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                Demo visual del mapa
              </p>
              <h3
                className="mt-2 text-[28px] font-bold leading-tight md:text-[38px]"
                style={{ fontFamily: "Volkhov, serif" }}
              >
                Mapa interactivo SpainWay
              </h3>
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

        <div className="overflow-y-auto px-5 py-5 md:px-8 md:py-8">
          <div className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
            <div className="rounded-[28px] border border-[#ECECEC] bg-white p-5 shadow-[0_20px_45px_rgba(0,0,0,0.06)]">
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#5E6282]">
                    Vista real con Mapbox
                  </p>
                  <h4 className="mt-1 text-[24px] font-bold text-[#14183E]">
                    Madrid · Preview del mapa turístico
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFF1DA] px-3 py-1 text-sm font-semibold text-[#DF6951]">
                    Cultura
                  </span>
                  <span className="rounded-full bg-[#FDEEF5] px-3 py-1 text-sm font-semibold text-[#DF6951]">
                    Ruta urbana
                  </span>
                  <span className="rounded-full bg-[#F8F9FF] px-3 py-1 text-sm font-semibold text-[#181E4B]">
                    Madrid
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#EAEAEA]">
                <div className="relative h-[500px] w-full bg-[#F8FAFD]">
                  {tokenMissing ? (
                    <div className="flex h-full items-center justify-center p-8 text-center text-[#5E6282]">
                      Falta el token de Mapbox en <code className="mx-1">.env.local</code>.
                    </div>
                  ) : null}

                  <div
                    ref={mapContainerRef}
                    className={`h-full w-full ${tokenMissing ? "hidden" : "block"}`}
                  />

                  <div className="pointer-events-none absolute left-4 top-4 rounded-[18px] bg-white/95 px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#DF6951]">
                      Vista demo
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-[#14183E]">
                      Madrid · recursos destacados
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-4 left-4 max-w-[320px] rounded-[20px] bg-white/95 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#DF6951]">
                      Ruta sugerida
                    </p>
                    <h5 className="mt-1 text-[18px] font-semibold text-[#14183E]">
                      Palacio Real → Sol → Prado
                    </h5>
                    <p className="mt-2 text-sm leading-6 text-[#5E6282]">
                      Ejemplo de cómo SpainWay podría mostrar una ruta turística
                      real sobre un mapa de Madrid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[24px] bg-[#F8F9FF] p-6">
                <h4 className="text-[24px] font-semibold text-[#14183E]">
                  Qué estás viendo
                </h4>
                <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
                  Esta demo usa un mapa real centrado en Madrid con marcadores y
                  una ruta visual simple para enseñar cómo encajaría la parte
                  cartográfica dentro de SpainWay.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#FFF1DA] p-6">
                <h4 className="text-[24px] font-semibold text-[#14183E]">
                  Cómo lo conectas con tu app
                </h4>
                <ul className="mt-4 space-y-3 text-[16px] leading-7 text-[#5E6282]">
                  <li>• Reutilizas tu token público de Mapbox</li>
                  <li>• Cambias Madrid por cualquier destino</li>
                  <li>• Añades marcadores de POIs reales</li>
                  <li>• Sincronizas la ruta con el itinerario generado</li>
                </ul>
              </div>

              <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
                <h4 className="text-[24px] font-semibold text-[#14183E]">
                  Para tu TFG
                </h4>
                <p className="mt-4 text-[16px] leading-8 text-[#5E6282]">
                  Esta solución ya no es una simulación estática: es una demo web
                  real con mapa, bien presentada para enseñar funcionalidad y
                  visión de producto.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-[#F2F2F2] px-6 py-5 md:px-8">
          <button
            onClick={onClose}
            className="rounded-[14px] bg-[#DF6951] px-6 py-3 text-white transition hover:bg-[#c95b45]"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}