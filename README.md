# Puertas Automáticas del Llano — sitio web

Rediseño del sitio [puertasautomaticasdellano.com](https://puertasautomaticasdellano.com/) en **Next.js 16 + Tailwind CSS 4 + Motion**, con todas las páginas estáticas y enfoque en SEO local y GEO.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compila y genera las páginas estáticas
npm start
```

## Estructura

- `lib/site.ts`: datos del negocio (teléfono, horario, servicios, proyectos, videos y preguntas frecuentes). Para cambiar textos, empieza aquí.
- `lib/seo.ts`: metadatos y datos estructurados (JSON-LD de LocalBusiness, Service, FAQ y Breadcrumb).
- `components/`: secciones de la página.
- `app/`: rutas (`/`, `/servicios/`, `/servicios/[slug]/`, `/proyectos/`, `/nosotros/`, `/contacto/`), `sitemap.xml`, `robots.txt` y la imagen para redes sociales.
- `public/proyectos`, `public/video`, `public/marcas`: fotos y videos reales del negocio, optimizados (WebP y MP4/WebM).
- `public/llms.txt`: resumen del negocio para buscadores con IA.
- `docs/PLAN-REDISENO.md`: plan de rediseño completo.
- `PRODUCT.md` y `DESIGN.md`: contexto del producto y sistema visual (verde petróleo institucional, sin degradados). Léelos antes de cambiar el diseño.

## Antes de lanzar

- Confirmar los municipios de cobertura (`coverage` en `lib/site.ts`) y las coordenadas.
- Conectar Google Search Console, GA4 y Google Business Profile. Los enlaces de conversión ya tienen el atributo `data-event`.
- Desplegar en Vercel con el dominio actual. Las URLs del WordPress se conservan (con `/` final), y `/servicio/` redirige a `/servicios/`.
