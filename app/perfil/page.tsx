"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useFavorites } from "@/contexts/favorites-context";
import { AuthModal } from "@/components/auth-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories } from "@/data/categories";
import { interests as interestsList, regions } from "@/data/interests";
import { toast } from "sonner";
import { User, Heart, MapPin, Settings, LogOut, Save } from "lucide-react";

interface UserPreferences {
  regions: string[];
  interests: string[];
}

export default function ProfilePage() {
  const { user, logout, isLoading: isAuthLoading } = useAuth();
  const { favorites } = useFavorites();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>({
    regions: [],
    interests: [],
  });

  // Load preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem("userPreferences");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleRegionToggle = (region: string) => {
    setPreferences((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((r) => r !== region)
        : [...prev.regions, region],
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setPreferences((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const savePreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    toast.success("Preferências salvas com sucesso!");
  };

  // Loading state
  if (isAuthLoading) {
    return (
      <div className="hexagon-bg min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-10 bg-muted rounded w-48 mb-8" />
            <div className="h-40 bg-muted rounded-2xl" />
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
                <User className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Acesse seu perfil</h1>
              <p className="text-muted-foreground mb-6">
                Faça login para ver e editar suas preferências de viagem.
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
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Meu Perfil</h1>
          <p className="text-muted-foreground">
            Gerencie suas informações e preferências
          </p>
        </div>

        <div className="grid gap-6">
          {/* Profile card */}
          <Card className="rounded-2xl shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white text-2xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-xl gap-2 text-destructive hover:text-destructive bg-transparent"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{favorites.length}</p>
                    <p className="text-sm text-muted-foreground">Favoritos</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <MapPin className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {preferences.regions.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Regiões preferidas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences card */}
          <Card className="rounded-2xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Preferências de Viagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Regions */}
              <div>
                <Label className="text-sm font-semibold mb-3 block">
                  Regiões de interesse
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {regions.map((region) => (
                    <div
                      key={region}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
                        preferences.regions.includes(region)
                          ? "border-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => handleRegionToggle(region)}
                    >
                      <Checkbox
                        checked={preferences.regions.includes(region)}
                        onCheckedChange={() => handleRegionToggle(region)}
                      />
                      <span className="text-sm">{region}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <Label className="text-sm font-semibold mb-3 block">
                  Seus interesses
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestsList.map((interest) => (
                    <div
                      key={interest.id}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
                        preferences.interests.includes(interest.slug)
                          ? "border-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => handleInterestToggle(interest.slug)}
                    >
                      <Checkbox
                        checked={preferences.interests.includes(interest.slug)}
                        onCheckedChange={() =>
                          handleInterestToggle(interest.slug)
                        }
                      />
                      <span className="text-sm">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={savePreferences}
                className="btn-cta rounded-full gap-2"
              >
                <Save className="h-4 w-4" />
                Salvar preferências
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
