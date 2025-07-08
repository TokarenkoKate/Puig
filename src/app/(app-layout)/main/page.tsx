import "./main-page.css";
import { BiographySection } from "./components/sections/biography-section";
import { CompanySection } from "./components/sections/company-section";
import { HistorySection } from "./components/sections/history-section";
import { MainPageImagesGallerySection } from "./components/sections/images-gallery-section";
import { PortfolioSection } from "./components/sections/portfolio-section";
import { TestSection } from "./components/sections/test-section";
import { HeroSection } from "@/components/custom/hero-section/hero-section";
import { VideoSection } from "./components/sections/video-section";
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
      <VideoSection videoSrc="/assets/video/puig-history.mp4" />
      <ValuesSection />
      <VideoSection videoSrc="/assets/video/values.mp4" />
      <PortfolioSection />
      <TestSection />
    </div>
  );
}
