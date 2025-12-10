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
  {
    id: 8,
    titulo: "Kimetsu no Yaiba",
    titulo_original: "Kimetsu no Yaiba",
    genero: ["Action", "Historical", "Shonen"],
    episodios: 26,
    estado: "En emisión",
    comentarios: [
      {
        id: 1,
        usuario: "NezukoChan",
        texto: "La animación es de otro mundo, Ufotable se lució.",
        meGustas: 3200,
        fecha: "2019-09-28"
      }
    ],
    personajes: [
      {
        nombre: "Tanjiro Kamado",
        genero: "Hombre",
        edad: 15,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un joven bondadoso que se convierte en cazador de demonios para curar a su hermana.",
        rol: "Protagonista",
      },
      {
        nombre: "Nezuko Kamado",
        genero: "Mujer",
        edad: 14,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Hermana de Tanjiro, convertida en demonio pero conserva su humanidad.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Tanjiro emprende un viaje peligroso para buscar una cura para la maldición de su hermana y vengar a su familia asesinada por un demonio.",
    fecha_estreno: "2019-04-06",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 9,
    titulo: "Naruto Shippuden",
    titulo_original: "Naruto Shippuuden",
    genero: ["Action", "Adventure", "Martial Arts"],
    episodios: 500,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "Dattebayo_99",
        texto: "Crecí viendo esto. La saga de Pain es insuperable.",
        meGustas: 5000,
        fecha: "2017-03-23"
      }
    ],
    personajes: [
      {
        nombre: "Naruto Uzumaki",
        genero: "Hombre",
        edad: 17,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un ninja hiperactivo que busca convertirse en Hokage.",
        rol: "Protagonista",
      },
      {
        nombre: "Sasuke Uchiha",
        genero: "Hombre",
        edad: 17,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "El rival de Naruto, busca venganza por su clan.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Naruto regresa a la aldea después de dos años de entrenamiento para enfrentarse a la organización Akatsuki.",
    fecha_estreno: "2007-02-15",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 10,
    titulo: "One Piece",
    titulo_original: "One Piece",
    genero: ["Adventure", "Fantasy", "Shonen"],
    episodios: 1000,
    estado: "En emisión",
    comentarios: [
      {
        id: 1,
        usuario: "MugiwaraNoLuffy",
        texto: "El world building de Oda no tiene comparación.",
        meGustas: 4500,
        fecha: "2023-01-10"
      }
    ],
    personajes: [
      {
        nombre: "Monkey D. Luffy",
        genero: "Hombre",
        edad: 19,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Capitán de los Sombrero de Paja, hombre de goma que busca ser el Rey de los Piratas.",
        rol: "Protagonista",
      },
      {
        nombre: "Roronoa Zoro",
        genero: "Hombre",
        edad: 21,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Espadachín del grupo que usa tres espadas.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Luffy y su tripulación navegan por el Grand Line en busca del tesoro legendario One Piece.",
    fecha_estreno: "1999-10-20",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 11,
    titulo: "Jujutsu Kaisen",
    titulo_original: "Jujutsu Kaisen",
    genero: ["Action", "Supernatural"],
    episodios: 24,
    estado: "En emisión",
    comentarios: [
      {
        id: 1,
        usuario: "GojoSatoruLover",
        texto: "Las peleas son dinámicas y la banda sonora es brutal.",
        meGustas: 2100,
        fecha: "2021-02-14"
      }
    ],
    personajes: [
      {
        nombre: "Yuji Itadori",
        genero: "Hombre",
        edad: 15,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un estudiante con una fuerza física inmensa que se traga un objeto maldito.",
        rol: "Protagonista",
      },
      {
        nombre: "Satoru Gojo",
        genero: "Hombre",
        edad: 28,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "El hechicero más fuerte, maestro de Itadori.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Yuji Itadori se une a una organización secreta de hechiceros para matar a una poderosa maldición llamada Ryomen Sukuna.",
    fecha_estreno: "2020-10-03",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 12,
    titulo: "Fullmetal Alchemist: Brotherhood",
    titulo_original: "Hagane no Renkinjutsushi",
    genero: ["Adventure", "Drama", "Fantasy"],
    episodios: 64,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "AlchemyMaster",
        texto: "Posiblemente el mejor anime de la historia. Un final perfecto.",
        meGustas: 6000,
        fecha: "2010-07-05"
      }
    ],
    personajes: [
      {
        nombre: "Edward Elric",
        genero: "Hombre",
        edad: 15,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "El Alquimista de Acero, busca la Piedra Filosofal.",
        rol: "Protagonista",
      },
      {
        nombre: "Alphonse Elric",
        genero: "Hombre",
        edad: 14,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Hermano de Edward, su alma está atada a una armadura.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Dos hermanos buscan la Piedra Filosofal para restaurar sus cuerpos después de un intento fallido de revivir a su madre.",
    fecha_estreno: "2009-04-05",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 13,
    titulo: "Sword Art Online",
    titulo_original: "Sword Art Online",
    genero: ["Action", "Adventure"],
    episodios: 25,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "KiritoBeater",
        texto: "El primer arco de Aincrad es legendario.",
        meGustas: 1200,
        fecha: "2012-11-10"
      }
    ],
    personajes: [
      {
        nombre: "Kirito",
        genero: "Hombre",
        edad: 16,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un jugador solitario que lucha por sobrevivir en el juego mortal.",
        rol: "Protagonista",
      },
      {
        nombre: "Asuna",
        genero: "Mujer",
        edad: 17,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Sublíder del gremio Caballeros de la Hermandad de la Sangre.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Jugadores de un VRMMORPG quedan atrapados dentro del juego, donde morir en el juego significa morir en la vida real.",
    fecha_estreno: "2012-07-08",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 14,
    titulo: "Tokyo Ghoul",
    titulo_original: "Tokyo Ghoul",
    genero: ["Action", "Horror", "Psychological"],
    episodios: 12,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "KanekiKen",
        texto: "Oshiete oshiete... el opening es inolvidable.",
        meGustas: 1500,
        fecha: "2014-09-20"
      }
    ],
    personajes: [
      {
        nombre: "Ken Kaneki",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un estudiante universitario que se convierte en mitad ghoul.",
        rol: "Protagonista",
      },
      {
        nombre: "Touka Kirishima",
        genero: "Mujer",
        edad: 17,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Una ghoul que intenta vivir entre humanos.",
        rol: "Secundario",
      }
    ],
    sinopsis: "En Tokio, criaturas llamadas Ghouls viven entre los humanos y se alimentan de su carne. Kaneki se ve arrastrado a su mundo.",
    fecha_estreno: "2014-07-04",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 15,
    titulo: "Hunter x Hunter",
    titulo_original: "Hunter x Hunter (2011)",
    genero: ["Action", "Adventure", "Fantasy"],
    episodios: 148,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "GonFreecss",
        texto: "El arco de las Hormigas Quimera es una obra de arte narrativa.",
        meGustas: 2800,
        fecha: "2014-06-15"
      }
    ],
    personajes: [
      {
        nombre: "Gon Freecss",
        genero: "Hombre",
        edad: 12,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un niño optimista que quiere convertirse en Cazador para encontrar a su padre.",
        rol: "Protagonista",
      },
      {
        nombre: "Killua Zoldyck",
        genero: "Hombre",
        edad: 12,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un ex-asesino y el mejor amigo de Gon.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Gon Freecss aspira a convertirse en Cazador, una élite excepcional de la humanidad, para encontrar a su padre.",
    fecha_estreno: "2011-10-02",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 16,
    titulo: "Dragon Ball Z",
    titulo_original: "Dragon Ball Z",
    genero: ["Action", "Adventure", "Fantasy"],
    episodios: 291,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "SaiyanPrince",
        texto: "El padre del Shonen moderno. Kame Hame Ha!",
        meGustas: 10000,
        fecha: "1996-02-01"
      }
    ],
    personajes: [
      {
        nombre: "Goku",
        genero: "Hombre",
        edad: 30,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Saiyajin criado en la Tierra que protege el universo.",
        rol: "Protagonista",
      },
      {
        nombre: "Vegeta",
        genero: "Hombre",
        edad: 35,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Príncipe de los Saiyajin, eterno rival de Goku.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Goku y sus amigos defienden la Tierra contra villanos intergalácticos, androides y criaturas mágicas.",
    fecha_estreno: "1989-04-26",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 17,
    titulo: "Neon Genesis Evangelion",
    titulo_original: "Shin Seiki Evangelion",
    genero: ["Action", "Mecha", "Psychological"],
    episodios: 26,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "ShinjiGetInTheRobot",
        texto: "No entendí el final, pero me encantó.",
        meGustas: 900,
        fecha: "2005-08-12"
      }
    ],
    personajes: [
      {
        nombre: "Shinji Ikari",
        genero: "Hombre",
        edad: 14,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Piloto del EVA-01, lucha con problemas de abandono y depresión.",
        rol: "Protagonista",
      },
      {
        nombre: "Rei Ayanami",
        genero: "Mujer",
        edad: 14,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "La misteriosa piloto del EVA-00.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Adolescentes deben pilotar máquinas gigantes biológicas llamadas Evangelion para proteger a la humanidad de los Ángeles.",
    fecha_estreno: "1995-10-04",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 18,
    titulo: "Cowboy Bebop",
    titulo_original: "Cowboy Bebop",
    genero: ["Action", "SciFi", "Space"],
    episodios: 26,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "SpaceCowboy",
        texto: "See you space cowboy... La música jazz es perfecta.",
        meGustas: 2300,
        fecha: "2001-05-20"
      }
    ],
    personajes: [
      {
        nombre: "Spike Spiegel",
        genero: "Hombre",
        edad: 27,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un cazarrecompensas con un pasado oscuro y experto en artes marciales.",
        rol: "Protagonista",
      },
      {
        nombre: "Jet Black",
        genero: "Hombre",
        edad: 36,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Ex-policía y dueño de la nave Bebop.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Un grupo de cazarrecompensas inadaptados viaja por la galaxia en su nave, el Bebop, atrapando criminales.",
    fecha_estreno: "1998-04-03",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 19,
    titulo: "Steins;Gate",
    titulo_original: "Steins;Gate",
    genero: ["SciFi", "Thriller", "Psychological"],
    episodios: 24,
    estado: "Finalizado",
    comentarios: [
      {
        id: 1,
        usuario: "MadScientist",
        texto: "El mejor anime de viajes en el tiempo. El Psy Kongroo.",
        meGustas: 3100,
        fecha: "2013-09-11"
      }
    ],
    personajes: [
      {
        nombre: "Rintarou Okabe",
        genero: "Hombre",
        edad: 18,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un autoproclamado científico loco que descubre cómo enviar mensajes al pasado.",
        rol: "Protagonista",
      },
      {
        nombre: "Kurisu Makise",
        genero: "Mujer",
        edad: 18,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Una genio de la neurociencia que se ve envuelta en los experimentos de Okabe.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Un grupo de amigos crea accidentalmente una máquina capaz de enviar mensajes al pasado, alterando el presente con graves consecuencias.",
    fecha_estreno: "2011-04-06",
    imagen_url: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 20,
    titulo: "Re:Zero",
    titulo_original: "Re:Zero kara Hajimeru Isekai Seikatsu",
    genero: ["Drama", "Fantasy", "Psychological"],
    episodios: 50,
    estado: "En emisión",
    comentarios: [
      {
        id: 1,
        usuario: "RemBestGirl",
        texto: "El sufrimiento de Subaru es real, pero la historia te atrapa.",
        meGustas: 1800,
        fecha: "2016-08-30"
      }
    ],
    personajes: [
      {
        nombre: "Subaru Natsuki",
        genero: "Hombre",
        edad: 17,
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Un chico transportado a otro mundo con la habilidad de regresar de la muerte.",
        rol: "Protagonista",
      },
      {
        nombre: "Emilia",
        genero: "Mujer",
        edad: 19, // Aparentes
        Imagen_url: "https://picsum.photos/600/300?random=1",
        descripcion: "Una medio elfa plateada candidata al trono real.",
        rol: "Secundario",
      }
    ],
    sinopsis: "Subaru Natsuki es transportado a un mundo de fantasía donde descubre que cada vez que muere, el tiempo retrocede.",
    fecha_estreno: "2016-04-04",
    imagen_url: "https://picsum.photos/600/300?random=1",
  }
];