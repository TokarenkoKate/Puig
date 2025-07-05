import { perfumesDetailsData } from "@/data/brands-data";
import { BrandName } from "@/lib/types/general";
import { useParams } from "next/navigation";
import { PerfumeDetailsComponent } from "../details/perfume-details";

export function PerfumeUniverseCardModal({
  perfumeName,
}: {
  perfumeName: string;
}) {
  const { brandName } = useParams<{ brandName: BrandName }>();
  const brandParfumes = perfumesDetailsData[brandName];

  const perfumeData = brandParfumes.find(
    (perfume) => perfume.title?.toLowerCase() === perfumeName.toLowerCase()
  );

  if (!perfumeData) {
    return null;
  }

  return <PerfumeDetailsComponent perfumeDetails={perfumeData} />;
}
