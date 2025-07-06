import { ImagesGallery } from "@/components/custom/images-gallery/images-gallery";
import { mainPageImagesGallery } from "@/data/main-page-data";

export function MainPageImagesGallerySection() {
  return (
    <section className="w-fixed">
      <ImagesGallery images={mainPageImagesGallery} />
    </section>
  );
}
