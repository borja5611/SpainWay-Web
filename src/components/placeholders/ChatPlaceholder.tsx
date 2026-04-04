import { MessageCircle, Sparkles } from "lucide-react";

export default function ChatPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-purple-100 p-6 rounded-full">
            <MessageCircle className="w-16 h-16 text-purple-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Chat Inteligente
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Pregúntale a nuestro asistente virtual sobre recomendaciones, horarios, rutas y todo lo que necesites saber sobre tu destino.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Sparkles className="w-4 h-4" />
          <span>Próximamente disponible</span>
        </div>
      </div>
    </div>
  );
}
