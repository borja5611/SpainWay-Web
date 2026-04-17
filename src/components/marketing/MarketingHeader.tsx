"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DemoSlides from "@/components/ui/DemoSlides";
import MapPreviewModal from "@/components/ui/MapPreviewModal";

export default function MarketingHeader() {
  const router = useRouter();
  const [showDemo, setShowDemo] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      {showDemo ? <DemoSlides onClose={() => setShowDemo(false)} /> : null}
      <MapPreviewModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
      />

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[78px] items-center justify-between gap-4 md:h-[88px]">
            <div className="flex shrink-0 items-center">
              <img
                src="/imagenes/LogoSpainway.png"
                alt="SpainWay"
                className="h-[32px] w-auto sm:h-[38px] md:h-[44px]"
              />
            </div>

            {/* Escritorio */}
            <nav className="hidden items-center justify-center gap-8 text-[15px] font-medium text-[#212832] lg:flex xl:gap-10">
              <button
                onClick={() => router.push("/#destinos")}
                className="transition hover:text-[#DF6951]"
              >
                Destinos
              </button>

              <button
                onClick={() => router.push("/#itinerarios")}
                className="transition hover:text-[#DF6951]"
              >
                Itinerarios
              </button>

              <button
                onClick={() => setShowMapModal(true)}
                className="transition hover:text-[#DF6951]"
              >
                Mapa
              </button>

              <button
                onClick={() => router.push("/#asistente")}
                className="transition hover:text-[#DF6951]"
              >
                Asistente IA
              </button>
            </nav>

            <div className="hidden items-center gap-3 text-[15px] text-[#212832] lg:flex">
              <button
                onClick={() => router.push("/explorar")}
                className="transition hover:text-[#DF6951]"
              >
                Explorar
              </button>

              <button
                onClick={() => setShowDemo(true)}
                className="rounded-[8px] border border-[#212832] px-5 py-2.5 font-medium transition hover:border-[#DF6951] hover:bg-[#DF6951] hover:text-white"
              >
                Probar demo
              </button>

              <button className="flex items-center gap-1 transition hover:text-[#DF6951]">
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

            {/* Móvil / tablet */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setShowDemo(true)}
                className="rounded-[8px] border border-[#212832] px-3 py-2 text-[14px] font-medium text-[#212832] transition hover:border-[#DF6951] hover:bg-[#DF6951] hover:text-white sm:px-4"
              >
                Demo
              </button>

              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#DADADA] bg-white text-[#212832] transition hover:border-[#DF6951] hover:text-[#DF6951]"
                aria-label="Abrir menú"
              >
                {menuOpen ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div className="border-t border-[#F1F1F1] py-4 lg:hidden">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => goTo("/#destinos")}
                  className="rounded-[12px] bg-[#F8F9FF] px-4 py-3 text-left text-[#14183E] transition hover:bg-[#EEF2FF]"
                >
                  Destinos
                </button>

                <button
                  onClick={() => goTo("/#itinerarios")}
                  className="rounded-[12px] bg-[#F8F9FF] px-4 py-3 text-left text-[#14183E] transition hover:bg-[#EEF2FF]"
                >
                  Itinerarios
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowMapModal(true);
                  }}
                  className="rounded-[12px] bg-[#F8F9FF] px-4 py-3 text-left text-[#14183E] transition hover:bg-[#EEF2FF]"
                >
                  Mapa
                </button>

                <button
                  onClick={() => goTo("/#asistente")}
                  className="rounded-[12px] bg-[#F8F9FF] px-4 py-3 text-left text-[#14183E] transition hover:bg-[#EEF2FF]"
                >
                  Asistente IA
                </button>

                <button
                  onClick={() => goTo("/explorar")}
                  className="rounded-[12px] bg-[#F8F9FF] px-4 py-3 text-left text-[#14183E] transition hover:bg-[#EEF2FF]"
                >
                  Explorar
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDemo(true);
                  }}
                  className="rounded-[12px] bg-[#DF6951] px-4 py-3 text-left text-white transition hover:bg-[#c95b45]"
                >
                  Probar demo
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}