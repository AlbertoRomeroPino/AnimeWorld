import type { Anime } from "../types/anime";

export const animes: Anime[] = [
  {
    id: 1,
    titulo: "Frieren: Beyond Journey's End",
    titulo_original: "Sousou no Frieren",
    genero: ["Fantasy", "Adventure", "Drama"],
    episodios: 28,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Frieren",
        genero: "Mujer",
        edad: 1000,
        Imagen_url: "./src/assets/images/Personajes/Frieren.png",
        descripcion: "Una elfo maga que fue parte del grupo del héroe.",
        rol: "Protagonista",
      },
      {
        nombre: "Stark",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "./src/assets/images/Personajes/Stark.png",
        descripcion: "El guerrero del nuevo grupo.",
        rol: "Secundario",
      },
      {
        nombre: "Fern",
        genero: "Mujer",
        edad: 18,
        Imagen_url: "./src/assets/images/Personajes/Fern.png",
        descripcion: "Una joven hechicera humana, aprendiz de Frieren.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "Frieren es una elfa maga que formó parte del Grupo del Héroe que derrotó al Rey Demonio. Tras una década de aventura, el grupo se disuelve. Debido a su longevidad milenaria, Frieren apenas percibe el paso del tiempo. Cincuenta años después, la muerte por vejez del héroe, Himmel, la golpea con un profundo arrepentimiento. Se da cuenta de que nunca se esforzó por comprender o valorar a sus compañeros humanos. Impulsada por este dolor, Frieren se embarca en un nuevo viaje de reflexión. Su objetivo es coleccionar recuerdos y comprender el significado de la vida humana. Acompañada por su joven aprendiz, la maga Fern, y más tarde por el guerrero Stark, Frieren recorre las mismas tierras. La serie se centra en sus interacciones, donde la elfa, normalmente distante, aprende sobre las emociones, los sueños y la efímera existencia de sus nuevos y viejos amigos. A través de frecuentes flashbacks, la serie da nuevo contexto a los pequeños momentos de su primera aventura. La historia es una meditación melancólica sobre la mortalidad, la amistad duradera y el valor del tiempo.",
    fecha_estreno: "2023-09-29",
    imagen_url: "./src/assets/images/anime/Frieren.jpg",
  },
  {
    id: 2,
    titulo: "One Punch Man",
    titulo_original: "Wanpanman",
    genero: ["Action", "Super Power", "Parody"],
    episodios: 24,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Saitama",
        genero: "Male",
        edad: 25,
        Imagen_url: "./src/assets/images/Personajes/Saitama.jpg",
        descripcion:
          "Un héroe capaz de derrotar a cualquier enemigo de un solo golpe.",
        rol: "Protagonista",
      },
      {
        nombre: "Genos",
        genero: "Male",
        edad: 19,
        Imagen_url: "./src/assets/images/Personajes/Genos.jpg",
        descripcion: "Un cyborg discípulo de Saitama.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "Las aventuras de un héroe que, por su poder, se aburre de la vida.",
    fecha_estreno: "2015-10-05",
    imagen_url: "./src/assets/images/anime/OnePuchMan.jpg",
  },
  {
    id: 3,
    titulo: "My Hero Academia",
    titulo_original: "Boku no Hero Academia",
    genero: ["Shonen", "Action", "Super Power"],
    episodios: 138,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Izuku Midoriya",
        genero: "Male",
        edad: 16,
        Imagen_url: "./src/assets/images/Personajes/Deku.jpg",
        descripcion: "Un joven sin poder que hereda el Quirk One For All.",
        rol: "Protagonista",
      },
      {
        nombre: "All Might",
        genero: "Male",
        edad: 50,
        Imagen_url: "./src/assets/images/Personajes/AllMight.jpg",
        descripcion: "El Símbolo de la Paz.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "En un mundo donde casi todos tienen superpoderes, un chico se esfuerza por ser un héroe.",
    fecha_estreno: "2016-04-03",
    imagen_url: "./src/assets/images/anime/MyHeroAcademy.jpg",
  },
  {
    id: 4,
    titulo: "Attack on Titan",
    titulo_original: "Shingeki no Kyojin",
    genero: ["Action", "Military", "Thriller"],
    episodios: 89,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Eren Yeager",
        genero: "Male",
        edad: 19,
        Imagen_url: "./src/assets/images/Personajes/ErenYeager.jpg",
        descripcion: "Protagonista con un destino trágico.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "La humanidad vive confinada tras muros para protegerse de los gigantes devoradores de hombres.",
    fecha_estreno: "2013-04-07",
    imagen_url: "./src/assets/images/anime/AttackOnTitan.jpg",
  },
  {
    id: 5,
    titulo: "Spy x Family",
    titulo_original: "Spy Fami",
    genero: ["Comedy", "Action", "Shonen"],
    episodios: 37,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Loid Forger",
        genero: "Male",
        edad: 30,
        Imagen_url: "./src/assets/images/Personajes/LoidForger.jpg",
        descripcion: "Un espía que necesita formar una familia falsa.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "Un espía, una asesina y una niña telépata forman una familia para mantener la paz mundial.",
    fecha_estreno: "2022-04-09",
    imagen_url: "./src/assets/images/anime/SpyXFamily.jpg",
  },
  {
    id: 6,
    titulo: "Death Note",
    titulo_original: "Desu Nōto",
    genero: ["Mystery", "Psychological", "Supernatural"],
    episodios: 37,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Light Yagami",
        genero: "Male",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/LightYagami.jpg",
        descripcion: "Un genio que encuentra la Death Note.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "Una batalla intelectual entre un estudiante y un detective, ambos con planes de justicia opuestos.",
    fecha_estreno: "2006-10-04",
    imagen_url: "./src/assets/images/anime/DeathNote.jpg",
  },
];
