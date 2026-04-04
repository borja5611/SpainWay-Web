import { create } from "zustand";

interface DestinoStore {
  destinoSeleccionado: string | null;
  setDestinoSeleccionado: (destino: string) => void;
  limpiarDestinoSeleccionado: () => void;
}

export const useDestinoStore = create<DestinoStore>((set) => ({
  destinoSeleccionado: null,
  setDestinoSeleccionado: (destino: string) => set({ destinoSeleccionado: destino }),
  limpiarDestinoSeleccionado: () => set({ destinoSeleccionado: null }),
}));
