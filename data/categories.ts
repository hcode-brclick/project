export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Cachoeiras",
    slug: "cachoeiras",
    icon: "Droplets",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "2",
    name: "Trilhas",
    slug: "trilhas",
    icon: "Mountain",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "3",
    name: "Gastronomia",
    slug: "gastronomia",
    icon: "UtensilsCrossed",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "4",
    name: "Cultura",
    slug: "cultura",
    icon: "Palette",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "5",
    name: "História",
    slug: "historia",
    icon: "Landmark",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "6",
    name: "Ecoturismo",
    slug: "ecoturismo",
    icon: "TreePine",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "7",
    name: "Aventura",
    slug: "aventura",
    icon: "Compass",
    color: "bg-red-100 text-red-600",
  },
  {
    id: "8",
    name: "Rural",
    slug: "rural",
    icon: "Tractor",
    color: "bg-lime-100 text-lime-600",
  },
  {
    id: "9",
    name: "Praias",
    slug: "praias",
    icon: "Waves",
    color: "bg-cyan-100 text-cyan-600",
  },
];
