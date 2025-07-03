import { ImagesGallery } from "@/components/custom/images-gallery/images-gallery";
import { mainPageImagesGallery } from "../../lib/placeholder-data";

export function MainPageImagesGallerySection() {
  return (
    <section className="w-fixed">
      <ImagesGallery images={mainPageImagesGallery} />
    </section>
  );
}
