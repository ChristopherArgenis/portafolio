# portafolio
Mi Sitio Web de Portafolio. Mostrando mis Proyectos y Logros.

🌐 **Sitio:** https://christopherargenis.github.io/portafolio/

Sitio estático (HTML + CSS + JS, sin dependencias ni compilación) publicado con GitHub Pages. Inspirado en la estructura de secciones de [mouredev/portafolio-template](https://github.com/mouredev/portafolio-template).

## Estructura

```
index.html               Página (esqueleto)
assets/css/styles.css    Estilos
assets/js/main.js        Lógica: lee data.json y dibuja las secciones; textos de la interfaz ES/EN
assets/data/data.json    ⭐ TODO el contenido del portafolio
assets/img/              Avatar, capturas de proyectos, CV en PDF…
```

## Cómo actualizar el contenido

Solo edita `assets/data/data.json`. Cualquier texto puede ser:

- un string simple: `"title": "Portafolio"` (igual en ambos idiomas), o
- bilingüe: `"title": { "es": "Hola", "en": "Hello" }`

Una sección vacía (`[]` o sin la clave) no se muestra.

| Sección | Clave | Campos |
|---|---|---|
| Inicio | `profile` | `name`, `avatar`, `role`, `location`, `summary` |
| Contacto | `contact` | `email`, `cv`, `github`, `linkedin`, `others: [{name, url}]` |
| Sobre mí | `about` | texto |
| Ahora | `now` | `title`, `description`, `tags` |
| Tecnologías | `technologies` | `name`, `icon` (clase de [Devicon](https://devicon.dev), ej. `devicon-python-plain`) |
| Experiencia | `experience` | `title`, `subtitle`, `date`, `description`, `technologies`, `url` |
| Proyectos | `projects` | `title`, `status` (`done` / `in-progress` / `planned`), `date`, `description`, `technologies`, `image`, `url`, `github` |
| Planes | `roadmap` | `title`, `date`, `description`, `done` (true/false) |
| Formación | `training` | `title`, `subtitle`, `date`, `description`, `certificate` |
| Logros | `achievements` | `title`, `issuer`, `date`, `description`, `url` |
| Extras | `extras` | `title`, `description`, `url` |

## Ver en local

`fetch` no funciona abriendo `index.html` directo, así que levanta un servidor:

```bash
python3 -m http.server 8000
```

y abre http://localhost:8000
