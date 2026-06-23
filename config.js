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
        "img/hab1-a.svg",
        "img/hab1-b.svg",
        "img/hab1-bano.svg"
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
        "img/hab2-a.svg",
        "img/hab2-b.svg",
        "img/bano-compartido.svg"
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
        "img/hab2-a.svg",     // mismas fotos que H2 (cuartos idénticos)
        "img/hab2-b.svg",
        "img/bano-compartido.svg"
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
  ]

};
