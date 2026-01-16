# Despliegue en GitHub Pages

1. En router reemplazar createWebHistory por createWebHashHistory 
```ts
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
```

2. Configuración de vite.config.ts
```ts
export default defineConfig({
  ...
  base: "/<NOMBRE-REPORSITORIO>/", // <--- tu nombre de repo
  // ejemplo: base: "/diplomado-vue/",
  ...
})
```

3. Configurar las variables de entorno con VITE_

4. Instalar gh-pages y configurar el script de despliegue en package.json
```bash
npm install gh-pages --save-dev
```
>Permite subir automáticamente tu carpeta dist/ a la rama gh-pages.

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

> build → genera la carpeta dist/
> deploy → sube dist/ a la rama gh-pages

5. Configuración en GitHub:
  1. Entrá a tu repositorio en GitHub.
  2. Andá a Settings → Pages.
  3. En Source:
    1. Deploy from a branch
    2. Branch: gh-pages
    3. Carpeta: / (root)
    4. Guardá los cambios.
