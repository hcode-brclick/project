"use client";

import { useState, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/search-bar";
import { PlaceCard } from "@/components/place-card";
import { FiltersPanel } from "@/components/filters-panel";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";
import { MapPin, Search } from "lucide-react";
import Loading from "./loading"; // Import the loading component

const ITEMS_PER_PAGE = 9;

function ExploreContent() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPlaces = useMemo(() => {
    let result = [...places];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (place) =>
          place.name.toLowerCase().includes(query) ||
          place.city.toLowerCase().includes(query) ||
          place.state.toLowerCase().includes(query)
      );
    }

    // Region filter
    if (selectedRegion && selectedRegion !== "all") {
      result = result.filter((place) => place.region === selectedRegion);
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((place) =>
        selectedCategories.some((cat) => place.categories.includes(cat))
      );
    }

    // Interest filter
    if (selectedInterests.length > 0) {
      result = result.filter((place) =>
        selectedInterests.some((int) => place.interests.includes(int))
      );
    }

    // Sorting
    switch (sortBy) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "recent":
        result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case "popular":
      default:
        result.sort((a, b) => b.popularityScore - a.popularityScore);
    }

    return result;
  }, [searchQuery, selectedRegion, selectedCategories, selectedInterests, sortBy]);

  const totalPages = Math.ceil(filteredPlaces.length / ITEMS_PER_PAGE);
  const paginatedPlaces = filteredPlaces.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region === "all" ? "" : region);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedRegion("");
    setSelectedCategories([]);
    setSelectedInterests([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="hexagon-bg min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Explorar</h1>
          <p className="text-muted-foreground">
            Descubra lugares incríveis no interior do Brasil
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome, cidade ou estado..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 h-12 rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters */}
          <FiltersPanel
            selectedRegion={selectedRegion}
            selectedCategories={selectedCategories}
            selectedInterests={selectedInterests}
            sortBy={sortBy}
            onRegionChange={handleRegionChange}
            onCategoryChange={handleCategoryChange}
            onInterestChange={handleInterestChange}
            onSortChange={handleSortChange}
            onClearFilters={handleClearFilters}
          />

          {/* Results */}
          <div className="flex-1">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {filteredPlaces.length}
                </span>{" "}
                {filteredPlaces.length === 1
                  ? "lugar encontrado"
                  : "lugares encontrados"}
              </p>
            </div>

            {paginatedPlaces.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    <Button
                      variant="outline"
                      className="rounded-xl bg-transparent"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </Button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "ghost"
                            }
                            size="icon"
                            className={`rounded-xl ${
                              currentPage === page ? "btn-cta" : ""
                            }`}
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </Button>
                        )
                      )}
                    </div>

                    <Button
                      variant="outline"
                      className="rounded-xl bg-transparent"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Próxima
                    </Button>
                  </div>
                )}
              </>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Nenhum lugar encontrado
                </h3>
                <p className="text-muted-foreground max-w-sm mb-6">
                  Tente ajustar os filtros ou buscar por outros termos para
                  encontrar o destino perfeito.
                </p>
                <Button
                  variant="outline"
                  className="rounded-xl bg-transparent"
                  onClick={handleClearFilters}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ExploreContent />
    </Suspense>
  );
}
