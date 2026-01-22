export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  region: "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";
  state: string;
  city: string;
  categories: string[];
  interests: string[];
  latitude: number;
  longitude: number;
  address: string;
  coverImage: string;
  gallery: string[];
  popularityScore: number;
}

export const places: Place[] = [
  {
    id: "1",
    name: "Chapada dos Veadeiros",
    slug: "chapada-dos-veadeiros",
    description:
      "Um dos destinos de ecoturismo mais impressionantes do Brasil, a Chapada dos Veadeiros oferece cachoeiras cristalinas, trilhas desafiadoras e paisagens de tirar o fôlego. O Parque Nacional é Patrimônio Natural da Humanidade pela UNESCO.",
    region: "Centro-Oeste",
    state: "Goiás",
    city: "Alto Paraíso de Goiás",
    categories: ["Cachoeiras", "Trilhas", "Ecoturismo", "Aventura"],
    interests: ["casal", "aventura", "low cost"],
    latitude: -14.1333,
    longitude: -47.5167,
    address: "Alto Paraíso de Goiás, GO",
    coverImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=600&fit=crop",
    ],
    popularityScore: 98,
  },
  {
    id: "2",
    name: "Lençóis Maranhenses",
    slug: "lencois-maranhenses",
    description:
      "Parque Nacional com dunas de areia branca e lagoas de água cristalina formadas pela chuva. Um cenário único no mundo que parece saído de um sonho.",
    region: "Nordeste",
    state: "Maranhão",
    city: "Barreirinhas",
    categories: ["Ecoturismo", "Aventura", "Praias"],
    interests: ["casal", "família", "aventura"],
    latitude: -2.4833,
    longitude: -43.1167,
    address: "Barreirinhas, MA",
    coverImage:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    popularityScore: 97,
  },
  {
    id: "3",
    name: "Bonito",
    slug: "bonito-ms",
    description:
      "Capital do ecoturismo brasileiro, Bonito oferece rios de águas cristalinas perfeitos para flutuação, grutas, cachoeiras e uma biodiversidade incrível.",
    region: "Centro-Oeste",
    state: "Mato Grosso do Sul",
    city: "Bonito",
    categories: ["Ecoturismo", "Aventura", "Cachoeiras"],
    interests: ["família", "casal", "aventura"],
    latitude: -21.1261,
    longitude: -56.4836,
    address: "Bonito, MS",
    coverImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    popularityScore: 96,
  },
  {
    id: "4",
    name: "Serra da Canastra",
    slug: "serra-da-canastra",
    description:
      "Berço do Rio São Francisco, a Serra da Canastra é famosa pela Cachoeira Casca D'Anta e pelo queijo artesanal. Trilhas incríveis e paisagens de tirar o fôlego.",
    region: "Sudeste",
    state: "Minas Gerais",
    city: "São Roque de Minas",
    categories: ["Cachoeiras", "Trilhas", "Gastronomia", "Rural"],
    interests: ["casal", "aventura", "pet-friendly"],
    latitude: -20.25,
    longitude: -46.4167,
    address: "São Roque de Minas, MG",
    coverImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    ],
    popularityScore: 89,
  },
  {
    id: "5",
    name: "Jalapão",
    slug: "jalapao",
    description:
      "Região de cerrado preservado com dunas douradas, fervedouros (nascentes que flutuam), cachoeiras e comunidades quilombolas. Aventura garantida.",
    region: "Norte",
    state: "Tocantins",
    city: "Mateiros",
    categories: ["Ecoturismo", "Aventura", "Trilhas"],
    interests: ["aventura", "casal"],
    latitude: -10.5456,
    longitude: -46.6297,
    address: "Mateiros, TO",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    ],
    popularityScore: 94,
  },
  {
    id: "6",
    name: "Gramado",
    slug: "gramado",
    description:
      "Cidade gaúcha com arquitetura europeia, chocolates artesanais, fondue e o famoso Natal Luz. Perfeita para casais e famílias em qualquer época do ano.",
    region: "Sul",
    state: "Rio Grande do Sul",
    city: "Gramado",
    categories: ["Gastronomia", "Cultura", "Rural"],
    interests: ["família", "casal", "bate-volta"],
    latitude: -29.3749,
    longitude: -50.8728,
    address: "Gramado, RS",
    coverImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    ],
    popularityScore: 95,
  },
  {
    id: "7",
    name: "Ouro Preto",
    slug: "ouro-preto",
    description:
      "Cidade histórica patrimônio da humanidade, com igrejas barrocas, ladeiras de pedra e rica história colonial. O coração da história do Brasil.",
    region: "Sudeste",
    state: "Minas Gerais",
    city: "Ouro Preto",
    categories: ["História", "Cultura", "Gastronomia"],
    interests: ["família", "casal", "bate-volta", "acessibilidade"],
    latitude: -20.3855,
    longitude: -43.5035,
    address: "Ouro Preto, MG",
    coverImage:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    ],
    popularityScore: 92,
  },
  {
    id: "8",
    name: "Alter do Chão",
    slug: "alter-do-chao",
    description:
      "Conhecida como o Caribe Brasileiro, possui praias de água doce no Rio Tapajós com areia branca. Mergulho, passeios de barco e contato com a cultura amazônica.",
    region: "Norte",
    state: "Pará",
    city: "Santarém",
    categories: ["Praias", "Ecoturismo", "Cultura"],
    interests: ["família", "casal", "low cost"],
    latitude: -2.5028,
    longitude: -55.0014,
    address: "Alter do Chão, Santarém, PA",
    coverImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    popularityScore: 91,
  },
  {
    id: "9",
    name: "Chapada Diamantina",
    slug: "chapada-diamantina",
    description:
      "Parque Nacional com grutas, cachoeiras, morros e o famoso Morro do Pai Inácio. Trilhas de todos os níveis e paisagens cinematográficas.",
    region: "Nordeste",
    state: "Bahia",
    city: "Lençóis",
    categories: ["Cachoeiras", "Trilhas", "Ecoturismo", "Aventura"],
    interests: ["aventura", "casal"],
    latitude: -12.5631,
    longitude: -41.3867,
    address: "Lençóis, BA",
    coverImage:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    ],
    popularityScore: 93,
  },
  {
    id: "10",
    name: "Campos do Jordão",
    slug: "campos-do-jordao",
    description:
      "Suíça brasileira com clima de montanha, arquitetura alpina, chocolates e fondue. Perfeita para o inverno, mas encantadora o ano todo.",
    region: "Sudeste",
    state: "São Paulo",
    city: "Campos do Jordão",
    categories: ["Gastronomia", "Cultura", "Rural"],
    interests: ["família", "casal", "bate-volta"],
    latitude: -22.7394,
    longitude: -45.5914,
    address: "Campos do Jordão, SP",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    ],
    popularityScore: 88,
  },
  {
    id: "11",
    name: "Paraty",
    slug: "paraty",
    description:
      "Centro histórico colonial com ruas de pedra, praias paradisíacas, cachoeiras e vida cultural intensa. Patrimônio da Humanidade pela UNESCO.",
    region: "Sudeste",
    state: "Rio de Janeiro",
    city: "Paraty",
    categories: ["História", "Praias", "Cultura", "Gastronomia"],
    interests: ["família", "casal", "acessibilidade"],
    latitude: -23.2178,
    longitude: -44.7131,
    address: "Paraty, RJ",
    coverImage:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
    ],
    popularityScore: 90,
  },
  {
    id: "12",
    name: "Aparados da Serra",
    slug: "aparados-da-serra",
    description:
      "Cânions impressionantes como o Itaimbezinho, com 720m de profundidade. Trilhas com vistas espetaculares e natureza preservada.",
    region: "Sul",
    state: "Rio Grande do Sul",
    city: "Cambará do Sul",
    categories: ["Trilhas", "Ecoturismo", "Aventura"],
    interests: ["aventura", "casal"],
    latitude: -29.1861,
    longitude: -50.0903,
    address: "Cambará do Sul, RS",
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    ],
    popularityScore: 87,
  },
  {
    id: "13",
    name: "Pirenópolis",
    slug: "pirenopolis",
    description:
      "Cidade histórica goiana com cachoeiras, gastronomia típica e as famosas Cavalhadas. Charme colonial a poucas horas de Brasília e Goiânia.",
    region: "Centro-Oeste",
    state: "Goiás",
    city: "Pirenópolis",
    categories: ["Cachoeiras", "História", "Gastronomia", "Cultura"],
    interests: ["família", "casal", "bate-volta", "pet-friendly"],
    latitude: -15.8508,
    longitude: -48.9594,
    address: "Pirenópolis, GO",
    coverImage:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=600&fit=crop",
    ],
    popularityScore: 85,
  },
  {
    id: "14",
    name: "Fernando de Noronha",
    slug: "fernando-de-noronha",
    description:
      "Arquipélago paradisíaco com as praias mais bonitas do Brasil. Mergulho com golfinhos, tartarugas e vida marinha exuberante.",
    region: "Nordeste",
    state: "Pernambuco",
    city: "Fernando de Noronha",
    categories: ["Praias", "Ecoturismo", "Aventura"],
    interests: ["casal", "aventura"],
    latitude: -3.8547,
    longitude: -32.4247,
    address: "Fernando de Noronha, PE",
    coverImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    popularityScore: 99,
  },
  {
    id: "15",
    name: "Foz do Iguaçu",
    slug: "foz-do-iguacu",
    description:
      "As Cataratas do Iguaçu são uma das 7 maravilhas naturais do mundo. Mais de 270 quedas d'água em cenário majestoso na tríplice fronteira.",
    region: "Sul",
    state: "Paraná",
    city: "Foz do Iguaçu",
    categories: ["Cachoeiras", "Ecoturismo", "Aventura"],
    interests: ["família", "casal", "acessibilidade"],
    latitude: -25.6953,
    longitude: -54.4367,
    address: "Foz do Iguaçu, PR",
    coverImage:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=600&fit=crop",
    ],
    popularityScore: 98,
  },
  {
    id: "16",
    name: "Capitólio",
    slug: "capitolio",
    description:
      "Cânions de até 20 metros de altura às margens do Lago de Furnas. Passeios de lancha, cachoeiras e o mirante dos Cânions.",
    region: "Sudeste",
    state: "Minas Gerais",
    city: "Capitólio",
    categories: ["Cachoeiras", "Aventura", "Ecoturismo"],
    interests: ["família", "casal", "aventura"],
    latitude: -20.6147,
    longitude: -46.0486,
    address: "Capitólio, MG",
    coverImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    ],
    popularityScore: 94,
  },
  {
    id: "17",
    name: "Morretes",
    slug: "morretes",
    description:
      "Cidade histórica paranaense acessada pela Serra do Mar de trem. Famosa pelo barreado, cachaças artesanais e natureza exuberante.",
    region: "Sul",
    state: "Paraná",
    city: "Morretes",
    categories: ["Gastronomia", "História", "Trilhas"],
    interests: ["família", "bate-volta", "low cost"],
    latitude: -25.4764,
    longitude: -48.8339,
    address: "Morretes, PR",
    coverImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    ],
    popularityScore: 82,
  },
  {
    id: "18",
    name: "São Thomé das Letras",
    slug: "sao-thome-das-letras",
    description:
      "Cidade mística nas montanhas mineiras, com casas de pedra, cachoeiras, grutas e lendas sobre OVNIs. Alternativa e cheia de energia.",
    region: "Sudeste",
    state: "Minas Gerais",
    city: "São Thomé das Letras",
    categories: ["Cachoeiras", "Trilhas", "Cultura"],
    interests: ["casal", "aventura", "low cost"],
    latitude: -21.7214,
    longitude: -44.9858,
    address: "São Thomé das Letras, MG",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    ],
    popularityScore: 80,
  },
  {
    id: "19",
    name: "Chapada dos Guimarães",
    slug: "chapada-dos-guimaraes",
    description:
      "Parque Nacional com cachoeiras, formações rochosas e o centro geodésico da América do Sul. Paredões de arenito vermelho impressionantes.",
    region: "Centro-Oeste",
    state: "Mato Grosso",
    city: "Chapada dos Guimarães",
    categories: ["Cachoeiras", "Trilhas", "Ecoturismo"],
    interests: ["família", "aventura"],
    latitude: -15.4608,
    longitude: -55.7497,
    address: "Chapada dos Guimarães, MT",
    coverImage:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    ],
    popularityScore: 86,
  },
  {
    id: "20",
    name: "Tiradentes",
    slug: "tiradentes",
    description:
      "Joia do barroco mineiro com igrejas históricas, gastronomia refinada e artesanato. Cidade pequena com grande charme e história.",
    region: "Sudeste",
    state: "Minas Gerais",
    city: "Tiradentes",
    categories: ["História", "Cultura", "Gastronomia"],
    interests: ["casal", "família", "bate-volta", "acessibilidade"],
    latitude: -21.1117,
    longitude: -44.1747,
    address: "Tiradentes, MG",
    coverImage:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    ],
    popularityScore: 88,
  },
];
