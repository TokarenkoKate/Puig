import { FullscreenMedia } from "@/components/custom/fullscreen-media/fullscreen-media";
import { HeroSection } from "@/components/custom/hero-section/hero-section";
import {
  mainPageHeroSection,
  valuesVideo,
  valuesVideoProps,
} from "@/data/main-page-data";
import { BiographySection } from "./components/sections/biography-section";
import { CompanySection } from "./components/sections/company-section";
import { HistorySection } from "./components/sections/history-section";
import { MainPageImagesGallerySection } from "./components/sections/images-gallery-section";
import { MainPageVideosSection } from "./components/sections/main-page-videos-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { TestSection } from "./components/sections/test-section";
import { ValuesSection } from "./components/sections/values-section";
import "./main-page.css";

export default function Main() {
  return (
    <div>
      <HeroSection
        videoSrc={mainPageHeroSection.videoSrc}
        title={mainPageHeroSection.title}
      />
      <BiographySection />
      <CompanySection />
      <HistorySection />
      <MainPageImagesGallerySection />
      <MainPageVideosSection />
      <ValuesSection />
      <FullscreenMedia videoSrc={valuesVideo} videoProps={valuesVideoProps} />
      <PortfolioSection />
      <TestSection />
    </div>
  );
}
