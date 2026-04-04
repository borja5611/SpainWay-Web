import { User, Settings, Heart, Bookmark } from "lucide-react";

export default function PerfilPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-6 rounded-full">
            <User className="w-16 h-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tu Perfil
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Gestiona tus preferencias, guarda tus lugares favoritos y revisa tu historial de viajes.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Settings className="w-6 h-6 text-gray-600 mb-2" />
            <span className="text-xs text-gray-600">Ajustes</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Heart className="w-6 h-6 text-red-600 mb-2" />
            <span className="text-xs text-gray-600">Favoritos</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Bookmark className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-xs text-gray-600">Guardados</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-8">Próximamente disponible</p>
      </div>
    </div>
  );
}
