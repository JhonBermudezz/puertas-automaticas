/** Prefija rutas de /public con el basePath (necesario en GitHub Pages: /puertas-automaticas). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;
