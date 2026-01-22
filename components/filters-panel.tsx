"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { interests, regions } from "@/data/interests";
import { places } from "@/data/places";
import { SlidersHorizontal, X } from "lucide-react";

interface FiltersPanelProps {
  selectedRegion?: string;
  selectedCategories: string[];
  selectedInterests: string[];
  sortBy: string;
  onRegionChange: (region: string) => void;
  onCategoryChange: (category: string) => void;
  onInterestChange: (interest: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export function FiltersPanel({
  selectedRegion,
  selectedCategories,
  selectedInterests,
  sortBy,
  onRegionChange,
  onCategoryChange,
  onInterestChange,
  onSortChange,
  onClearFilters,
}: FiltersPanelProps) {
  const hasFilters =
    selectedRegion ||
    selectedCategories.length > 0 ||
    selectedInterests.length > 0;

  // Get unique states
  const states = [...new Set(places.map((p) => p.state))].sort();

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Region */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Região</Label>
        <Select value={selectedRegion || "all"} onValueChange={onRegionChange}>
          <SelectTrigger className="rounded-xl">
            <SelectValue placeholder="Todas as regiões" />
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
      </div>

      {/* Sort */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Ordenar por</Label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="rounded-xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Mais populares</SelectItem>
            <SelectItem value="az">A-Z</SelectItem>
            <SelectItem value="recent">Mais recentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Categorias</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => onCategoryChange(category.name)}
              />
              <Label
                htmlFor={`cat-${category.id}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Interesses</Label>
        <div className="space-y-2">
          {interests.map((interest) => (
            <div key={interest.id} className="flex items-center gap-2">
              <Checkbox
                id={`int-${interest.id}`}
                checked={selectedInterests.includes(interest.slug)}
                onCheckedChange={() => onInterestChange(interest.slug)}
              />
              <Label
                htmlFor={`int-${interest.id}`}
                className="text-sm font-normal cursor-pointer"
              >
                {interest.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasFilters && (
        <Button
          variant="outline"
          className="w-full rounded-xl bg-transparent"
          onClick={onClearFilters}
        >
          <X className="h-4 w-4 mr-2" />
          Limpar filtros
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-xl bg-transparent">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
              {hasFilters && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {selectedCategories.length +
                    selectedInterests.length +
                    (selectedRegion ? 1 : 0)}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Refine sua busca por lugares incríveis
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FiltersContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Filtros</h3>
          <FiltersContent />
        </div>
      </aside>
    </>
  );
}
