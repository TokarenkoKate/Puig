import { PerfumeUniverse } from "@/lib/types/general";
import { PerfumesGallery } from "../perfumes-gallery/perfumes-gallery";

type UniverseSectionProps = {
  perfumeUniverses: PerfumeUniverse[];
};

export function UniverseSection({ perfumeUniverses }: UniverseSectionProps) {
  return <PerfumesGallery perfumeUniverses={perfumeUniverses} />;
}
