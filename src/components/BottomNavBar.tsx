"use client";

import { Home, Map, Calendar, MessageCircle, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Inicio", path: "/app" },
    { icon: Map, label: "Mapa", path: "/mapa" },
    { icon: Calendar, label: "Itinerarios", path: "/itinerarios" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: User, label: "Perfil", path: "/perfil" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="mx-auto max-w-[393px] px-4">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-red-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-1 transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}