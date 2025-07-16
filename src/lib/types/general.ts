import { BRANDS } from "@/data/brands-data";
import {
  SliderItem,
  ImageGalleryItem,
  MultiStepQuizStep,
  ContentBlock,
  ContentVideoBlock,
} from "./components";

/*----------------------------------------*/
/*  Общие переиспользуемые типы
/*----------------------------------------*/

export type BrandName = (typeof BRANDS)[keyof typeof BRANDS];

// Типы для изображений
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
  rightImage: { id: number; src: ApiImageSrc["src"]; components: string[] }[];
  rightContent: PerfumeRightContent[];
  description: ContentBlock[];
};

/**
 * Тип данных для секции "Парфюмерные вселенные"
 */
export type PerfumeUniverse = {
  title: string;
  subtitle: string;
  content: ContentBlock[];
  images: ApiImageUrl[];
};

export type VideoGalleryItem = {
  previewImg: string;
  videoSrc: string;
};

export type BrandContentType = {
  heroSection: {
    videoSrc?: string;
    title: string;
  };
  historySliderSection: SliderItem[];
  bioSection: {
    content: {
      visible: ContentBlock[];
      hidden: ContentBlock[];
    };
    video?: ContentVideoBlock[];
  };
  videoGallerySection?: VideoGalleryItem[];
  imagesSliderSection: ImageGalleryItem[];
  perfumesSection: PerfumeUniverse[];
  quizSection?: {
    title: string;
    steps: MultiStepQuizStep[];
  };
};
