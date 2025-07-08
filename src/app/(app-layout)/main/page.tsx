import "./main-page.css";
import { BiographySection } from "./components/sections/biography-section";
import { CompanySection } from "./components/sections/company-section";
import { HistorySection } from "./components/sections/history-section";
import { MainPageImagesGallerySection } from "./components/sections/images-gallery-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { TestSection } from "./components/sections/test-section";
import { HeroSection } from "@/components/custom/hero-section/hero-section";
import { ValuesSection } from "./components/sections/values-section";
import { FullscreenMedia } from "@/components/custom/fullscreen-media/fullscreen-media";
import {
  historyVideo,
  mainPageHeroSection,
  mainPageVideoProps,
  valuesVideo,
} from "@/data/main-page-data";

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
      <FullscreenMedia
        videoSrc={historyVideo}
        videoProps={mainPageVideoProps}
      />
      <ValuesSection />
      <FullscreenMedia videoSrc={valuesVideo} videoProps={mainPageVideoProps} />
      <PortfolioSection />
      <TestSection />
    </div>
  );
}
