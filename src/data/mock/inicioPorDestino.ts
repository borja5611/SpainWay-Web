interface EventoHoy {
  id: string;
  titulo: string;
  imagen: string;
}

interface Recomendacion {
  id: string;
  titulo: string;
  imagen: string;
}

interface InicioPorDestino {
  heroTitulo: string;
  heroSubtitulo: string;
  heroImagen: string;
  botonExplorarTexto: string;
  botonEventosTexto: string;
  exploraTitulo: string;
  exploraDescripcion: string;
  exploraImagen: string;
  eventosHoy: EventoHoy[];
  recomendaciones: Recomendacion[];
}

export const inicioPorDestino: Record<string, InicioPorDestino> = {
  madrid: {
    heroTitulo: "Descubre Madrid como nunca",
    heroSubtitulo: "Explora la capital más cosmopolita de España",
    heroImagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=800&fit=crop",
    botonExplorarTexto: "Explora más",
    botonEventosTexto: "Ver eventos hoy",
    exploraTitulo: "Explora Madrid visualmente",
    exploraDescripcion: "Descubre monumentos, barrios, restaurantes y rincones únicos a través de un mapa interactivo lleno de imágenes",
    exploraImagen: "https://images.unsplash.com/photo-1558366551-1f32d9c86c90?w=400&h=400&fit=crop",
    eventosHoy: [
      {
        id: "1",
        titulo: "Museo del Prado - Exposición especial",
        imagen: "https://images.unsplash.com/photo-1558366551-1f32d9c86c90?w=400&h=300&fit=crop",
      },
      {
        id: "2",
        titulo: "Concierto en el Teatro Real",
        imagen: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      },
      {
        id: "3",
        titulo: "Festival de tapas en La Latina",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      },
    ],
    recomendaciones: [
      {
        id: "1",
        titulo: "Restaurante Botín - El más antiguo del mundo",
        imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop",
      },
      {
        id: "2",
        titulo: "Parque del Retiro - Paseo en barca",
        imagen: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=500&h=400&fit=crop",
      },
      {
        id: "3",
        titulo: "Mercado de San Miguel - Gastronomía local",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop",
      },
    ],
  },
  cataluna: {
    heroTitulo: "Descubre Cataluña como nunca",
    heroSubtitulo: "Explora Barcelona y la costa mediterránea",
    heroImagen: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&h=800&fit=crop",
    botonExplorarTexto: "Explora más",
    botonEventosTexto: "Ver eventos hoy",
    exploraTitulo: "Explora Cataluña visualmente",
    exploraDescripcion: "Descubre la arquitectura de Gaudí, playas mediterráneas y la cultura catalana a través de un mapa interactivo",
    exploraImagen: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=400&h=400&fit=crop",
    eventosHoy: [
      {
        id: "1",
        titulo: "Sagrada Familia - Tour nocturno",
        imagen: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=400&h=300&fit=crop",
      },
      {
        id: "2",
        titulo: "Festival de música en el Primavera Sound",
        imagen: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      },
    ],
    recomendaciones: [
      {
        id: "1",
        titulo: "Park Güell - Vista panorámica de Barcelona",
        imagen: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=500&h=400&fit=crop",
      },
      {
        id: "2",
        titulo: "Playa de la Barceloneta - Sol y mar",
        imagen: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
      },
    ],
  },
  valencia: {
    heroTitulo: "Descubre Valencia como nunca",
    heroSubtitulo: "Ciudad moderna con historia milenaria",
    heroImagen: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=800&fit=crop",
    botonExplorarTexto: "Explora más",
    botonEventosTexto: "Ver eventos hoy",
    exploraTitulo: "Explora Valencia visualmente",
    exploraDescripcion: "Descubre la Ciudad de las Artes y las Ciencias, la playa y la auténtica paella valenciana",
    exploraImagen: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=400&fit=crop",
    eventosHoy: [],
    recomendaciones: [
      {
        id: "1",
        titulo: "Ciudad de las Artes y las Ciencias",
        imagen: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&h=400&fit=crop",
      },
    ],
  },
  andalucia: {
    heroTitulo: "Descubre Andalucía como nunca",
    heroSubtitulo: "El alma del sur de España",
    heroImagen: "https://images.unsplash.com/photo-1570709955809-83c5c2bd0b00?w=1200&h=800&fit=crop",
    botonExplorarTexto: "Explora más",
    botonEventosTexto: "Ver eventos hoy",
    exploraTitulo: "Explora Andalucía visualmente",
    exploraDescripcion: "Descubre la Alhambra, el flamenco, las playas de Cádiz y la riqueza cultural andaluza",
    exploraImagen: "https://images.unsplash.com/photo-1570709955809-83c5c2bd0b00?w=400&h=400&fit=crop",
    eventosHoy: [],
    recomendaciones: [],
  },
  "pais-vasco": {
    heroTitulo: "Descubre el País Vasco como nunca",
    heroSubtitulo: "Gastronomía de clase mundial",
    heroImagen: "https://images.unsplash.com/photo-1544877752-1039f9e48f02?w=1200&h=800&fit=crop",
    botonExplorarTexto: "Explora más",
    botonEventosTexto: "Ver eventos hoy",
    exploraTitulo: "Explora el País Vasco visualmente",
    exploraDescripcion: "Descubre San Sebastián, Bilbao, pintxos y la mejor gastronomía de España",
    exploraImagen: "https://images.unsplash.com/photo-1544877752-1039f9e48f02?w=400&h=400&fit=crop",
    eventosHoy: [],
    recomendaciones: [],
  },
};
