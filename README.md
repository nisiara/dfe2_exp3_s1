# Desarrollo Frontend II - Experiencia 2 Semana 5
## 🎟️ Sistema de Exploración de Eventos

Aplicación web en React para listar y consultar el detalle de eventos usando GraphQL (simulado con MSW) y estilos con Tailwind. Sustituye el contexto anterior de pacientes por un catálogo de eventos culturales, deportivos y musicales.

## 🚀 Características Principales

- **Lista de Eventos**: Renderiza catálogo con nombre, tipo, locación y acceso al detalle.
- **Detalle de Evento**: Vista individual con nombre y tipo (extensible a más datos del mock).
- **GraphQL Mock**: Consultas `ObtenerEventos` y `ObtenerEventoPorID` servidas por MSW.
- **Estados de Carga**: Mensajes diferenciados (lista vs detalle) con delays simulados (`delay` de MSW).
- **Manejo de Errores**: Respuestas GraphQL con estructura `errors` para IDs inexistentes.
- **Routing SPA**: Navegación con React Router (`/events` y `/events/:id`).
- **Estilos**: Tailwind para layout responsivo y tipografía limpia.

## 🛠️ Tecnologías Utilizadas

- **React** 19.2.0 (hooks modernos).
- **React Router** 7.9.5 para navegación de rutas dinámicas.
- **Apollo Client** para consumo de consultas GraphQL (mock backend).
- **MSW (Mock Service Worker)** 2.12.1 para interceptar y responder consultas GraphQL.
- **Tailwind CSS** 3.4.18 para estilos utilitarios.
- **Vite** 7.2.2 como dev server y bundler rápido.
- **ESLint / PostCSS** para calidad y procesado CSS.

## 📁 Estructura del Proyecto (relevante)

```
src/
├── pages/
│   ├── EventsPage.jsx         # Lista de eventos
│   ├── EventDetailPage.jsx    # Detalle de un evento
│   ├── HomePage.jsx           # Portada
│   ├── AboutUsPage.jsx        # Información institucional
├── components/
│   └── common/Common.jsx      # `PageTitle` y otros reutilizables
├── mocks/
│   ├── handlers.js            # Definición de resolvers GraphQL mock
│   └── browser.js             # Registro del service worker MSW
├── routes/AppRoutes.jsx       # Definición de rutas SPA
```

## 🔐 Consultas GraphQL (Mock)

```graphql
query ObtenerEventos {
  eventos {
    id
    nombre_evento
    tipo_evento
    locacion
    ciudad
  }
}

query ObtenerEventoPorID($id: String!) {
  evento(id: $id) {
    nombre_evento
    tipo_evento
  }
}
```

El handler para detalle devuelve `errors` si el ID no existe (código `EVENTO NO ENCONTRADO`). Esto permite manejar “no encontrado” en la UI distinguiéndolo de errores de red.

## 🗃️ Datos Mock

Cada evento incluye (parcialmente mostrado en la UI):
- `id`, `nombre_evento`, `tipo_evento`, `fecha`, `locacion`, `ciudad`, `hora`.
- `descripcion`, `auspiciadores`, `precios` (estructura variable). 
- `detalles_artista` con campos dependientes del tipo (música, teatro, deporte, etc.).

## 🎨 Diseño y UX

- **Feedback de Carga**: Mensajes centrados y neutrales con paleta slate.
- **Semántica**: Secciones y encabezados claros (`PageTitle`).
- **Responsive**: Grid y utilidades Tailwind para distintos breakpoints.
- **Accesibilidad Básica**: Uso de `alt` en imágenes y enlaces descriptivos.

## 🧪 Manejo de Errores en la UI

Actualmente, al consultar un ID inexistente, Apollo entra al branch `error` debido a la presencia de `errors` en la respuesta. Para mostrar un mensaje “no encontrado” alternativo se puede:
1. Inspeccionar `error.graphQLErrors[0].extensions.code`.
2. O ajustar el handler para devolver `{ data: { evento: null } }` en vez de `errors`.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 16+
- npm / yarn / pnpm

### Pasos

```bash
git clone https://github.com/nisiara/dfe2_exp2_s2.git
cd dfe2_exp2_s2
npm install
npm run dev
```

Abrir: `http://localhost:5173`

## 🔍 Comprobación Rápida

1. Ir a `/events` y esperar carga (mensaje de loading inicial).
2. Abrir un evento válido (ej. `EVE-001A`).
3. Probar un ID inexistente (`/events/EVE-001AERE`) para ver feedback de error.

## 📦 Extensiones Potenciales

- Incluir más campos en el detalle (fecha, auspiciadores, precios).
- Integrar filtrado por tipo de evento.
- Agregar paginación o scroll infinito.
- Implementar `errorPolicy: 'all'` para distinguir "not found" sin bloquear el render.

## 🏗️ Arquitectura Breve

- **SPA** con React Router.
- **Apollo Client** para queries y caché (fetchPolicy ajustable a `network-only`).
- **MSW** intercepta `fetch` y responde GraphQL localmente.
- **Tailwind** reduce CSS personalizado y acelera prototipado.

---

*Desarrollado con* ❤️ usando React, Apollo y MSW.
