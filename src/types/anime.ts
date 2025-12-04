import type { Genero } from "./genero";
import type { Personaje } from "./personage";


export type Anime = {
    id: number;
    titulo: string;
    titulo_original: string;
    genero: Genero[]
    episodios: number;
    estado: string;
    personajes: Personaje[];
    sinopsis: string;
    fecha_estreno: string;
    imagen_url: string;
  }