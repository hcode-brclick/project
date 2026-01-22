"use client";

import React from "react"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useFavorites } from "@/contexts/favorites-context";
import { AuthModal } from "./auth-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";
import type { Place } from "@/data/places";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    toggleFavorite(place.id);
  };

  const favorite = isFavorite(place.id);

  return (
    <>
      <Link href={`/lugares/${place.slug}`}>
        <Card className="group overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={place.coverImage || "/placeholder.svg"}
              alt={place.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Favorite button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-5 w-5 transition-colors ${
                  favorite
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground"
                }`}
              />
              <span className="sr-only">
                {favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              </span>
            </Button>

            {/* Region badge */}
            <Badge className="absolute top-3 left-3 bg-white/90 text-foreground hover:bg-white">
              {place.region}
            </Badge>

            {/* Location */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
              <MapPin className="h-4 w-4" />
              <span>
                {place.city}, {place.state}
              </span>
            </div>
          </div>

          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[#22C55E] transition-colors line-clamp-1">
              {place.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {place.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {place.categories.slice(0, 3).map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="text-xs rounded-full"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
