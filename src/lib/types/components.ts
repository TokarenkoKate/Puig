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
