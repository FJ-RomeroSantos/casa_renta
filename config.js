/* ================================================================
   CONFIG.JS — Casa Juriquilla
   Edita este archivo para actualizar disponibilidad, precios
   y cualquier dato sin tocar el index.html
================================================================ */

const CONFIG = {

  /* ──────────────────────────────────────────
     CONTACTO
     Número de WhatsApp en formato internacional
     sin + ni espacios (52 = México)
  ────────────────────────────────────────── */
  whatsapp: "524462140005",

  /* ──────────────────────────────────────────
     HABITACIONES
     status: "disponible" | "ocupada" | "próximamente"
     imagenes: rutas relativas dentro de /img/
  ────────────────────────────────────────── */
  rooms: {
    1: {
      nombre: "Habitación Principal",
      precio: 5500,
      status: "disponible",   // ← cambia esto para actualizar disponibilidad
      // fechaLibre: "2025-08-01", // descomentar si status = "próximamente"
      imagenes: [
        "./img/hab1-a.svg",
        "./img/hab1-b.svg",
        "./img/hab1-bano.svg"
      ],
      caracteristicas: [
        "Baño privado dentro del cuarto",
        "Walking closet + tina",
        "Habitación más amplia (el doble que H2/H3)",
        "Espejo en habitación",
        "Segundo piso — más privacidad",
        "Todos los servicios incluidos"
      ]
    },
    2: {
      nombre: "Habitación 2",
      precio: 4500,
      status: "ocupada",      // ← cambia esto para actualizar disponibilidad
      imagenes: [
        "./img/hab2-a.svg",
        "./img/hab2-b.svg",
        "./img/bano-compartido.svg"
      ],
      caracteristicas: [
        "Clóset amplio",
        "Escritorio de trabajo",
        "Baño compartido (solo con H3)",
        "Segundo piso",
        "Todos los servicios incluidos"
      ]
    },
    3: {
      nombre: "Habitación 3",
      precio: 4500,
      status: "disponible",   // ← cambia esto para actualizar disponibilidad
      imagenes: [
        "./img/hab2-a.svg",     // mismas fotos que H2 (cuartos idénticos)
        "./img/hab2-b.svg",
        "./img/bano-compartido.svg"
      ],
      caracteristicas: [
        "Clóset amplio",
        "Escritorio de trabajo",
        "Baño compartido (solo con H2)",
        "Segundo piso",
        "Todos los servicios incluidos"
      ]
    }
  },

  /* ──────────────────────────────────────────
     REGLAS — se muestran en el modal antes de agendar
  ────────────────────────────────────────── */
  reglas: [
    "Depósito equivalente a un mes de renta (reembolsable al concluir el contrato sin incumplimientos)",
    "Contrato mínimo de 6 meses",
    "No se permiten invitados a pernoctar sin autorización previa",
    "La casa se comparte con otras 2–3 personas; se espera convivencia respetuosa",
    "Cooperación de $125 MXN por servicio de limpieza de áreas comunes",
    "No se permiten mascotas",
    "Queda prohibido fumar dentro de la casa"
  ],

  /* ──────────────────────────────────────────
     HORARIOS DISPONIBLES PARA VISITA
     label: texto descriptivo
     hora: horario que se mostrará en el chip
  ────────────────────────────────────────── */
  horarios: [
    { label: "Lunes a viernes", hora: "9:00 – 11:00 AM" },
    { label: "Lunes a viernes", hora: "3:00 – 5:00 PM" },
    { label: "Sábado",          hora: "10:00 – 12:00 PM" },
    { label: "Sábado",          hora: "2:00 – 4:00 PM" },
    { label: "Domingo",         hora: "11:00 – 1:00 PM" },
    { label: "A convenir",      hora: "Otro horario" }
  ],

  /* ──────────────────────────────────────────
     AMENIDADES (con imágenes clickeables)
  ────────────────────────────────────────── */
  amenities: [
    {
      id: "luz",
      nombre: "Luz incluida",
      sub: "Sin límite de consumo",
      icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
      imagenes: ["./img/sala.svg"]
    },
    {
      id: "agua",
      nombre: "Agua incluida",
      sub: "Sin cargo adicional",
      icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
      imagenes: ["./img/comedor.svg"]
    },
    {
      id: "gas",
      nombre: "Gas incluido",
      sub: "Regadera caliente siempre",
      icon: '<path d="M17 12h.01"/><path d="M3 8a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7a4 4 0 01-4-4z"/><path d="M7 16v2M17 16v2M7 8v.01M12 8v.01M17 8v.01M12 12v.01"/>',
      imagenes: ["./img/cocina-1.svg", "./img/cocina-2.svg"]
    },
    {
      id: "internet",
      nombre: "Internet WiFi",
      sub: "Alta velocidad incluida",
      icon: '<path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1"/>',
      imagenes: ["./img/sala.svg"]
    },
    {
      id: "muebles",
      nombre: "Casa amueblada",
      sub: "Todas las áreas comunes",
      icon: '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>',
      imagenes: ["./img/sala.svg", "./img/comedor.svg"]
    },
    {
      id: "areas",
      nombre: "Sala y comedor",
      sub: "Áreas comunes compartidas",
      icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      imagenes: ["./img/sala.svg", "./img/comedor.svg"]
    },
    {
      id: "cocina",
      nombre: "Cocina equipada",
      sub: "Refrigerador y estufa",
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 16v-4M12 8h.01"/>',
      imagenes: ["./img/cocina-1.svg", "./img/cocina-2.svg"]
    },
    {
      id: "patios",
      nombre: "Dos patios",
      sub: "Frontal y trasero",
      icon: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
      imagenes: ["./img/patio-frontal.svg"]
    },
    {
      id: "lavadora",
      nombre: "Lavadora",
      sub: "Patio trasero · Lavadero",
      icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      imagenes: []
    },
    {
      id: "tranquilo",
      nombre: "Solo 3 compañeros",
      sub: "Casa tranquila",
      icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
      imagenes: ["./img/entrada-1.svg"]
    },
    {
      id: "limpieza",
      nombre: "Limpieza de áreas comunes",
      sub: "Cooperación de $125 por servicio · Equitativo",
      icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
      imagenes: ["./img/entrada-1.svg"]
    }
  ]

};
