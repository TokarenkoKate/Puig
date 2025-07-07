import "./main-page.css";
import { BiographySection } from "./components/sections/biography-section";
import { CompanySection } from "./components/sections/company-section";
import { HistorySection } from "./components/sections/history-section";
import { MainPageImagesGallerySection } from "./components/sections/images-gallery-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { TestSection } from "./components/sections/test-section";
import { ProductsSlider } from "./components/sections/products-slider-section";
import { HeroSection } from "@/components/custom/hero-section/hero-section";
import { HistoryVideoSection } from "./components/sections/history-video-section";
import { ValuesSection } from "./components/sections/values-section";

export default function Main() {
  return (
    <div>
      <HeroSection
        videoSrc="/assets/video/hero-video.mp4"
        title="Puig love brands"
      />
      <BiographySection />
      <CompanySection />
      <HistorySection />
      <MainPageImagesGallerySection />
      <HistoryVideoSection />
      <ValuesSection />
      <PortfolioSection />
      <TestSection />
      <ProductsSlider />
    </div>
  );
}
