import { ImagesGallery } from "@/components/custom/images-gallery/images-gallery";
import { ImageGalleryItem } from "@/lib/types/components";

export function BrandsImagesGallerySection({
  images,
}: {
  images: ImageGalleryItem[];
}) {
  return (
    <section className="w-fixed">
      <ImagesGallery images={images} />
    </section>
  );
}
