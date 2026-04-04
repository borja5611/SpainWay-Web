import { MapPin, Navigation } from "lucide-react";

export default function MapaPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 p-6 rounded-full">
            <MapPin className="w-16 h-16 text-red-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Mapa Interactivo
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Explora destinos, monumentos y lugares de interés en un mapa interactivo con imágenes y descripciones detalladas.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Navigation className="w-4 h-4" />
          <span>Próximamente disponible</span>
        </div>
      </div>
    </div>
  );
}
