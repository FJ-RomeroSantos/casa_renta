# Casa Juriquilla — App de Renta

Proyecto web completo para publicar y gestionar los cuartos en renta.  
Funciona **100% sin base de datos** — todo el contacto va por WhatsApp.

---

## Estructura del proyecto

```
casa-juriquilla/
├── index.html        ← La app completa (no editar salvo ajustes visuales)
├── config.js         ← ⭐ AQUÍ se edita todo: precios, disponibilidad, reglas
└── img/              ← Carpeta de imágenes (ver lista abajo)
```

---

## Imágenes que necesitas subir

Coloca las imágenes dentro de la carpeta `/img/` con **exactamente estos nombres**:

| Archivo             | Descripción                                              |
|---------------------|----------------------------------------------------------|
| `calle-1.jpg`       | Foto de la calle / fachada exterior (aparece en el hero) |
| `calle-2.jpg`       | Segunda perspectiva de la calle (opcional)               |
| `entrada-1.jpg`     | Foto de la entrada / escaleras                           |
| `entrada-2.jpg`     | Segunda foto de la entrada / escaleras                   |
| `patio-frontal.jpg` | Foto del patio de entrada                                |
| `sala.jpg`          | Foto de la sala                                          |
| `comedor.jpg`       | Foto del comedor                                         |
| `cocina-1.jpg`      | Foto de la cocina (ángulo 1)                             |
| `cocina-2.jpg`      | Foto de la cocina (ángulo 2)                             |
| `hab1-a.jpg`        | Habitación 1 — perspectiva A                             |
| `hab1-b.jpg`        | Habitación 1 — perspectiva B                             |
| `hab1-bano.jpg`     | Baño privado de la habitación 1                          |
| `hab2-a.jpg`        | Habitación 2/3 — perspectiva A (misma foto para ambas)   |
| `hab2-b.jpg`        | Habitación 2/3 — perspectiva B                           |
| `bano-compartido.jpg` | Baño compartido del segundo piso                       |

**Recomendaciones para las fotos:**
- Resolución mínima: 1200 × 800 px
- Formato JPG (más ligero que PNG para fotos)
- Comprime a menos de 300 KB con [squoosh.app](https://squoosh.app) o [tinyjpg.com](https://tinyjpg.com)

---

## Cómo actualizar la disponibilidad

Abre `config.js` y cambia el campo `status` de cada habitación:

```js
status: "disponible"      // Cuarto libre → muestra botón de agendar visita
status: "ocupada"         // Ocupado → muestra botón de lista de espera
status: "próximamente"    // Se desocupará pronto → badge amarillo
```

No necesitas tocar el `index.html` para nada de esto.

---

## Cómo subir el proyecto a tu servidor

Como ya tienes servidor propio, solo sube los tres elementos:

1. **Archivos**: sube `index.html`, `config.js` y toda la carpeta `img/`
2. **Estructura de carpetas en el servidor**:
   ```
   public_html/   (o www/, o htdocs/, según tu hosting)
   ├── index.html
   ├── config.js
   └── img/
       ├── calle-1.jpg
       └── ... (resto de imágenes)
   ```
3. Accede desde tu navegador a la URL de tu servidor → debería cargar la app

### Si usas cPanel / hosting compartido
- Sube los archivos vía **Administrador de Archivos** o FTP (FileZilla)
- Asegúrate de que `index.html` esté en la raíz del dominio

### Si usas un VPS con Nginx
```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/casa-juriquilla;
    index index.html;
}
```

### Opción gratuita y rápida: GitHub Pages
1. Crea un repositorio público en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages → Source: main branch
4. Tu app estará en `https://tuusuario.github.io/nombre-repo`

---

## Lo que ya funciona (sin backend)

- ✅ Navegación entre secciones (plano, cuartos, amenidades, mapa)
- ✅ Plano interactivo de planta baja y segundo piso con clic en habitaciones
- ✅ Tarjetas de habitación con galería de fotos y estado en tiempo real
- ✅ Modal con características, precio, reglas y formulario de contacto
- ✅ Formulario de visita (nombre, WhatsApp, fecha deseada, 3 horarios)
- ✅ Envío automático por WhatsApp con mensaje pre-formateado
- ✅ Lista de espera por WhatsApp para cuartos ocupados
- ✅ Mapa embebido con coordenadas exactas (20.703058, -100.449333)
- ✅ Sección de amenidades con iconos personalizados
- ✅ Diseño responsive (funciona en celular y escritorio)

---

## Lo que se puede añadir en una versión 2 (requiere backend)

| Funcionalidad                    | Tecnología sugerida         | Complejidad |
|----------------------------------|-----------------------------|-------------|
| Panel admin para cambiar estatus | Node.js + SQLite / Supabase | Media       |
| Notificación automática WhatsApp | Twilio API / WhatsApp Cloud | Alta        |
| Agenda de visitas sincronizada   | Google Calendar API         | Media       |
| Galería de fotos editable        | Cloudinary + panel admin    | Media       |
| Comentarios de inquilinos        | Supabase / Firebase         | Baja        |

**Recomendación:** para la versión de presentación a la dueña, el proyecto actual es más que suficiente. La versión con backend solo vale la pena si hay más de 3 consultas por semana.

---

## Ediciones rápidas frecuentes

### Cambiar el número de WhatsApp
En `config.js`, línea 12:
```js
whatsapp: "524462140005",  // formato: 52 + 10 dígitos, sin espacios ni +
```

### Cambiar el precio de un cuarto
En `config.js`, campo `precio` de cada habitación:
```js
precio: 5500,   // en pesos, solo el número
```

### Agregar o quitar una regla
En `config.js`, array `reglas`:
```js
reglas: [
  "Depósito de un mes...",
  "Contrato mínimo 6 meses",
  // añade o elimina líneas aquí
]
```

### Cambiar horarios de visita
En `config.js`, array `horarios`. Máximo 6 chips se ven bien.

---

## Soporte

Para modificaciones a la app, los archivos a editar son:
- **Datos y lógica** → `config.js` (no requiere conocimientos técnicos)
- **Estilos visuales** → dentro de `<style>` en `index.html`
- **Estructura HTML** → `index.html` (requiere conocimientos básicos de HTML)
