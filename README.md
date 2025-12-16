# ⚡ PokéApp - Modern Pokedex

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Una aplicación web moderna y responsiva que consume la [PokéAPI](https://pokeapi.co/), desarrollada con un enfoque en **Arquitectura Limpia**, **Principios SOLID** y **Experiencia de Usuario (UX)**.

## 🚀 Características Principales

- **Carrusel Infinito:** Navegación fluida tipo "marquee" con animación CSS pura y suspensión al hacer hover.
- **Vista de Detalles Dinámica:** Visualización instantánea de estadísticas, habilidades y movimientos sin recargas.
- **Reproductor de Audio:** Integración del grito (cry) del Pokémon con gestión de estado de reproducción.
- **Diseño Atomic Design:** Componentes modulares divididos en átomos, moléculas y organismos.
- **Modo Oscuro/Claro:** Tema persistente basado en preferencias del sistema y selección del usuario.
- **Totalmente Responsive:** Adaptable desde móviles hasta pantallas de escritorio grandes.

## 🛠️ Stack Tecnológico

- **Core:** React 18 + Vite (SWC)
- **Estilos:** TailwindCSS v3.4 (Configuración manual con PostCSS)
- **HTTP Client:** Axios
- **Iconografía:** Lucide React
- **Estado:** React Hooks (useState, useEffect, useContext, useRef)

## 🏗️ Arquitectura y Patrones de Diseño

Este proyecto no se limita a consumir una API; implementa patrones de ingeniería de software para asegurar escalabilidad y mantenibilidad:

1.  **Patrón Adaptador (`/adapters`):**
    Se implementó una capa de transformación de datos para desacoplar la Vista de la API externa. Esto limpia la respuesta anidada de la PokéAPI y entrega a los componentes solo la data necesaria y formateada.

2.  **Separation of Concerns (SoC):**
    - **UI:** Componentes visuales (`/components`)
    - **Lógica de Negocio:** Custom Hooks (`/hooks`)
    - **Datos:** Servicios (`/services`)

3.  **Atomic Design:**
    La UI se estructura jerárquicamente:
    - **Atoms:** Botones, Iconos, Labels (`AudioButton`).
    - **Molecules:** Tarjetas compuestas (`PokemonCard`).
    - **Organisms:** Secciones completas (`PokemonCarousel`, `PokemonDetail`).

## 📂 Estructura del Proyecto

```bash
src/
├── adapters/          # Transformación de datos (API -> UI)
│   └── pokemonAdapter.js
├── components/        # Componentes UI (Atomic Design)
│   ├── atoms/         # Piezas indivisibles (AudioButton, etc.)
│   ├── molecules/     # Grupos de átomos (PokemonCard)
│   └── organisms/     # Secciones complejas (Carousel, Header, Detail)
├── hooks/             # Lógica reutilizable (useTheme)
├── services/          # Comunicación HTTP (Axios)
│   └── pokemonService.js
├── styles/            # Configuración global CSS
├── App.jsx            # Entrada principal y orquestación
└── main.jsx           # Punto de montaje React
```

## 🔧 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en local:

1.  **Clonar el repositorio:**
    
```bash
    git clone https://github.com/BryanVillabona/prueba-frontend.git
    cd prueba-frontend
```
    
2.  **Instalar dependencias:**
    
	```bash
	npm install
	```
    
3.  **Ejecutar servidor de desarrollo:**   
    ```
    npm run dev
    ```
    
4.  **Compilar para producción:**
    
    ```
    npm run build
    ```
    

## 📦 Dependencias Clave
|Dependencia  | Version  | Uso |
|--|--|--|
| react | ^18.x | libreria ui |
| tailwindcss | 3.4.17 | Framework CSS Utility-first |
| axios | ^1.x | cliente http basado en promesas |
| lucide-react| ^0.x | Iconos SVG ligeros y modernos |
| postcss | ^8.x | procesamiento css |


## 🎨 Decisiones de UX/UI

-   **Performance Perceived:** Se cargan los datos de los 20 Pokémones iniciales de una sola vez para evitar "spinners" al navegar entre detalles, logrando una interacción instantánea.
    
-   **Feedback Visual:** Uso de sombras, escalas y transiciones suaves para indicar interactividad.
    
-   **Accesibilidad:** Uso de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<button>`) y contraste adecuado en ambos temas.