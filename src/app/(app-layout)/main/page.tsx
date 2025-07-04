import "./main-page.css";
import { BiographySection } from "./components/sections/biography-section";
import { CompanySection } from "./components/sections/company-section";
import { HistorySection } from "./components/sections/history-section";
import { MainPageImagesGallerySection } from "./components/sections/images-gallery-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { TestSection } from "./components/sections/test-section";
import { ProductsSlider } from "./components/sections/products-slider-section";
import { HeroVideoSection } from "@/components/custom/hero-video-section/hero-video-section";

export default function Main() {
  return (
    <div>
      <HeroVideoSection
        videoSrc="/assets/video/hero-video.mp4"
        title="Puig love brands"
      />
      <BiographySection />
      <CompanySection />
      <HistorySection />
      <MainPageImagesGallerySection />
      <PortfolioSection />
      <TestSection />
      <ProductsSlider />
    </div>
  );
}
