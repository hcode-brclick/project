import React from "react"
import Link from "next/link";
import Image from "next/image";
import { GradientHeading } from "@/components/gradient-heading";
import { SearchBar } from "@/components/search-bar";
import { PlaceCard } from "@/components/place-card";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";
import { categories } from "@/data/categories";
import { regions } from "@/data/interests";
import {
  Droplets,
  Mountain,
  UtensilsCrossed,
  Palette,
  Landmark,
  TreePine,
  Compass,
  Tractor,
  Waves,
  ArrowRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Mountain,
  UtensilsCrossed,
  Palette,
  Landmark,
  TreePine,
  Compass,
  Tractor,
  Waves,
};

export default function HomePage() {
  const featuredPlaces = [...places]
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, 6);
  const searchParams = useSearchParams();

  return (
    <div className="hexagon-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GradientHeading className="text-4xl md:text-6xl lg:text-7xl mb-6">
              DESCUBRA O BRASIL
            </GradientHeading>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore os tesouros escondidos do interior brasileiro. Cachoeiras,
              trilhas, gastronomia e muito mais esperam por você.
            </p>

            <SearchBar className="max-w-2xl mx-auto mb-8" />

            <Link href="/explorar">
              <Button className="btn-cta rounded-full h-12 px-8 text-base">
                Explorar lugares
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative gradient circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </section>

      {/* Featured Places */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Destinos em alta
              </h2>
              <p className="text-muted-foreground">
                Os lugares mais populares do momento
              </p>
            </div>
            <Link href="/explorar">
              <Button variant="ghost" className="gap-2">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Explore por categoria
            </h2>
            <p className="text-muted-foreground">
              Encontre destinos que combinam com seu estilo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((category) => {
              const Icon = iconMap[category.icon] || Compass;
              return (
                <Link
                  key={category.id}
                  href={`/explorar?categoria=${category.name}`}
                  className="group"
                >
                  <div
                    className={`flex flex-col items-center p-6 rounded-2xl ${category.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 mb-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {categories.slice(5).map((category) => {
              const Icon = iconMap[category.icon] || Compass;
              return (
                <Link
                  key={category.id}
                  href={`/explorar?categoria=${category.name}`}
                  className="group"
                >
                  <div
                    className={`flex flex-col items-center p-6 rounded-2xl ${category.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 mb-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Explore por região
            </h2>
            <p className="text-muted-foreground">
              Cada canto do Brasil tem sua magia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {regions.map((region, index) => {
              const regionPlaces = places.filter((p) => p.region === region);
              const coverImage = regionPlaces[0]?.coverImage;

              return (
                <Link
                  key={region}
                  href={`/explorar?regiao=${region}`}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={coverImage || "/placeholder.svg"}
                    alt={region}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{region}</h3>
                    <p className="text-white/80 text-sm">
                      {regionPlaces.length} lugares
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">
            Pronto para sua próxima aventura?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Crie sua conta gratuita e salve seus destinos favoritos para
            planejar a viagem perfeita.
          </p>
          <Link href="/explorar">
            <Button className="bg-white text-[#8B5CF6] hover:bg-white/90 rounded-full h-12 px-8 text-base font-semibold">
              Começar a explorar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export { Loading };
