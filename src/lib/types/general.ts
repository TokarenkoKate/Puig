import { BRANDS } from "@/data/brands-data";
import { SliderItem, ImageGalleryItem, MultiStepQuizStep } from "./components";

/*----------------------------------------*/
/*  Общие переиспользуемые типы
/*----------------------------------------*/

export type BrandName = (typeof BRANDS)[keyof typeof BRANDS];

type ApiImageBase = {
  id: number;
  title: string;
};

export type ApiImageSrc = ApiImageBase & {
  src: {
    src: string;
    height: number;
    width: number;
  };
};

export type ApiImageUrl = ApiImageBase & {
  url: {
    src: string;
    height: number;
    width: number;
  };
};

export type PerfumeDescription = {
  title: string;
  text: string;
  video: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
};

export type PerfumeRightContent = {
  id: number;
  subtext: string;
  text: string;
};

export type PerfumeDetails = {
  brandTitle: string;
  title: string;
  transcription?: string;
  imagegallery: ApiImageSrc[];
  rightImage: ApiImageSrc[];
  rightContent: PerfumeRightContent[];
  description: PerfumeDescription[];
};

/**
 * Тип данных для секции "Парфюмерные вселенные"
 */
export type PerfumeUniverse = {
  title: string;
  subtitle: string;
  citation?: string;
  content: {
    text?: string;
    url?: string;
    image?: {
      src: string;
      height: number;
      width: number;
    };
  }[];
  images: ApiImageUrl[];
};

export type VideoGalleryItem = {
  previewImg: string;
  videoSrc: string;
};

export type BrandContentType = {
  heroSection: {
    videoSrc?: string;
    heroImageSrc?: string;
    title: string;
  };
  historySliderSection: SliderItem[];
  bioSection: {
    content: string[];
    videoSrc: string;
    paragraphs?: string[];
    bioTimelineData?: string[];
  };
  videoGallerySection?: VideoGalleryItem[];
  imagesSliderSection: ImageGalleryItem[];
  perfumesSection: PerfumeUniverse[];
  quizSection?: {
    title: string;
    steps: MultiStepQuizStep[];
  };
};
