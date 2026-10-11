---
name: Puertas Automáticas del Llano
description: Perfil institucional de una empresa de automatización de puertas con 30 años en el Meta.
colors:
  ground: "#f4f6f5"
  surface: "#ffffff"
  line: "#dde3e0"
  ink: "#0e1a17"
  ink-soft: "#4a5753"
  petrol-950: "#0a2a24"
  petrol-900: "#0f3b33"
  petrol-800: "#154a40"
  petrol-700: "#1d5c50"
  on-petrol: "#e8efec"
  on-petrol-soft: "#a9bdb6"
  lime: "#8db33a"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  panel: "28px"
  frame: "20px"
  field: "12px"
  pill: "999px"
spacing:
  section: "128px"
  section-mobile: "96px"
  gutter: "20px"
  gutter-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.petrol-900}"
    textColor: "{colors.on-petrol}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.petrol-800}"
  button-on-petrol:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.petrol-900}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  nav-item-active:
    backgroundColor: "{colors.petrol-900}"
    textColor: "{colors.on-petrol}"
    rounded: "{rounded.pill}"
  panel-petrol:
    backgroundColor: "{colors.petrol-900}"
    textColor: "{colors.on-petrol}"
    rounded: "{rounded.panel}"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
---

# Design System: Puertas Automáticas del Llano

## Overview

**Creative North Star: "El folleto de una empresa seria"** (propuesto; pendiente de confirmar con el dueño)

Un perfil corporativo sobrio, como el folleto bien impreso de un contratista con 30 años de trayectoria. La página es clara y aireada; el color verde petróleo aparece en pocos paneles grandes y redondeados que dan peso institucional. Las fotos reales de puertas instaladas hacen el trabajo de convencer; la tipografía es firme y sin adornos.

Rechazos confirmados por el dueño: degradados, look "hecho con IA", colores vivos de la versión anterior.

**Key Characteristics:**
- Fondo gris frío claro, superficies blancas, verde petróleo en bloques.
- Lima solo como acento mínimo (anillo de foco, marcador activo, un ícono).
- Fotos reales en marcos redondeados; nunca ilustraciones ni stock.
- Un solo texto de llamado: "Cotizar por WhatsApp".

## Colors

Restringido: neutros fríos con un tono verdoso, un color de marca dominante y un acento escaso.

### Primary
- **Verde Petróleo** (#0f3b33): paneles institucionales (nosotros, CTA, ficha lateral de servicio), botón principal, estado activo de la navegación.
- **Petróleo Profundo** (#0a2a24): pie de página y fondo detrás de fotos y videos mientras cargan.

### Secondary
- **Lima del Logo** (#8db33a): solo detalles de menos del 2% de la pantalla: anillo de foco, marcador del servicio activo, ícono de flecha sobre petróleo.

### Neutral
- **Gris Llano** (#f4f6f5): fondo de página.
- **Blanco** (#ffffff): tarjetas, formulario, grupo de navegación.
- **Línea** (#dde3e0): divisores y bordes de 1px.
- **Tinta** (#0e1a17): títulos y texto principal.
- **Tinta Suave** (#4a5753): texto secundario (contraste AA sobre gris y blanco).
- **Sobre Petróleo** (#e8efec / #a9bdb6): texto principal y secundario dentro de paneles verdes.

### Named Rules
**The No Gradient Rule.** Ningún degradado en fondos, textos ni bordes. El color se aplica plano.
**The Scarce Lime Rule.** El lima nunca rellena áreas ni botones; si se ve desde lejos, sobra.

## Typography

**Display Font:** Schibsted Grotesk (con ui-sans-serif)
**Body Font:** Geist (con ui-sans-serif)

**Character:** Una grotesca de periódico, firme y legible, para títulos; una sans neutra y moderna para el texto. Juntas suenan serias sin ser frías.

### Hierarchy
- **Display** (600, hasta 3.4rem, 1.08): H1 del hero y de páginas internas; máximo dos líneas en escritorio.
- **Headline** (600, 2.4 a 2.6rem, 1.08): títulos de sección. Sin etiquetas pequeñas encima.
- **Title** (600, 1.125 a 1.5rem): filas de servicios, preguntas, tarjetas de clientes.
- **Body** (400, 1.0625rem, 1.6): párrafos a 56 a 65 caracteres de ancho.

### Named Rules
**The No Eyebrow Rule.** Ningún rótulo en mayúsculas sobre los títulos; el título habla solo.

## Layout

Contenedor de 1280px con márgenes de 20px (móvil) y 32px (escritorio). Ritmo vertical: 96px entre secciones en móvil y 128px en escritorio. El hero es de dos columnas (texto 1.1fr, video 1fr) y en móvil se apila con el texto primero. Los paneles verdes se quedan dentro del contenedor, nunca a sangre. Cada sección usa una familia de composición distinta: lista con visor, carrusel horizontal, dos tarjetas, columnas con regla superior, preguntas en dos columnas.

## Elevation & Depth

Plano por defecto. La profundidad viene del contraste tonal (gris, blanco, petróleo) y de bordes de 1px. Solo dos sombras: la del grupo de navegación y la del botón flotante de WhatsApp.

### Shadow Vocabulary
- **Nav pill** (`box-shadow: 0 1px 2px rgb(14 26 23 / 0.06)`): grupo de navegación sobre el fondo.
- **Floating action** (`box-shadow: 0 10px 30px -8px rgb(10 42 36 / 0.55)`): botón flotante de WhatsApp.

## Shapes

Paneles a 28px, marcos de foto y video a 20px, campos a 12px, botones y navegación en píldora completa. Los marcos de foto dentro de paneles llevan 12 a 16px de margen interno.

## Components

- **Botón principal:** píldora verde petróleo con ícono de WhatsApp; al presionar escala a 0.97 en 140ms.
- **Botón sobre petróleo:** píldora blanca con texto petróleo.
- **Enlace secundario:** texto con subrayado de 2px color línea que pasa a petróleo al pasar el mouse.
- **Navegación:** grupo en píldora blanca; el elemento activo se rellena de petróleo.
- **Explorador de servicios:** lista con divisores a la izquierda y visor de foto a la derecha; la foto nueva sube con clip-path (700ms, ease-in-out) sobre la anterior. En móvil es un acordeón.
- **Carrusel de proyectos:** scroll-snap nativo, foto 4:5 con pie de foto debajo (nunca encima de la imagen).
- **Video:** reproductor destacado con lista lateral; sin ventanas modales.

## Do's and Don'ts

- Do: usar fotos y videos reales de proyectos del negocio, con texto alternativo que nombre el tipo de puerta y el lugar.
- Do: un único llamado "Cotizar por WhatsApp" en todo el sitio.
- Do: un solo momento de movimiento por página (apertura del marco del hero de abajo hacia arriba).
- Don't: degradados, texto con degradado, brillos, vidrio decorativo.
- Don't: etiquetas en mayúsculas sobre títulos, numeración 01/02/03, indicadores de scroll, contadores animados.
- Don't: guion largo en textos visibles.
- Don't: inventar reseñas, cifras de proyectos o clientes.
