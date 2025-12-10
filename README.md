🎌 Galería de Anime — Práctica 3.1 React (Componentes y Estado)

![React](https://img.shields.io/badge/React-18-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Build-Vite-purple) ![Estado](https://img.shields.io/badge/Status-Completado-success)

**Desarrollado por:** Alberto Romero Pino
**Asignatura:** Desarrollo Web en Entorno Cliente
**Fecha:** Diciembre 2025
**Repositorio:** [AnimeWorld](https://github.com/AlbertoRomeroPino/AnimeWorld)

---

## 📌 Descripción General

Aplicación React que simula una **galería interactiva de animes**, permitiendo:

- 🔍 Buscar y seleccionar animes
- 📊 Ver detalles completos (sinopsis, metadatos, personajes)
- 💬 Añadir comentarios con sistema de likes
- 🎠 Carrusel de animes en tendencias
- 📱 Interfaz responsive con componentes reutilizables

**Temática:** Galería de anime.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular donde se separan los componentes por funcionalidad (Layout, Información, Reutilización y Comentarios).

```plaintext
src/
│   App.tsx                      # 🧠 Estado Global (animeActual)
│   main.tsx                     # Punto de entrada
│
├───components
│   ├───Blog
│   │   │   CarruselAnime.tsx    # 📜 Lista renderizada con .map() (Requisito A7)
│   │   │   InfoAnime.tsx        # 📄 Visor principal de detalles (Requisito A8)
│   │   │   Sidebar.tsx          # 🧩 Barra lateral con personajes
│   │   │
│   │   ├───Info                 # Componentes de detalle (Descomposición)
│   │   │   │   AnimeMetadato.tsx
│   │   │   │   HeaderInfo.tsx
│   │   │   │   ListaMetadatos.tsx
│   │   │   │   PersonajeMostrar.tsx
│   │   │   │   Sinopsis.tsx
│   │   │   │   TagGenero.tsx    # 🏷️ Componente reutilizable [A3c]
│   │   │   │
│   │   │   └───Comentarios      # Sistema de comentarios
│   │   │           BotonMegusta.tsx          # 👍 Estado local independiente (Requisito B1)
│   │   │           Comentarios.tsx           # 💬 Lista de comentarios
│   │   │           FormularioComentarios.tsx # 📝 Formulario Controlado (Requisito A5)
│   │   │
│   │   └───Reutilizacion        # ♻️ Componentes altamente reutilizables
│   │           AnimePoster.tsx      # [A3a/A4a] Usado en Carrusel y Info (×2 contextos)
│   │           PintarPersonaje.tsx  # [A3b] Usado en Sidebar (×N personajes)
│   │
│   └───layout
│           BarraDeBusqueda.tsx  # 🔍 Callback hacia el padre (Requisito A6)
│           Footer.tsx           # 🦶 Componente estático (Requisito A2)
│           Header.tsx
│
├───data
│       animes.ts                # Mock Data (~30 animes)
│
└───types                        # Definiciones TypeScript**
```

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
   **Bash**

   ```
   git clone <URL_DEL_REPO>
   ```
2. Instalar dependencias:
   **Bash**

   ```
   npm install
   ```
3. Arrancar servidor de desarrollo:
   **Bash**

   ```
   npm run dev
   ```

## 🔧 TECNOLOGÍAS UTILIZADAS

* **React 18** con Hooks (useState)
* **TypeScript** para tipado estático
* **CSS3** con variables CSS dinámicas
* **Vite** como bundler
* **ESLint** para linting

---

# ✅ VERIFICACIÓN COMPLETA DE REQUISITOS — Práctica 3.1

## 📋 ANÁLISIS DETALLADO POR REQUISITO

---

## **A. COMPONENTES (Mínimo 8 → Implementados: 15+)**

### **A1. Componente Raíz (Estado Global)**

**Requisito:** Un componente raíz App que controle el estado global que deba compartirse y coordine al resto.

| **Aspecto**       | **Detalle**                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Componente**    | `App`                                                                                            |
| **Archivo**       | `src/App.tsx`                                                                                    |
| **Estado Global** | `const [AnimeActual, setAnimeActual] = useState<number>(0);`                                     |
| **Distribución** | Pasa `setAnimeActual`a Header/BarraDeBusqueda (escritura),`anime`a InfoAnime/Sidebar (lectura) |
| **Verificación** | ✅ Controla qué anime mostrar, coordina todos los componentes                                     |

**Código:**

**TypeScript**

```
// App.tsx
const [AnimeActual, setAnimeActual] = useState<number>(0);
const anime = animes[AnimeActual];

return (
  <div className="app-container">
    <Header setAnimeActual={setAnimeActual} listaNombres={listaNombres} />
    <main className="main-content">
      <InfoAnime animeMostrado={anime} />
      <Sidebar ListPersonajes={anime.personajes} />
    </main>
    <CarruselAnime listaCarrusel={listaCarrusel} />
    <Footer />
  </div>
);
```

---

### **A2. Componente sin Props**

**Requisito:** Al menos un componente sin props (encabezado fijo, footer, banner estático, logo, etc.)

| **Aspecto**       | **Detalle**                             |
| ----------------------- | --------------------------------------------- |
| **Componente**    | `Footer`                                    |
| **Archivo**       | `src/components/layout/Footer.tsx`          |
| **Props**         | ❌ Ninguno                                    |
| **Contenido**     | Copyright estático y año actual             |
| **Verificación** | ✅ Renderizado puro sin dependencias externas |

**Código:**

**TypeScript**

```
// Footer.tsx
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="simple-footer"> 
      <div className="simple-footer__content"> 
        <p className="simple-footer__brand">Anime World</p> 
        <p className="simple-footer__copy">© {currentYear} Anime World.</p>
      </div>
    </footer>
  );
}
export default Footer;
```

---

### **A3a. Componente Reutilizable #1 — AnimePoster**

**Requisito:** Componente reutilizable usado varias veces con diferentes props

| **Aspecto**       | **Detalle**                                            |
| ----------------------- | ------------------------------------------------------------ |
| **Componente**    | `AnimePoster`                                              |
| **Archivo**       | `src/components/Blog/Reutilizacion/AnimePoster.tsx`        |
| **Contexto 1**    | `AnimeMetadato.tsx`- Imagen grande del anime seleccionado  |
| **Contexto 2**    | `CarruselAnime.tsx`- ×30+ imágenes pequeñas en carrusel |
| **Verificación** | ✅ Reutilizado ×2+ contextos con props diferentes           |

**Ubicaciones:**

**TypeScript**

```
// 1. AnimeMetadato.tsx (tamaño="grande")
<AnimePoster 
  titulo={animeMostrado.titulo} 
  imagen_url={animeMostrado.imagen_url}
  tamaño="grande"
  redondeado={true}
/>

// 2. CarruselAnime.tsx (tamaño="pequeño" ×30+ en loop)
{listaCarrusel.map((anime, index) => (
  <AnimePoster 
    key={index}
    titulo={anime.titulo} 
    imagen_url={anime.imagen_url}
    tamaño="pequeño"
    redondeado={true}
  />
))}
```

---

### **A3b. Componente Reutilizable #2 — PintarPersonaje**

**Requisito:** Componente reutilizable usado varias veces con diferentes props

| **Aspecto**       | **Detalle**                                         |
| ----------------------- | --------------------------------------------------------- |
| **Componente**    | `PintarPersonaje`                                       |
| **Archivo**       | `src/components/Blog/Reutilizacion/PintarPersonaje.tsx` |
| **Ubicación**    | `Sidebar.tsx`- Renderiza ×3 personajes en `.map()`   |
| **Props**         | `personaje: Personaje`                                  |
| **Verificación** | ✅ Usado ×N veces en bucle                               |

**Código:**

**TypeScript**

```
// Sidebar.tsx
{ListPersonajes.slice(0, 3).map((personaje) => (
  <>
    <h1>{personaje.rol}</h1>
    <PintarPersonaje key={personaje.nombre} personaje={personaje} />
  </>
))}
```

---

### **A3c. Componente Reutilizable #3 — TagGenero**

**Requisito:** Tercer componente reutilizable verificado

| **Aspecto**       | **Detalle**                                |
| ----------------------- | ------------------------------------------------ |
| **Componente**    | `TagGenero`                                    |
| **Archivo**       | `src/components/Blog/Info/TagGenero.tsx`       |
| **Ubicación**    | `ListaMetadatos.tsx`                           |
| **Uso**           | Renderiza ×N géneros en `.map()`interno      |
| **Props**         | `generos: string[]`                            |
| **Verificación** | ✅ Reutilizable para cualquier array de géneros |

**Código:**

**TypeScript**

```
// ListaMetadatos.tsx
<TagGenero generos={animeMostrado.genero} />

// TagGenero.tsx (interno)
function TagGenero({ generos }: TagGeneroProps) {
  return (
    <span className="anime-detail-card__meta-value">
      {generos.map((genero) => (
        <span key={genero}>#{genero}</span>  // ×N
      ))}
    </span>
  );
}
```

---

### **A4a. Props para Personalizar Apariencia/Contenido #1 — AnimePoster**

**Requisito:** Al menos dos componentes que reciban props para personalizar apariencia o contenido

| **Aspecto**          | **Detalle**                                                |
| -------------------------- | ---------------------------------------------------------------- |
| **Componente**       | `AnimePoster`                                                  |
| **Archivo**          | `src/components/Blog/Reutilizacion/AnimePoster.tsx`            |
| **Props de Tamaño** | `tamaño?: "pequeño" \| "mediano" \| "grande"`                  |
| **Props de Estilo**  | `redondeado?: boolean`                                         |
| **Variantes**        | 120×170px (pequeño), 160×230px (mediano), 220×320px (grande) |
| **Verificación**    | ✅ Personaliza tanto tamaño como bordes                         |

**Implementación:**

**TypeScript**

```
// AnimePoster.tsx
interface AnimePosterProps{
    titulo: string
    imagen_url: string
    tamaño?: TamañoPoster // NUEVO
    redondeado?: boolean // NUEVO
}

function AnimePoster({titulo, imagen_url, tamaño = "mediano", redondeado = true}: AnimePosterProps){
    const posterClass = `anime-detail-card__poster anime-detail-card__poster--${tamaño} ${redondeado ? "rounded" : "sharp"}`;
    return(
        <figure className={posterClass}>
            <img className="anime-detail-card__image" alt={`Póster de ${titulo}`} src={imagen_url} />
        </figure>
    )
}
```

---

### **A4b. Props para Personalizar Apariencia/Contenido #2 — FormularioComentarios**

**Requisito:** Segundo componente con props de personalización visual

| **Aspecto**           | **Detalle**                                                           |
| --------------------------- | --------------------------------------------------------------------------- |
| **Componente**        | `FormularioComentarios`                                                   |
| **Archivo**           | `src/components/Blog/Info/Commentarios/FormularioComentarios.tsx`         |
| **Props Color**       | `colorBotón?: string`(default: "#2e86de")                                |
| **Props Visibilidad** | `mostrarTitulo?: boolean`(default: true)                                  |
| **Ejemplo**           | Botón rojo sin título:`colorBotón="#ff6b6b"` `mostrarTitulo={false}` |
| **Verificación**     | ✅ Personaliza color y visibilidad                                          |

**Implementación:**

**TypeScript**

```
// FormularioComentarios.tsx
interface FormularioComentariosProps {
  insertarComentario: (usuario: string, texto: string) => void;
  colorBotón?: string; // NUEVO
  mostrarTitulo?: boolean; // NUEVO
}

function FormularioComentarios({insertarComentario, colorBotón = "#2e86de", mostrarTitulo = true}: FormularioComentariosProps) {
  return (
    <>
      {mostrarTitulo && <h4>Dejanos tu comentario</h4>}
      <form style={{"--boton-color": colorBotón} as React.CSSProperties}>
        ...
      </form>
    </>
  );
}
```

---

### **A5. Formulario Controlado**

**Requisito:** Al menos un componente formulario controlado con useState

| **Aspecto**       | **Detalle**                                                   |
| ----------------------- | ------------------------------------------------------------------- |
| **Componente**    | `FormularioComentarios`                                           |
| **Archivo**       | `src/components/Blog/Info/Commentarios/FormularioComentarios.tsx` |
| **Estados**       | `useState(nombre)`,`useState(comentario)`                       |
| **Validación**   | `nombre.trim().length > 0 && comentario.trim().length > 0`        |
| **Reset**         | `setNombre("")`,`setComentario("")`tras submit                  |
| **Verificación** | ✅ Inputs controlados con validación completa                      |

**Código:**

**TypeScript**

```
function FormularioComentarios({insertarComentario, ...}: FormularioComentariosProps) {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nombre.trim().length > 0 && comentario.trim().length > 0) {
      insertarComentario(nombre.trim(), comentario.trim());
      setNombre("");
      setComentario("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
      <button type="submit">Añadir comentario</button>
    </form>
  );
}
```

---

### **A6. Callback al Padre**

**Requisito:** Componente que reciba una función para cambiar un state por props (callback)

| **Aspecto**           | **Detalle**                                                      |
| --------------------------- | ---------------------------------------------------------------------- |
| **Componente**        | `BarraDeBusqueda`                                                    |
| **Archivo**           | `src/components/layout/BarraDeBusqueda.tsx`                          |
| **Callback Recibido** | `setAnimeActual: React.Dispatch<React.SetStateAction<number>>`       |
| **Flujo**             | Usuario hace click →`manejarSelleccion(id)`→`setAnimeActual(id)` |
| **Efecto**            | Toda la UI se actualiza (InfoAnime, Sidebar, etc.)                     |
| **Verificación**     | ✅ Modifica estado padre correctamente                                 |

**Código:**

**TypeScript**

```
// BarraDeBusqueda.tsx
interface BarraDeBusquedaProps {
  setAnimeActual: React.Dispatch<React.SetStateAction<number>>;
  listaNombres: { id: number; titulo: string }[];
}

function BarraDeBusqueda({ setAnimeActual, listaNombres }: BarraDeBusquedaProps) {
  const manejarSelleccion = (id: number) => {
    setAnimeActual(id - 1); // Ajusta a índice
    setNombreBusqueda("");
  };

  return (
    <ul className="search-results">
      {animesFiltrados.map((anime) => (
        <li key={anime.id} onClick={() => manejarSelleccion(anime.id)}>
          {anime.titulo}
        </li>
      ))}
    </ul>
  );
}
```

---

### **A7. Renderizado de Listas (.map)**

**Requisito:** Un componente que muestre una lista de elementos renderizando múltiples veces un componente reutilizable

| **Aspecto**                 | **Detalle**                                            |
| --------------------------------- | ------------------------------------------------------------ |
| **Componente Principal**    | `CarruselAnime`                                            |
| **Archivo**                 | `src/components/Blog/CarruselAnime.tsx`                    |
| **Componente Reutilizable** | `AnimePoster`                                              |
| **Cantidad**                | ×30+ animes en carrusel                                     |
| **Método**                 | `listaCarrusel.map((anime, index) => <AnimePoster ... />)` |
| **Verificación**           | ✅ .map() con keys correctas                                 |

**Secundarios con .map():**

* `Sidebar.tsx` - Renderiza ×3 personajes con `PintarPersonaje`
* `Comentarios.tsx` - Renderiza ×N comentarios
* `ListaMetadatos.tsx` - Renderiza ×N géneros con `TagGenero`
* `TagGenero.tsx` - Renderiza ×N spans de género

**Código:**

**TypeScript**

```
// CarruselAnime.tsx
function CarruselAnime({ listaCarrusel }: CarruselAnimeProps) {
  return (
    <div className="carousel-track">
      {listaCarrusel.map((anime, index) => (
        <AnimePoster 
          key={index}
          titulo={anime.titulo} 
          imagen_url={anime.imagen_url}
          tamaño="pequeño"
          redondeado={true}
        />
      ))}
    </div>
  );
}
```

---

### **A8. Panel Visor/Detalle**

**Requisito:** Un componente que actúe como "panel de información" o "visor" de un elemento seleccionado

| **Aspecto**       | **Detalle**                                            |
| ----------------------- | ------------------------------------------------------------ |
| **Componente**    | `InfoAnime`                                                |
| **Archivo**       | `src/components/Blog/InfoAnime.tsx`                        |
| **Props**         | `animeMostrado: Anime`                                     |
| **Contenido**     | Header, imagen, sinopsis, metadatos, personajes, comentarios |
| **Reactividad**   | Se actualiza cuando cambia `AnimeActual`                   |
| **Verificación** | ✅ Panel completo de detalles del anime                      |

**Estructura:**

**TypeScript**

```
function InfoAnime({ animeMostrado }: InfoAnimeProps) {
  return (
    <article className="anime-detail-card">
      <AnimeDetail animeMostrado={animeMostrado} />
      <div className="anime-detail-card__content">
        <AnimeMetadato animeMostrado={animeMostrado} />
        <AnimeSinopsis sinopsis={animeMostrado.sinopsis} />
        <Comentarios listacomentarios={animeMostrado.comentarios}/>
        <PersonajeMostrar personaje={animeMostrado.personajes[0]} />
      </div>
    </article>
  );
}
```

---

## **B. GESTIÓN DE ESTADOS (useState)**

### **B1. Estados Locales (Mínimo 2 → Implementados: 5+)**

#### **1. BarraDeBusqueda**

* **Estado:** `nombreBusqueda: string`
* **Uso:** Filtra animes en tiempo real
* **Independencia:** Local, no afecta otros componentes

#### **2. FormularioComentarios**

* **Estados:** `nombre: string`, `comentario: string`
* **Uso:** Inputs controlados del formulario
* **Independencia:** Local, reset tras submit

#### **3. BotonMegusta**

* **Estados:** `esMeGusta: boolean`, `likesCount: number`
* **Uso:** Toggle de like y contador
* **Independencia:** Local, cada botón mantiene su propio estado

#### **4. Comentarios**

* **Estado:** `comentarios: Comentario[]`
* **Uso:** Lista dinámica de comentarios
* **Actualización:** Via callback `insertarComentario()`
* **Independencia:** Local a Comentarios

#### **5. App**

* **Estado:** `AnimeActual: number`
* **Uso:** Índice del anime seleccionado
* **Alcance:** Compartido (ver B2)

**Verificación:** ✅ 5+ componentes con `useState` independiente

---

### **B2. Estado Compartido (Lifting State Up)**

**Estado Principal:**

**TypeScript**

```
// App.tsx
const [AnimeActual, setAnimeActual] = useState<number>(0);
const anime = animes[AnimeActual];
```

**Flujo Completo:**

```
┌─────────────────────────────────────────────────────────┐
│ App (AnimeActual = 0)                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Header                                          │   │
│  │  └─ BarraDeBusqueda (recibe setAnimeActual)    │   │
│  │     └─ onClick: setAnimeActual(2) ← ESCRITURA  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ main                                            │   │
│  │  ├─ InfoAnime (lee animes[AnimeActual])        │   │
│  │  │  └─ Muestra detalles ← LECTURA              │   │
│  │  └─ Sidebar (lee animes[AnimeActual].personajes)   │
│  │     └─ Renderiza personajes ← LECTURA          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  CarruselAnime (lista estática)                         │
│  Footer (sin estado)                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Pasos de verificación:**

1. ✅ **Definición en App:** `const [AnimeActual, setAnimeActual] = useState<number>(0);`
2. ✅ **Lectura en InfoAnime:** `const anime = animes[AnimeActual];`
3. ✅ **Lectura en Sidebar:** `ListPersonajes={anime.personajes}`
4. ✅ **Escritura desde BarraDeBusqueda:** `setAnimeActual(id)` vía callback
5. ✅ **Propagación:** UI se actualiza al cambiar

**Verificación Final:** ✅ Estado compartido implementado correctamente

---

## **C. REUTILIZACIÓN VERIFICADA**

### **Resumen de Reutilización**

| **Componente** | **Contexto 1**   | **Contexto 2**           | **Contexto 3+** | **Total** |
| -------------------- | ---------------------- | ------------------------------ | --------------------- | --------------- |
| `AnimePoster`      | AnimeMetadato (grande) | CarruselAnime ×30+ (pequeño) | —                    | ×2+ ✅         |
| `PintarPersonaje`  | Sidebar ×1            | Sidebar ×2                    | Sidebar ×3           | ×N ✅          |
| `TagGenero`        | ListaMetadatos ×1     | ListaMetadatos ×2             | ListaMetadatos ×N    | ×N ✅          |

**Total de reutilizaciones verificadas:** ✅ 3 componentes × múltiples contextos

---

## 📊 CONCLUSIÓN FINAL

```
┌────────────────────────────────────────────────────────────┐
│ ✅ PRÁCTICA 3.1 — 100% CUMPLIMIENTO                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ A. COMPONENTES (Mínimo 8)                                 │
│    ✅ A1. App raíz                                        │
│    ✅ A2. Componente sin props (Footer)                   │
│    ✅ A3a. Reutilizable 1 (AnimePoster ×2)               │
│    ✅ A3b. Reutilizable 2 (PintarPersonaje ×N)           │
│    ✅ A3c. Reutilizable 3 (TagGenero ×N)                 │
│    ✅ A4a. Props apariencia 1 (AnimePoster)              │
│    ✅ A4b. Props apariencia 2 (FormularioComentarios)    │
│    ✅ A5. Formulario controlado                           │
│    ✅ A6. Callback al padre                               │
│    ✅ A7. Lista con .map()                                │
│    ✅ A8. Panel visor                                     │
│                                                            │
│ B. ESTADOS (useState)                                     │
│    ✅ B1. 5+ estados locales independientes              │
│    ✅ B2. Estado compartido + callbacks                   │
│                                                            │
│ C. REUTILIZACIÓN                                          │
│    ✅ AnimePoster: ×2 contextos                          │
│    ✅ PintarPersonaje: ×N en loop                        │
│    ✅ TagGenero: ×N en loop                              │
│                                                            │
│ TOTAL: 15+ componentes (requisito: 8)                    │
│ IMPLEMENTACIÓN: React Hooks + TypeScript + CSS           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```
