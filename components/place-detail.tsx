"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { useFavorites } from "@/contexts/favorites-context";
import { AuthModal } from "@/components/auth-modal";
import { PlaceCard } from "@/components/place-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Heart,
  MapPin,
  Share2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Navigation,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import type { Place } from "@/data/places";

interface PlaceDetailProps {
  place: Place;
  relatedPlaces: Place[];
}

export function PlaceDetail({ place, relatedPlaces }: PlaceDetailProps) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const favorite = isFavorite(place.id);

  const handleFavoriteClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    toggleFavorite(place.id);
    toast.success(
      favorite ? "Removido dos favoritos" : "Adicionado aos favoritos"
    );
  };

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${place.latitude}, ${place.longitude}`);
    toast.success("Coordenadas copiadas!");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(place.address);
    toast.success("Endereço copiado!");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === place.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? place.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="hexagon-bg min-h-screen pb-16">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/explorar">
            <Button variant="ghost" className="gap-2 -ml-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Hero Image Gallery */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={place.gallery[currentImageIndex] || "/placeholder.svg"}
            alt={place.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Gallery navigation */}
          {place.gallery.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Gallery indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {place.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Actions on image */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md"
              onClick={() => {
                navigator.share?.({
                  title: place.name,
                  text: place.description,
                  url: window.location.href,
                });
              }}
            >
              <Share2 className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title card */}
              <Card className="rounded-2xl shadow-lg border-0 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white">
                      {place.region}
                    </Badge>
                    {place.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {place.name}
                  </h1>

                  <div className="flex items-center gap-1 text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {place.city}, {place.state}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {place.description}
                  </p>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3">Ideal para:</h3>
                    <div className="flex flex-wrap gap-2">
                      {place.interests.map((interest) => (
                        <Badge
                          key={interest}
                          variant="outline"
                          className="rounded-full"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery thumbnails */}
              {place.gallery.length > 1 && (
                <Card className="rounded-2xl shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Galeria</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {place.gallery.map((image, index) => (
                        <button
                          key={index}
                          className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
                            index === currentImageIndex
                              ? "ring-2 ring-primary"
                              : ""
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${place.name} - Foto ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Map card */}
              <Card className="rounded-2xl shadow-lg border-0 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Navigation className="h-5 w-5" />
                    Localização
                  </h3>

                  <div className="bg-muted rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{place.address}</p>
                        <p className="text-sm text-muted-foreground">
                          Lat: {place.latitude.toFixed(4)}, Lng:{" "}
                          {place.longitude.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl gap-2 bg-transparent"
                      onClick={copyAddress}
                    >
                      <Copy className="h-4 w-4" />
                      Copiar endereço
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full rounded-xl gap-2 bg-transparent"
                      onClick={copyCoordinates}
                    >
                      <Copy className="h-4 w-4" />
                      Copiar coordenadas
                    </Button>
                    <Button
                      className="w-full btn-cta rounded-xl gap-2"
                      onClick={() => {
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`,
                          "_blank"
                        );
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Abrir no Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Favorite CTA */}
              <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white">
                <CardContent className="p-6 text-center">
                  <Heart className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <h3 className="font-semibold text-lg mb-2">
                    {favorite ? "Salvo nos favoritos!" : "Gostou deste lugar?"}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {favorite
                      ? "Você pode acessar seus favoritos a qualquer momento."
                      : "Salve nos favoritos para planejar sua viagem depois."}
                  </p>
                  <Button
                    variant="secondary"
                    className="rounded-full w-full"
                    onClick={handleFavoriteClick}
                  >
                    {favorite ? (
                      <>
                        <Heart className="h-4 w-4 mr-2 fill-red-500 text-red-500" />
                        Remover dos favoritos
                      </>
                    ) : (
                      <>
                        <Heart className="h-4 w-4 mr-2" />
                        Salvar nos favoritos
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related places */}
          {relatedPlaces.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Lugares semelhantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPlaces.map((relatedPlace) => (
                  <PlaceCard key={relatedPlace.id} place={relatedPlace} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
