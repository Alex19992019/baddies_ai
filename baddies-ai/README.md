# Baddies AI — Dress-up App

Personaje de pixel art personalizable, con marco tipo polaroid, charms
arrastrables y descarga de la imagen final. Hecho con Next.js (App Router)
y Tailwind CSS.

## Probarlo en tu computadora primero (opcional pero recomendado)

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o más nueva).

```bash
npm install
npm run dev
```

Abre http://localhost:3000 — deberías ver la app funcionando igual que en
el prototipo de Claude.

## Subir a GitHub

1. Crea un repositorio nuevo en [github.com/new](https://github.com/new)
   (puede ser privado).
2. Desde esta carpeta, en la terminal:

```bash
git init
git add .
git commit -m "Baddies AI dress-up app"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (puedes usar tu
   cuenta de GitHub directamente).
2. Clic en **Add New → Project**.
3. Elige el repositorio que acabas de subir. Vercel detecta automáticamente
   que es un proyecto Next.js — no necesitas cambiar ninguna configuración.
4. Clic en **Deploy**. En un par de minutos te da una URL tipo
   `https://tu-proyecto.vercel.app`.
5. Genera el código QR apuntando a esa URL (cualquier generador de QR gratis
   en línea sirve) para el evento.

### Actualizar la app después de desplegarla

Cada vez que quieras cambiar algo (agregar más estilos, cambiar colores,
etc.), solo repite: edita el código → `git add . && git commit -m "cambio" &&
git push`. Vercel vuelve a desplegar solo, automáticamente, en cada push.

## Estructura del proyecto

```
app/
  page.js       ← toda la lógica de la app (el mismo código que viste aquí)
  layout.js      ← layout raíz de Next.js
  globals.css    ← Tailwind
public/
  images/
    hair/        ← 6 estilos de cabello
    eyes/        ← 8 estilos de ojos
    mouth/       ← 8 estilos de boca
    backgrounds/ ← 10 fondos
    charms/      ← 18 charms
    icons/       ← íconos de las pestañas y miniaturas recortadas
    logo.png, slogan.png, avatar.png, laptop.png, etc.
```

Todas las imágenes están en `public/images` como archivos normales (no
incrustadas en el código), así que cargan rápido y puedes reemplazarlas
directamente ahí si en algún momento quieres cambiar algún asset.
