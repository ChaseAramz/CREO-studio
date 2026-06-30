# Creo Studio — Portafolio
 
Sitio de portafolio para Creo Studio, estudio de presencia digital para negocios locales en Guadalajara y Zapopan.
 
**Ver en vivo:** _(agregar URL una vez publicado en Vercel/Netlify/GitHub Pages)_
 
## Qué es esto
 
Landing page de ventas + 3 proyectos de demostración (barbería, consultorio dental, spa) que muestran cómo Creo Studio resuelve el problema de presencia digital para distintos tipos de negocio local.
 
Este repositorio es el portafolio que se comparte con prospectos y clientes — no contiene código de productos internos ni proyectos personales.
 
## Estructura
 
```
creo-studio-portfolio/
├── index.html              # Landing principal del portafolio
├── css/
│   └── style.css           # Estilos del sitio principal
├── js/
│   └── main.js              # Menú móvil
└── demos/
    ├── barberia.html         # Demo: Barbería Cedro
    ├── dental.html            # Demo: Clínica Dental Monraz
    └── spa.html                # Demo: Spa Colomos
```
 
## Cómo publicarlo
 
Sin build step — es HTML/CSS/JS plano. Cualquiera de estas opciones funciona:
 
**Vercel / Netlify (recomendado):**
1. Conectar este repo a Vercel o Netlify.
2. Sin configuración de build necesaria — se sirve tal cual.
3. Conectar dominio propio (ej. creostudio.mx) en la configuración del proveedor.
**GitHub Pages:**
1. Settings → Pages → Deploy from branch → `main` → `/ (root)`.
2. El sitio queda en `https://[usuario].github.io/creo-studio-portfolio/`.
## Antes de compartir con un cliente
 
- [ ] Reemplazar el número de WhatsApp de ejemplo (`523310000000`) por el real en `index.html` y en los 3 demos.
- [ ] Reemplazar `hola@creostudio.mx` por el correo real.
- [ ] Conectar dominio propio si ya está disponible.
- [ ] Agregar proyectos reales conforme se entreguen (reemplazando o sumando a las demos).
- [ ] Revisar que los tres demos carguen bien en móvil antes de enviar el link.
- [ ] Confirmar que el nombre "Creo Studio" esté consistente en todo el sitio (título de pestaña, nav, footer, contacto).
## Notas de mantenimiento
 
Cada demo es un archivo HTML independiente y autocontenido (sin dependencias externas más que Google Fonts). Para agregar un nuevo proyecto de muestra: duplicar `demos/barberia.html` como punto de partida, cambiar paleta y contenido, y agregar una tarjeta nueva en la sección "Trabajos" de `index.html`.
 
