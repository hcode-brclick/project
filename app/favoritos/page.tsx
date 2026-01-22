"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { useFavorites } from "@/contexts/favorites-context";
import { AuthModal } from "@/components/auth-modal";
import { PlaceCard } from "@/components/place-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { places } from "@/data/places";
import { categories } from "@/data/categories";
import { regions } from "@/data/interests";
import { Heart, MapPin, ArrowRight } from "lucide-react";

export default function FavoritesPage() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const { favorites } = useFavorites();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const favoritePlaces = useMemo(() => {
    let result = places.filter((place) => favorites.includes(place.id));

    if (filterRegion && filterRegion !== "all") {
      result = result.filter((place) => place.region === filterRegion);
    }

    if (filterCategory && filterCategory !== "all") {
      result = result.filter((place) =>
        place.categories.includes(filterCategory)
      );
    }

    return result;
  }, [favorites, filterRegion, filterCategory]);

  // Show loading state
  if (isAuthLoading) {
    return (
      <div className="hexagon-bg min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-10 bg-muted rounded w-48 mb-2" />
            <div className="h-6 bg-muted rounded w-72 mb-8" />
          </div>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <>
        <div className="hexagon-bg min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">
                Entre para ver seus favoritos
              </h1>
              <p className="text-muted-foreground mb-6">
                Faça login para salvar e acessar seus lugares favoritos de
                qualquer dispositivo.
              </p>
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                className="btn-cta rounded-full h-12 px-8"
              >
                Entrar agora
              </Button>
            </div>
          </div>
        </div>

        <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
      </>
    );
  }

  return (
    <div className="hexagon-bg min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Meus Favoritos</h1>
          <p className="text-muted-foreground">
            {favorites.length}{" "}
            {favorites.length === 1 ? "lugar salvo" : "lugares salvos"}
          </p>
        </div>

        {favorites.length > 0 ? (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Select value={filterRegion} onValueChange={setFilterRegion}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Região" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as regiões</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {favoritePlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoritePlaces.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Nenhum resultado com esses filtros
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar os filtros para ver mais lugares.
                </p>
                <Button
                  variant="outline"
                  className="rounded-xl bg-transparent"
                  onClick={() => {
                    setFilterRegion("all");
                    setFilterCategory("all");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto mb-6">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Você ainda não tem favoritos
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Explore lugares incríveis e salve seus favoritos para planejar sua
              próxima aventura.
            </p>
            <Link href="/explorar">
              <Button className="btn-cta rounded-full h-12 px-8">
                Explorar lugares
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
