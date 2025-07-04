import { HeroVideoSection } from "@/components/custom/hero-video-section/hero-video-section";
import { brandsData } from "@/data/brands-data";
import { BrandName } from "@/lib/types/general";
import { BrandBioSection } from "./components/sections/brand-bio-section";
import { BrandHistorySection } from "./components/sections/brand-history-section";
import { BrandsImagesGallerySection } from "./components/sections/brands-images-gallery-section";
import { UniverseSection } from "./components/sections/universe-section";
import { BrandVideoGallery } from "./components/sections/brand-video-gallery";
import { BrandQuizSection } from "./components/sections/brand-quiz-section";
import "./brand-page.css";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brandName: BrandName }>;
}) {
  const { brandName } = await params;

  const {
    heroSection,
    historySliderSection,
    bioSection,
    videoGallerySection,
    imagesSliderSection,
    perfumesSection,
    quizSection,
  } = brandsData[brandName];

  return (
    <div>
      <HeroVideoSection
        videoSrc={heroSection.videoSrc}
        title={heroSection.title}
      />
      <BrandHistorySection sliderItems={historySliderSection} />
      <BrandBioSection
        content={bioSection.content}
        videoSrc={bioSection.videoSrc}
        paragraphs={bioSection.paragraphs}
      />
      <BrandsImagesGallerySection images={imagesSliderSection} />
      <BrandVideoGallery videoGalleryItems={videoGallerySection} />
      <UniverseSection perfumeUniverses={perfumesSection} />
      <BrandQuizSection title={quizSection.title} steps={quizSection.steps} />
    </div>
  );
}
