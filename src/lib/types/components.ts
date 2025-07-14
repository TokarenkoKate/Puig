/*----------------------------------------*/
/*  Типы для кастомных компонентов
/*----------------------------------------*/

export type ImageGalleryItem = {
  src: string;
  width: number;
  height: number;
  altText: string;
};

export type SliderItem = {
  year: number;
  content: string;
};

export type MultiStepQuizStep = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

export type ValueCardType = {
  image: string;
  title: string;
  description: string;
};

export enum ContentBlockType {
  TEXT = "text",
  HEADING = "heading",
  QUOTE = "quote",
  IMAGE = "image",
  VIDEO = "video",
}

export interface ContentBlockBase {
  id: string | number;
  type: ContentBlockType;
}

export interface ContentTextBlock extends ContentBlockBase {
  type: ContentBlockType.TEXT;
  paragraphs: Array<string>;
}

export interface ContentHeadingBlock extends ContentBlockBase {
  type: ContentBlockType.HEADING;
  heading: string;
  align?: "left" | "center";
}

export interface ContentQuoteBlock extends ContentBlockBase {
  type: ContentBlockType.QUOTE;
  text: string;
  author: string;
}

export interface ContentImageBlock extends ContentBlockBase {
  type: ContentBlockType.IMAGE;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ContentVideoBlock extends ContentBlockBase {
  type: ContentBlockType.VIDEO;
  src: string;
  previewSrc?: string;
}

export type ContentBlock =
  | ContentTextBlock
  | ContentHeadingBlock
  | ContentQuoteBlock
  | ContentImageBlock
  | ContentVideoBlock;
