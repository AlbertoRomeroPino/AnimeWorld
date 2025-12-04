
# 🌐 Anime World

Una plataforma web simple y moderna, construida con React, diseñada para mostrar una base de datos de información detallada sobre diversos títulos de anime, incluyendo sinopsis, personajes principales y estado de emisión.

## 🌟 Características

* **Detalles del Anime:** Muestra información clave como título original, género, número de episodios, estado y fecha de estreno.
* **Gestión de Personajes:** Incluye una sección para destacar los personajes principales con sus respectivas imágenes y descripciones.
* **Diseño Modular:** Componentes reutilizables de React (ej., `AnimeDetailCard`, `Footer`).
* **Datos Tipados:** Uso de TypeScript para la definición estricta de la estructura de datos (`Anime`, `Personaje`).

## 🛠️ Tecnologías Utilizadas

* **Frontend:** [React](https://react.dev/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** CSS3 / Módulos CSS (o SCSS/Styled Components, si aplica).
* **Gestión de Datos:** Archivos JSON/TypeScript locales (data mock).
* **Control de Versiones:** Git & GitHub

## 🚀 Instalación y Uso

Sigue estos pasos para obtener una copia local de este proyecto y ejecutarlo en tu máquina.

### Requisitos Previos

Necesitas tener **Node.js** y **npm** (o Yarn/pnpm) instalados en tu sistema.

### Instalación

1. **Clonar el Repositorio**
   **Bash**

   ```
   git clone https://github.com/AlbertoRomeroPino/AnimeWorld.git
   ```
2. **Acceder al Directorio del Proyecto**
   **Bash**

   ```
   cd AnimeWorld
   ```
3. **Instalar Dependencias**
   **Bash**

   ```
   npm install 
   # o yarn install
   ```
4. **Ejecutar el Proyecto**
   **Bash**

   ```
   npm run dev
   # o yarn dev
   ```

El proyecto se iniciará en modo desarrollo y estará accesible en **`http://localhost:5173/`** (o el puerto que indique tu terminal).

## 📂 Estructura de Archivos Clave

```
AnimeWorld/
├── public/                 # Archivos estáticos (íconos, manifest, assets directos).
├── src/                    # 🏗️ Código Fuente de la Aplicación (React y TS)
│   ├── assets/             # Recursos multimedia y estilos globales.
│   │   └── images/         # Imágenes del proyecto.
│   │       ├── anime/      # Imágenes de las portadas de los animes.
│   │       └── personajes/ # Imágenes de los personajes principales.
│   ├── components/         # Componentes reutilizables de React.
│   │   ├── Blog/           # Componentes específicos de la sección Blog.
│   │   │   ├── Info/
│   │   │   └── Reutilizacion/
│   │   └── layout/         # Componentes estructurales (Header, Footer, Nav).
│   ├── data/               # 💾 Origen de datos (Ej: animes.json o animes.ts).
│   ├── types/              # 🧬 Definiciones de Tipos de TypeScript (Interfaces/Types).
│   ├── App.tsx             # Componente principal de la aplicación.
│   └── main.tsx          
```
