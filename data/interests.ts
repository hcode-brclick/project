export interface Interest {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export const interests: Interest[] = [
  {
    id: "1",
    name: "Família",
    slug: "familia",
    icon: "Users",
  },
  {
    id: "2",
    name: "Casal",
    slug: "casal",
    icon: "Heart",
  },
  {
    id: "3",
    name: "Pet-friendly",
    slug: "pet-friendly",
    icon: "PawPrint",
  },
  {
    id: "4",
    name: "Acessibilidade",
    slug: "acessibilidade",
    icon: "Accessibility",
  },
  {
    id: "5",
    name: "Bate-volta",
    slug: "bate-volta",
    icon: "Clock",
  },
  {
    id: "6",
    name: "Low cost",
    slug: "low-cost",
    icon: "Wallet",
  },
  {
    id: "7",
    name: "Aventura",
    slug: "aventura",
    icon: "Flame",
  },
];

export const regions = [
  "Norte",
  "Nordeste",
  "Centro-Oeste",
  "Sudeste",
  "Sul",
] as const;

export type Region = (typeof regions)[number];
