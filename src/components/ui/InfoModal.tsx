"use client";

import { ReactNode } from "react";

export default function InfoModal({
  isOpen,
  title,
  subtitle,
  content,
  onClose,
}: {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  content: ReactNode;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/55 px-4 py-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.22)]">
        <div className="border-b border-[#F0F0F0] bg-gradient-to-r from-[#181E4B] to-[#2B3B84] px-6 py-6 text-white md:px-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              {subtitle ? (
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                  {subtitle}
                </p>
              ) : null}

              <h3
                className="mt-2 text-[30px] font-bold leading-tight md:text-[38px]"
                style={{ fontFamily: "Volkhov, serif" }}
              >
                {title}
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

        <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {content}
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