import { Route, Calendar } from "lucide-react";

export default function ItinerariosPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 p-6 rounded-full">
            <Route className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Itinerarios Personalizados
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Crea y planifica tus rutas turísticas personalizadas. Guarda tus lugares favoritos y organiza tus visitas día a día.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Próximamente disponible</span>
        </div>
      </div>
    </div>
  );
}
