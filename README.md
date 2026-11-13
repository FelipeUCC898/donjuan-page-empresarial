# Barbería Don Juan

Landing editorial para Barbería Don Juan, Pasto, Nariño. Construida con React, TypeScript y Vite, con una dirección visual luxury-minimal de inspiración editorial.

## Desarrollo local

```bash
npm install
npm run dev
```

Antes de abrir un Pull Request:

```bash
npm run lint
npm run build
```

## Estructura principal

- `src/App.tsx`: estructura semántica y contenido de la landing.
- `src/App.css`: sistema visual, layout, responsive y motion.
- `src/index.css`: tokens globales y estilos base.
- `public/don-juan-logo.png`: logo oficial de la barbería.

## Flujo de ramas

- `main`: producción. Solo recibe cambios revisados desde `develop`.
- `develop`: integración y validación previa al lanzamiento.
- `feature/*`: nuevas funcionalidades o secciones.
- `fix/*`: correcciones puntuales.
- `release/*`: preparación de una versión candidata.
- `hotfix/*`: correcciones urgentes que parten de `main`.

Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para el flujo completo.
