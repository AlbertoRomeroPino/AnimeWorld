import type { Anime } from "../types/anime";

export const animes: Anime[] = [
  {
    id: 1,
    titulo: "Frieren: Beyond Journey's End",
    titulo_original: "Sousou no Frieren",
    genero: ["Fantasy", "Adventure", "Drama"],
    episodios: 28,
    estado: "Finalizado",
    // --- 2 COMENTARIOS AÑADIDOS ---
    comentarios: [
      {
        id: 1,
        usuario: "Himmel_Fan",
        texto: "La escena del amanecer me hizo llorar. Una obra maestra.",
        meGustas: 125,
        fecha: "2023-10-01"
      },
      {
        id: 2,
        usuario: "MagaFern",
        texto: "El ritmo es lento pero muy satisfactorio. La banda sonora es increíble.",
        meGustas: 89,
        fecha: "2023-11-20"
      }
    ],
    personajes: [
      {
        nombre: "Frieren",
        genero: "Mujer",
        edad: 1000,
        Imagen_url: "./images/Personajes/Frieren.png",
        descripcion: "Una elfo maga que fue parte del grupo del héroe.",
        rol: "Protagonista",
      },
      {
        nombre: "Stark",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "./images/Personajes/Stark.png",
        descripcion: "El guerrero del nuevo grupo.",
        rol: "Secundario",
      },
      {
        nombre: "Fern",
        genero: "Mujer",
        edad: 18,
        Imagen_url: "./images/Personajes/Fern.png",
        descripcion: "Una joven hechicera humana, aprendiz de Frieren.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "Frieren es una elfa maga que formó parte del Grupo del Héroe que derrotó al Rey Demonio. Tras una década de aventura, el grupo se disuelve. Debido a su longevidad milenaria, Frieren apenas percibe el paso del tiempo. Cincuenta años después, la muerte por vejez del héroe, Himmel, la golpea con un profundo arrepentimiento. Se da cuenta de que nunca se esforzó por comprender o valorar a sus compañeros humanos. Impulsada por este dolor, Frieren se embarca en un nuevo viaje de reflexión. Su objetivo es coleccionar recuerdos y comprender el significado de la vida humana. Acompañada por su joven aprendiz, la maga Fern, y más tarde por el guerrero Stark, Frieren recorre las mismas tierras. La serie se centra en sus interacciones, donde la elfa, normalmente distante, aprende sobre las emociones, los sueños y la efímera existencia de sus nuevos y viejos amigos. A través de frecuentes flashbacks, la serie da nuevo contexto a los pequeños momentos de su primera aventura. La historia es una meditación melancólica sobre la mortalidad, la amistad duradera y el valor del tiempo.",

    fecha_estreno: "2023-09-29",
    imagen_url: "./images/Anime/Frieren.jpg",
  },
  {
    id: 2,
    titulo: "One Punch Man",
    titulo_original: "Wanpanman",
    genero: ["Action", "Super Power", "Parody"],
    episodios: 24,
    estado: "En emisión",
    // --- 1 COMENTARIO AÑADIDO ---
    comentarios: [
      {
        id: 1,
        usuario: "CapedBaldy",
        texto: "Es imposible no reírse con Saitama. La mejor parodia de superhéroes.",
        meGustas: 340,
        fecha: "2016-02-15"
      }
    ],
    personajes: [
      {
        nombre: "Saitama",
        genero: "Male",
        edad: 25,
        Imagen_url: "./images/Personajes/Saitama.jpg",
        descripcion:
          "Un héroe capaz de derrotar a cualquier enemigo de un solo golpe.",
        rol: "Protagonista",
      },
      {
        nombre: "Genos",
        genero: "Male",
        edad: 19,
        Imagen_url: "./images/Personajes/Genos.jpg",
        descripcion: "Un cyborg discípulo de Saitama.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "Las aventuras de un héroe que, por su poder, se aburre de la vida.",
    fecha_estreno: "2015-10-05",
    imagen_url: "./images/Anime/OnePuchMan.jpg",
  },
  {
    id: 3,
    titulo: "My Hero Academia",
    titulo_original: "Boku no Hero Academia",
    genero: ["Shonen", "Action", "Super Power"],
    episodios: 138,
    estado: "En emisión",
    // --- 1 COMENTARIO AÑADIDO ---
    comentarios: [
      {
        id: 1,
        usuario: "DekuFan01",
        texto: "¡PLUS ULTRA! Me inspira a esforzarme cada día.",
        meGustas: 210,
        fecha: "2020-05-10"
      }
    ],
    personajes: [
      {
        nombre: "Izuku Midoriya",
        genero: "Male",
        edad: 16,
        Imagen_url: "./images/Personajes/Deku.jpg",
        descripcion: "Un joven sin poder que hereda el Quirk One For All.",
        rol: "Protagonista",
      },
      {
        nombre: "All Might",
        genero: "Male",
        edad: 50,
        Imagen_url: "./images/Personajes/AllMight.jpg",
        descripcion: "El Símbolo de la Paz.",
        rol: "Secundario",
      },
    ],
    sinopsis:
      "En un mundo donde casi todos tienen superpoderes, un chico se esfuerza por ser un héroe.",
    fecha_estreno: "2016-04-03",
    imagen_url: "./images/Anime/MyHeroAcademy.jpg",
  },
  {
    id: 4,
    titulo: "Attack on Titan",
    titulo_original: "Shingeki no Kyojin",
    genero: ["Action", "Military", "Thriller"],
    episodios: 89,
    estado: "Finalizado",
    // --- 1 COMENTARIO AÑADIDO ---
    comentarios: [
      {
        id: 1,
        usuario: "SurveyCorps",
        texto: "Shinzou wo Sasageyo! La trama política es tan buena como la acción.",
        meGustas: 550,
        fecha: "2021-12-05"
      }
    ],
    personajes: [
      {
        nombre: "Eren Yeager",
        genero: "Male",
        edad: 19,
        Imagen_url: "./images/Personajes/ErenYeager.jpg",
        descripcion: "Protagonista con un destino trágico.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "La humanidad vive confinada tras muros para protegerse de los gigantes devoradores de hombres.",
    fecha_estreno: "2013-04-07",
    imagen_url: "./images/Anime/AttackOnTitan.jpg",
  },
  {
    id: 5,
    titulo: "Spy x Family",
    titulo_original: "Spy Fami",
    genero: ["Comedy", "Action", "Shonen"],
    episodios: 37,
    estado: "En emisión",
    // --- 1 COMENTARIO AÑADIDO ---
    comentarios: [
      {
        id: 1,
        usuario: "AnyaPeanuts",
        texto: "Waku waku! Es la mezcla perfecta de comedia y acción.",
        meGustas: 180,
        fecha: "2022-06-01"
      }
    ],
    personajes: [
      {
        nombre: "Loid Forger",
        genero: "Male",
        edad: 30,
        Imagen_url: "./images/Personajes/LoidForger.jpg",
        descripcion: "Un espía que necesita formar una familia falsa.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "Un espía, una asesina y una niña telépata forman una familia para mantener la paz mundial.",
    fecha_estreno: "2022-04-09",
    imagen_url: "./images/Anime/SpyXFamily.jpg",
  },
  {
    id: 6,
    titulo: "Death Note",
    titulo_original: "Desu Nōto",
    genero: ["Mystery", "Psychological", "Supernatural"],
    episodios: 37,
    estado: "Finalizado",
    // --- 1 COMENTARIO AÑADIDO ---
    comentarios: [
      {
        id: 1,
        usuario: "Kira_Justice",
        texto: "El duelo intelectual entre Light y L es legendario.",
        meGustas: 400,
        fecha: "2010-08-20"
      }
    ],
    personajes: [
      {
        nombre: "Light Yagami",
        genero: "Male",
        edad: 17,
        Imagen_url: "./images/Personajes/LightYagami.jpg",
        descripcion: "Un genio que encuentra la Death Note.",
        rol: "Protagonista",
      },
    ],
    sinopsis:
      "Una batalla intelectual entre un estudiante y un detective, ambos con planes de justicia opuestos.",
    fecha_estreno: "2006-10-04",
    imagen_url: "./images/Anime/DeathNote.jpg",
  },
  {
    id: 7,
    titulo: "Dr. Stone",
    titulo_original: "Dr. STONE",
    genero: ["Adventure", "SciFi", "Shonen"],
    episodios: 57,
    estado: "En emisión",
    // --- 2 COMENTARIOS AÑADIDOS ---
    comentarios: [
      {
        id: 1,
        usuario: "ScienceKingdom",
        texto: "¡Esto es emocionante al diez mil millones por ciento!",
        meGustas: 1000,
        fecha: "2019-08-10"
      },
      {
        id: 2,
        usuario: "ChromeScience",
        texto: "Me encanta como explican la ciencia de forma tan divertida y lógica.",
        meGustas: 450,
        fecha: "2020-01-15"
      }
    ],
    personajes: [
      {
        nombre: "Senku Ishigami",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "./images/Personajes/Senku.jpg",
        descripcion:
          "Un genio científico que busca reconstruir la civilización desde cero.",
        rol: "Protagonista",
      },
      {
        nombre: "Taiju Oki",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "./images/Personajes/Taiju.jpg",
        descripcion:
          "El mejor amigo de Senku, posee una resistencia física inagotable.",
        rol: "Secundario",
      },
      {
        nombre: "Kaseki",
        genero: "Hombre",
        edad: 60,
        Imagen_url: "./images/Personajes/Kaseki.jpg",
        descripcion:
          "Un viejo artesano de la aldea Ishigami con una habilidad divina para la construcción. Se vuelve extremadamente musculoso cuando se emociona por crear cosas nuevas.",
        rol: "Secundario",
      },
      {
        nombre: "Yuzuriha Ogawa",
        genero: "Mujer",
        edad: 18,
        Imagen_url: "./images/Personajes/Yuzuriha.jpg",
        descripcion:
          "Experta en artesanía y textiles, el interés amoroso de Taiju.",
        rol: "Secundario",
      },
      {
        nombre: "Tsukasa Shishio",
        genero: "Hombre",
        edad: 19,
        Imagen_url: "./images/Personajes/Tsukasa.jpg",
        descripcion:
          "El 'primate más fuerte de la secundaria', inicialmente se opone a la ciencia.",
        rol: "Antagonista",
      },
    ],
    sinopsis:
      "Un día fatídico, toda la humanidad queda petrificada por un destello de luz cegadora. Después de varios milenios, el estudiante de secundaria Taiju despierta y se encuentra perdido en un mundo de estatuas. Sin embargo, no está solo; su amigo amante de la ciencia, Senku, ha estado trabajando durante meses y tiene un gran plan en mente: ¡poner en marcha la civilización con el poder de la ciencia!",
    fecha_estreno: "2019-07-05",
    imagen_url: "./images/Anime/DrStone.jpg",
  },
];