# Plan de rediseño — Puertas Automáticas del Llano

Sitio actual: https://puertasautomaticasdellano.com/
Objetivo: un sitio moderno, rápido y dinámico que **genere más cotizaciones por WhatsApp y llamada**, y que **posicione mejor** en Google (SEO local) y en buscadores con IA (GEO: ChatGPT, Gemini, Perplexity, AI Overviews).

---

## 1. Decisiones clave

| Tema | Decisión | Por qué |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | HTML renderizado en servidor/estático → Google y las IA leen todo el contenido sin depender de JavaScript. |
| Renderizado | **SSG (estático)** para todas las páginas | Máxima velocidad (Core Web Vitals) y hosting barato. |
| Estilos | **Tailwind CSS v4** | Diseño consistente con tokens de marca, CSS mínimo. |
| Animaciones | **Motion (Framer Motion)** + CSS | Dinámicas fluidas, respetando `prefers-reduced-motion`. |
| Contenido | **MDX en el repo** (servicios, proyectos, ciudades, blog) | Sin CMS al inicio; fácil de ampliar. Si luego se necesita editar sin código → Sanity o Decap CMS. |
| Imágenes/video | `next/image` (AVIF/WebP) + video comprimido MP4/WebM | El hero con video no debe frenar la carga. |
| Hosting | **Vercel** (o Cloudflare Pages) con el dominio actual | Deploy automático desde GitHub, CDN global. |
| Formularios | Server Action + envío a correo (Resend) y WhatsApp | Sin plugins, sin spam (honeypot + rate limit). |
| Analítica | GA4 + Google Search Console + eventos de conversión | Medir clics a WhatsApp, llamadas y formularios. |

**Regla de oro:** mantener las URLs actuales que ya posicionan, o redirigirlas con 301 (ver §7).

---

## 2. Identidad visual (derivada del logo)

El logo es un cubo isométrico con degradado **azul profundo → teal → verde → lima**. El sitio actual usa un verde genérico que no coincide. Usaremos la paleta real del logo:

| Token | Color | Uso |
|---|---|---|
| `--brand-navy` | `#0F2A44` | Fondos oscuros, header al hacer scroll, footer |
| `--brand-blue` | `#1F5E8C` | Títulos, enlaces |
| `--brand-teal` | `#14898A` | Acentos, iconos |
| `--brand-green` | `#3FA65A` | Botones secundarios |
| `--brand-lime` | `#B8D432` | Detalles, subrayados, hover |
| `--cta` | `#25D366` (WhatsApp) | Solo para el botón de WhatsApp |
| `--ink` / `--paper` | `#0B1220` / `#F6F8FA` | Texto y fondo claro |

- **Degradado de marca** (`navy → teal → lime`) para bordes, separadores y el fondo del CTA final.
- **Tipografía:** *Sora* o *Plus Jakarta Sans* para títulos (geométrica, combina con el cubo) + *Inter* para texto. Cuerpo mínimo **16–18px**.
- **Motivo gráfico:** las líneas en "escalón" del logo se reutilizan como patrón sutil de fondo y como forma de los separadores entre secciones.
- Esquinas redondeadas medianas (12–16px), sombras suaves, mucho aire, contenido a **1200–1280px** de ancho (hoy está muy angosto).

---

## 3. Arquitectura del sitio (pensada para SEO local)

```
/                                   Inicio
/servicios                          Índice de servicios
  /servicios/puertas-corredizas-automaticas
  /servicios/puertas-abatibles-automaticas
  /servicios/puertas-seccionales-de-garaje
  /servicios/cortinas-enrollables-electricas
  /servicios/talanqueras-vehiculares
  /servicios/control-de-acceso
  /servicios/mantenimiento-y-reparacion
/proyectos                          Galería filtrable
  /proyectos/[slug]                 Caso: antes/después, ciudad, motor usado
/cobertura                          Mapa de zonas
  /cobertura/villavicencio
  /cobertura/acacias
  /cobertura/restrepo
  /cobertura/cumaral
  /cobertura/granada
  /cobertura/puerto-lopez
  /cobertura/yopal               (si se atiende Casanare)
/marcas                             Nice, BFT, Beninca, LiftMaster, ZKTeco, Dahua
/nosotros                           Historia, Carlos Javier Guarama, equipo
/preguntas-frecuentes
/blog                               Guías (ver §6)
/contacto
```

- **Una página por servicio** (hoy todo está en la home) → cada una ataca su palabra clave.
- **Páginas de ciudad con contenido real** (proyectos hechos ahí, tiempos de llegada, testimonios locales). Nada de páginas clonadas cambiando solo el nombre: Google las penaliza.
- Breadcrumbs visibles + enlazado interno servicio ↔ ciudad ↔ proyecto.

---

## 4. Página de inicio — sección por sección

1. **Header fijo** (transparente sobre el video, se vuelve sólido `navy` al bajar)
   Logo · Servicios (mega-menú con iconos) · Proyectos · Cobertura · Nosotros · **Botón "Cotizar por WhatsApp"** · teléfono clicable.

2. **Hero con video** (decisión: se mantiene el video, bien hecho)
   - Video de la puerta en loop, `muted autoplay playsinline`, 8–12 s, < 2 MB, con **poster** (imagen) que carga primero → LCP rápido.
   - En móvil y con ahorro de datos: solo el poster.
   - Capa oscura con degradado de marca para que el texto se lea.
   - **H1 en HTML real:** "Puertas automáticas y eléctricas en Villavicencio y el Meta".
   - Subtítulo: instalación, mantenimiento y reparación · +30 años · técnicos certificados.
   - 2 botones: **"Cotiza gratis por WhatsApp"** (principal) y "Ver proyectos".
   - Barra de confianza debajo: ★ reseñas de Google · +30 años · Garantía · Respuesta en 24 h.

3. **Servicios** — tarjetas grandes con foto, icono y texto corto; hover con zoom suave y enlace a la página de cada servicio (texto del enlace específico, no "Ver más").

4. **Cifras animadas** — contadores al entrar en pantalla: "+30 años", "+X proyectos", "X municipios", "X marcas". (Corrige el "+30 / Siendo pioneros" confuso de hoy.)

5. **¿Por qué elegirnos?** — 4 razones reales con iconos: técnicos especializados, repuestos originales, garantía escrita, atención de emergencias. Hoy esta sección está vacía.

6. **Proyectos destacados** — carrusel/masonry con filtro por tipo; cada foto con ciudad y tipo de puerta. Opción **antes/después con deslizador**.

7. **Cómo trabajamos** — línea de tiempo animada: 1. Visita y diagnóstico → 2. Cotización → 3. Instalación → 4. Mantenimiento.

8. **Marcas** — carrusel infinito de logos (Nice, BFT, Beninca, LiftMaster, ZKTeco, Dahua).

9. **Testimonios** — reseñas de Google (texto real, nombre, ciudad).

10. **Zona de cobertura** — mapa interactivo del Meta con los municipios atendidos, cada uno enlazado a su página.

11. **Sobre Carlos Javier Guarama** — foto, experiencia, cita. Refuerza E-E-A-T (experiencia y autoridad).

12. **Preguntas frecuentes** — acordeón (5–8 preguntas), con schema `FAQPage`.

13. **CTA final** — fondo con degradado de marca: "¿Tu puerta necesita instalación o reparación?" + WhatsApp + llamada + formulario corto.

14. **Footer** — NAP completo (nombre, dirección, teléfono), horario, mapa de Google embebido, redes, enlaces a servicios y ciudades.

**Siempre visible en móvil:** barra inferior con **Llamar | WhatsApp**.

---

## 5. Dinámicas y animaciones

Sutiles, rápidas y sin perjudicar SEO ni rendimiento:

- Aparición escalonada de secciones al hacer scroll (fade + subir 16px).
- Contadores animados en las cifras.
- **Animación del logo:** las 3 piezas del cubo se ensamblan al cargar (SVG animado, < 1 s).
- Botón de WhatsApp flotante con un pulso suave cada pocos segundos.
- Hover en tarjetas: zoom de imagen + elevación.
- Deslizador antes/después en proyectos.
- Carrusel infinito de marcas.
- Paralaje ligero en el CTA final (la cortina enrollable "sube" al hacer scroll).
- Todo se desactiva con `prefers-reduced-motion`. El texto **nunca** se oculta esperando a JavaScript (Google debe verlo sin animaciones).

---

## 6. SEO

### Técnico
- HTML estático, un solo H1 por página, jerarquía H2/H3 correcta.
- `metadata` de Next por página: title único (≤ 60 caracteres), description (≤ 155), canonical, Open Graph e imagen OG generada por página.
- `sitemap.xml` y `robots.txt` automáticos (`app/sitemap.ts`, `app/robots.ts`).
- Core Web Vitals objetivo: **LCP < 2,0 s, CLS < 0,05, INP < 200 ms**, Lighthouse ≥ 95 en móvil.
- Imágenes con `alt` descriptivo y nombre de archivo con palabras clave (`puerta-corrediza-villavicencio.webp`).
- `lang="es-CO"`, URLs en minúsculas con guiones, sin caracteres invisibles.

### Datos estructurados (JSON-LD)
- `LocalBusiness` → subtipo `HomeAndConstructionBusiness`: nombre, logo, dirección, geo (lat/long), teléfono, horario, `areaServed` (lista de municipios), `sameAs` (Google Business, Facebook, Instagram).
- `Service` en cada página de servicio, con `areaServed` y `provider`.
- `FAQPage`, `BreadcrumbList`, `Person` (Carlos Javier Guarama), `Review`/`AggregateRating` solo con reseñas reales.

### Palabras clave objetivo (ejemplos)
- puertas automáticas Villavicencio
- puertas eléctricas Villavicencio / Meta
- motor para puerta corrediza Villavicencio
- puertas de garaje automáticas Meta
- reparación de puertas automáticas Villavicencio
- talanqueras vehiculares Meta
- control de acceso conjuntos residenciales Villavicencio
- cortinas enrollables eléctricas para locales

### Blog (contenido que atrae búsquedas)
- ¿Cuánto cuesta una puerta automática en Colombia? (con rangos)
- Corrediza vs abatible: cuál conviene para tu casa
- Nice vs BFT: comparativa de motores
- Cada cuánto hacer mantenimiento a una puerta eléctrica
- Qué hacer si la puerta automática no abre (guía de emergencia)

---

## 7. GEO (dos sentidos)

### Geográfico / local
- **Google Business Profile** optimizado: categorías correctas, fotos de proyectos semanales, respuesta a reseñas, publicaciones. Es el factor #1 para aparecer en el mapa.
- **NAP idéntico** en web, Google, Facebook, directorios (Páginas Amarillas, Cylex, etc.).
- Páginas de ciudad con proyectos reales y fotos geolocalizadas.
- Mapa embebido y `geo` en el schema.

### Generative Engine Optimization (buscadores con IA)
- Respuestas **directas y citables** al inicio de cada página ("Instalamos puertas automáticas en Villavicencio desde [año de fundación], con motores Nice y BFT…").
- Datos concretos y verificables: años, número de proyectos, marcas, municipios, tiempos de respuesta, garantía.
- FAQ con preguntas formuladas como las haría una persona.
- Archivo **`/llms.txt`** con resumen del negocio, servicios y enlaces clave.
- Autor visible (Carlos Javier Guarama) y página "Nosotros" sólida → autoridad.
- Permitir a los bots de IA en `robots.txt` (GPTBot, Google-Extended, PerplexityBot, ClaudeBot).

### Migración sin perder posiciones
1. Rastrear el sitio actual (Screaming Frog / Search Console) y listar todas las URLs indexadas.
2. Mapear cada URL vieja a la nueva y crear **redirecciones 301** en `next.config.ts` (incluye corregir `/servicio/` vs `/servicios/`).
3. Lanzar, enviar el nuevo sitemap a Search Console y vigilar errores 404 durante 4 semanas.

---

## 8. Conversión

- WhatsApp con **mensaje prellenado según la página** ("Hola, quiero cotizar una puerta corrediza en Acacías").
- Formulario de 4 campos: nombre, teléfono, tipo de servicio, municipio.
- Eventos GA4: `click_whatsapp`, `click_llamada`, `form_submit`, por página.
- Pruebas de confianza cerca de cada CTA (reseñas, garantía, años).

---

## 9. Estructura técnica del proyecto

```
app/
  layout.tsx            fuentes, header, footer, JSON-LD LocalBusiness
  page.tsx              inicio
  servicios/[slug]/page.tsx
  proyectos/[slug]/page.tsx
  cobertura/[ciudad]/page.tsx
  blog/[slug]/page.tsx
  sitemap.ts  robots.ts  opengraph-image.tsx
components/
  Hero.tsx  ServiceCard.tsx  Counter.tsx  BeforeAfter.tsx
  BrandMarquee.tsx  CoverageMap.tsx  FAQ.tsx  WhatsAppButton.tsx
content/
  servicios/*.mdx  proyectos/*.mdx  ciudades/*.mdx  blog/*.mdx
lib/
  seo.ts (helpers de metadata y JSON-LD)  site.ts (NAP, teléfono, redes)
public/
  video/hero.mp4 hero.webm  poster.avif  llms.txt
```

---

## 10. Fases

| Fase | Entregable | Tiempo estimado |
|---|---|---|
| 1. Base | Proyecto Next + Tailwind, tokens de marca, header/footer, inicio completo con hero de video | 1 semana |
| 2. Contenido | Páginas de servicios, proyectos, nosotros, contacto, FAQ | 1 semana |
| 3. SEO local | Páginas de ciudad, schema completo, sitemap, redirecciones 301, llms.txt | 3–4 días |
| 4. Pulido | Animaciones, antes/después, mapa interactivo, pruebas Lighthouse y móvil | 3–4 días |
| 5. Lanzamiento | Deploy, cambio de DNS, Search Console, Google Business, monitoreo | 1–2 días |
| Continuo | 2 artículos de blog al mes + fotos semanales en Google Business | — |

---

## 11. Lo que necesito de ti

1. **Video del hero** en la mejor calidad posible (lo comprimo yo).
2. **Fotos de proyectos** con ciudad y tipo de puerta de cada una.
3. Datos reales: dirección, horario, año de fundación, nº aproximado de proyectos, municipios atendidos, garantía que ofrecen.
4. Enlaces a Google Business, Facebook, Instagram, TikTok.
5. 3–6 reseñas de clientes que se puedan publicar.
6. Logo en **SVG o PNG grande** (para animarlo).
7. Acceso al hosting/DNS actual (para las redirecciones y el lanzamiento).
