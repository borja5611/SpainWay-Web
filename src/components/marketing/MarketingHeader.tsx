"use client";

import { useRouter } from "next/navigation";

export default function MarketingHeader({
  onOpenDemo,
}: {
  onOpenDemo?: () => void;
}) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid h-[92px] grid-cols-[auto_1fr_auto] items-center gap-8">
          <div className="flex items-center">
            <img
              src="/imagenes/LogoSpainway.png"
              alt="SpainWay"
              className="h-[42px] w-auto md:h-[48px]"
            />
          </div>

          <nav className="hidden items-center justify-center gap-10 text-[15px] font-medium text-[#212832] lg:flex xl:gap-12">
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
              onClick={() => router.push("/#mapa")}
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

          <div className="flex items-center justify-end gap-3 text-[15px] text-[#212832] md:gap-5">
            <button
              onClick={() => router.push("/explorar")}
              className="hidden transition hover:text-[#DF6951] md:inline-block"
            >
              Explorar
            </button>

            <button
              onClick={() => {
                if (onOpenDemo) onOpenDemo();
                else router.push("/#destinos");
              }}
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
  );
}