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
        genero: "Female",
        edad: 1000,
        Imagen_url: "./src/assets/images/Personajes/Frieren.png",
        descripcion: "Una elfo maga que fue parte del grupo del héroe.",
      },
      {
        nombre: "Stark",
        genero: "Male",
        edad: 18,
        Imagen_url: "./src/assets/images/Personajes/Stark.jpg",
        descripcion: "El guerrero del nuevo grupo.",
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
      },
      {
        nombre: "Genos",
        genero: "Male",
        edad: 19,
        Imagen_url: "./src/assets/images/Personajes/Genos.jpg",
        descripcion: "Un cyborg discípulo de Saitama.",
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
      },
      {
        nombre: "All Might",
        genero: "Male",
        edad: 50,
        Imagen_url: "./src/assets/images/Personajes/AllMight.jpg",
        descripcion: "El Símbolo de la Paz.",
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
      },
    ],
    sinopsis:
      "Una batalla intelectual entre un estudiante y un detective, ambos con planes de justicia opuestos.",
    fecha_estreno: "2006-10-04",
    imagen_url: "./src/assets/images/anime/DeathNote.jpg",
  },
  {
    id: 7,
    titulo: "Kimi no Na wa.",
    titulo_original: "Your Name",
    genero: ["Romance", "Drama", "Supernatural"],
    episodios: 1,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Mitsuha Miyamizu",
        genero: "Female",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/MitsuhaMiyamizu.jpg",
        descripcion: "Una chica de pueblo que intercambia cuerpos.",
      },
    ],
    sinopsis:
      "Dos adolescentes que nunca se han conocido comienzan a intercambiar cuerpos de forma intermitente.",
    fecha_estreno: "2016-08-26",
    imagen_url: "./src/assets/images/anime/YourName.jpg",
  },
  {
    id: 8,
    titulo: "Haikyu!!",
    titulo_original: "Haikyū!!",
    genero: ["Sports", "Shonen", "School"],
    episodios: 85,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Shoyo Hinata",
        genero: "Male",
        edad: 16,
        Imagen_url: "./src/assets/images/Personajes/ShoyoHinata.jpg",
        descripcion: "Un joven y enérgico jugador de voleibol.",
      },
    ],
    sinopsis:
      "La historia de un equipo de voleibol de preparatoria que busca la gloria.",
    fecha_estreno: "2014-04-06",
    imagen_url: "./src/assets/images/anime/Haikyu.jpg",
  },
  {
    id: 9,
    titulo: "Re:Zero - Starting Life in Another World",
    titulo_original: "Re:Zero kara Hajimeru Isekai Seikatsu",
    genero: ["Fantasy", "Drama", "Psychological"],
    episodios: 50,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Subaru Natsuki",
        genero: "Male",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/SubaruNatsuki.jpg",
        descripcion:
          "Un chico transportado a otro mundo con la habilidad de revivir tras morir.",
      },
    ],
    sinopsis:
      "Un chico de instituto es invocado a un mundo de fantasía donde solo puede revivir tras morir.",
    fecha_estreno: "2016-04-04",
    imagen_url: "./src/assets/images/anime/ReZero.jpg",
  },
  {
    id: 10,
    titulo: "Cowboy Bebop",
    titulo_original: "Kaubōi Bibappu",
    genero: ["SciFi", "Space", "Action"],
    episodios: 26,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Spike Spiegel",
        genero: "Male",
        edad: 27,
        Imagen_url: "./src/assets/images/Personajes/SpikeSpiegel.jpg",
        descripcion: "Un cazarrecompensas que viaja por el espacio.",
      },
    ],
    sinopsis:
      "Las aventuras de un grupo de cazarrecompensas que viajan a bordo de la nave Bebop.",
    fecha_estreno: "1998-04-03",
    imagen_url: "./src/assets/images/anime/CowboyBebop.jpg",
  },
  {
    id: 11,
    titulo: "Neon Genesis Evangelion",
    titulo_original: "Shin Seiki Evangerion",
    genero: ["Mecha", "Psychological", "Drama"],
    episodios: 26,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Shinji Ikari",
        genero: "Male",
        edad: 14,
        Imagen_url: "./src/assets/images/Personajes/ShinjiIkari.jpg",
        descripcion:
          "Un joven reclutado para pilotar un robot gigante, Evangelion.",
      },
    ],
    sinopsis:
      "Adolescentes pilotan bio-máquinas para luchar contra seres gigantes conocidos como Ángeles.",
    fecha_estreno: "1995-10-04",
    imagen_url: "./src/assets/images/anime/Evangelion.jpg",
  },
  {
    id: 12,
    titulo: "Jujutsu Kaisen",
    titulo_original: "Jujutsu Kaisen",
    genero: ["Shonen", "Action", "Supernatural"],
    episodios: 47,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Yuji Itadori",
        genero: "Male",
        edad: 15,
        Imagen_url: "./src/assets/images/Personajes/YujiItadori.jpg",
        descripcion:
          "Un estudiante que se une a una organización secreta de hechiceros.",
      },
    ],
    sinopsis:
      "Un estudiante de secundaria se une a un club de ocultismo y se traga un objeto maldito.",
    fecha_estreno: "2020-10-03",
    imagen_url: "./src/assets/images/anime/JujutsuKaisen.jpg",
  },
  {
    id: 13,
    titulo: "Fruits Basket",
    titulo_original: "Fruits Basket",
    genero: ["Shojo", "Romance", "Slice of Life"],
    episodios: 63,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Tohru Honda",
        genero: "Female",
        edad: 16,
        Imagen_url: "./src/assets/images/Personajes/TohruHonda.jpg",
        descripcion: "Una chica optimista que vive con la familia Soma.",
      },
    ],
    sinopsis:
      "Una chica huérfana descubre el secreto de una familia que se transforma en animales del zodiaco chino.",
    fecha_estreno: "2019-04-06",
    imagen_url: "./src/assets/images/anime/FruitsBasket.jpg",
  },
  {
    id: 14,
    titulo: "Vinland Saga",
    titulo_original: "Vinrando Saga",
    genero: ["Seinen", "Historical", "Adventure"],
    episodios: 48,
    estado: "En emisión",
    personajes: [
      {
        nombre: "Thorfinn",
        genero: "Male",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/Thorfinn.jpg",
        descripcion: "Un guerrero vikingo buscando venganza.",
      },
    ],
    sinopsis:
      "Un joven crece entre vikingos, buscando vengar la muerte de su padre.",
    fecha_estreno: "2019-07-07",
    imagen_url: "./src/assets/images/anime/VinlandSaga.jpg",
  },
  {
    id: 15,
    titulo: "Nichijou - My Ordinary Life",
    titulo_original: "Nichijō",
    genero: ["Gag", "Comedy", "School"],
    episodios: 26,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Nano Shinonome",
        genero: "Female",
        edad: 1,
        Imagen_url: "./src/assets/images/Personajes/NanoShinonome.jpg",
        descripcion: "Un androide que desea ser una chica normal.",
      },
    ],
    sinopsis:
      "Historias absurdas y surrealistas de un grupo de estudiantes de secundaria y una profesora y su robot.",
    fecha_estreno: "2011-04-03",
    imagen_url: "./src/assets/images/anime/Nichijou.jpg",
  },
  {
    id: 16,
    titulo: "Code Geass",
    titulo_original: "Kōdo Giasu",
    genero: ["Mecha", "Military", "Super Power"],
    episodios: 50,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Lelouch Lamperouge",
        genero: "Male",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/LelouchLamperouge.jpg",
        descripcion: "Un príncipe exiliado que obtiene el poder del Geass.",
      },
    ],
    sinopsis:
      "Un estudiante recibe un poder que le permite obligar a otros a hacer lo que él diga.",
    fecha_estreno: "2006-10-06",
    imagen_url: "./src/assets/images/anime/CodeGeass.jpg",
  },
  {
    id: 17,
    titulo: "Monster",
    titulo_original: "Monsutā",
    genero: ["Seinen", "Mystery", "Thriller"],
    episodios: 74,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Kenzo Tenma",
        genero: "Male",
        edad: 35,
        Imagen_url: "./src/assets/images/Personajes/KenzoTenma.jpg",
        descripcion:
          "Un neurocirujano que busca al niño que salvó y se convirtió en un asesino en serie.",
      },
    ],
    sinopsis:
      "Un cirujano japonés en Alemania se ve envuelto en una caza de un asesino sociópata.",
    fecha_estreno: "2004-04-07",
    imagen_url: "./src/assets/images/anime/Monster.jpg",
  },
  {
    id: 18,
    titulo: "Your Lie in April",
    titulo_original: "Shigatsu wa Kimi no Uso",
    genero: ["Romance", "Drama", "Music"],
    episodios: 22,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Kosei Arima",
        genero: "Male",
        edad: 14,
        Imagen_url: "./src/assets/images/Personajes/KoseiArima.jpg",
        descripcion:
          "Un pianista prodigio que perdió su habilidad para escuchar la música.",
      },
    ],
    sinopsis:
      "Un pianista traumatizado redescubre el mundo de la música gracias a una violinista de espíritu libre.",
    fecha_estreno: "2014-10-10",
    imagen_url: "./src/assets/images/anime/YourLieInApril.jpg",
  },
  {
    id: 19,
    titulo: "Princess Mononoke",
    titulo_original: "Mononoke Hime",
    genero: ["Fantasy", "Adventure", "Historical"],
    episodios: 1,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Ashitaka",
        genero: "Male",
        edad: 17,
        Imagen_url: "./src/assets/images/Personajes/Ashitaka.jpg",
        descripcion: "El último príncipe de una tribu Emishi.",
      },
    ],
    sinopsis:
      "Un joven es maldecido y viaja al oeste, donde queda atrapado en una guerra entre dioses forestales y humanos.",
    fecha_estreno: "1997-07-12",
    imagen_url: "./src/assets/images/anime/PrincessMononoke.jpg",
  },
  {
    id: 20,
    titulo: "Wotakoi: Love is Hard for Otaku",
    titulo_original: "Wotaku ni Koi wa Muzukashii",
    genero: ["Josei", "Romance", "Slice of Life"],
    episodios: 11,
    estado: "Finalizado",
    personajes: [
      {
        nombre: "Narumi Momose",
        genero: "Female",
        edad: 26,
        Imagen_url: "./src/assets/images/Personajes/NarumiMomose.jpg",
        descripcion:
          "Una otaku de Shoujo que intenta mantener su afición en secreto.",
      },
    ],
    sinopsis:
      "La vida diaria y las relaciones románticas de un grupo de oficinistas otakus.",
    fecha_estreno: "2018-04-13",
    imagen_url: "./src/assets/images/anime/Wotakoi.jpg",
  },
];
