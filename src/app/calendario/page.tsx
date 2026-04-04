import AppMobileShell from "@/components/AppMobileShell";

export default function CalendarioPage() {
  return (
    <AppMobileShell>
      <div className="min-h-screen flex items-center justify-center pb-24 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Calendario de Eventos
          </h1>
          <p className="text-gray-600">Próximamente</p>
        </div>
      </div>
    </AppMobileShell>
  );
}