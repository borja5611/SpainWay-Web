export interface Destino {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export const destinosMock: Destino[] = [
  {
    id: "madrid",
    nombre: "Madrid",
    descripcion: "Capital, cultura y vida urbana",
    imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
  },
  {
    id: "cataluna",
    nombre: "Cataluña",
    descripcion: "Barcelona, costa y arquitectura",
    imagen: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
  },
  {
    id: "valencia",
    nombre: "Valencia",
    descripcion: "Ciudad de las artes y las ciencias",
    imagen: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
  },
  {
    id: "andalucia",
    nombre: "Andalucía",
    descripcion: "Flamenco, sol y patrimonio histórico",
    imagen: "https://images.unsplash.com/photo-1570709955809-83c5c2bd0b00?w=800&h=600&fit=crop",
  },
  {
    id: "pais-vasco",
    nombre: "País Vasco",
    descripcion: "Gastronomía, cultura y tradición",
    imagen: "https://images.unsplash.com/photo-1544877752-1039f9e48f02?w=800&h=600&fit=crop",
  },
];
