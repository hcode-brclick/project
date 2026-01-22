import { notFound } from "next/navigation";
import { places } from "@/data/places";
import { PlaceDetail } from "@/components/place-detail";

interface PlacePageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    notFound();
  }

  // Related places (same region or category)
  const relatedPlaces = places
    .filter(
      (p) =>
        p.id !== place.id &&
        (p.region === place.region ||
          p.categories.some((c) => place.categories.includes(c)))
    )
    .slice(0, 3);

  return <PlaceDetail place={place} relatedPlaces={relatedPlaces} />;
}
