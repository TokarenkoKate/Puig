import {
  ContentBlockType,
  ImageGalleryItem,
  SliderItem,
} from "@/lib/types/components";
import { BrandContentType, PerfumeUniverse } from "@/lib/types/general";

export const christianlouboutinPerfumeUniverses: PerfumeUniverse[] = [
  {
    title: "Fetiche",
    subtitle: "5 ароматов",
    content: [
      {
        id: 1,
        type: ContentBlockType.QUOTE,
        text: "«У меня очень кокетливые отношения с FETICHE, и я осознаю, что моя работа, это и есть мой FETICHE»",
        author: "Christian Louboutin",
      },
      {
        id: 2,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "Спустя 10 лет после запуска LA LAQUE — символа бренда Christian Louboutin, мы с радостью знакомим Вас с новой коллекцией ароматов. Дизайн флаконов был вдохновлен знаковым силуэтом, культового флакона лака для ногтей. Флакон из увесистого стекла, с колпачком в форме культовой, узнаваемой шпильки.",
          "Провокационное называние коллекции Fétiche и при этом абсолютно понятные названия ароматов, предлагают удивительно неожиданные джусы.",
          "Какой Fétiche ТВОЙ?",
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/fetiche_1.png",
          height: 800,
          width: 800,
        },
        title: "L’AMBRE",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/fetiche_2.png",
          height: 800,
          width: 800,
        },
        title: "L’ÉBÈNE",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/fetiche_3.png",
          height: 800,
          width: 800,
        },
        title: "L'ENCENS",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/fetiche_4.png",
          height: 800,
          width: 800,
        },
        title: "L’IRIS",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/fetiche_5.png",
          height: 800,
          width: 800,
        },
        title: "LE CUIR",
      },
    ],
  },
  {
    title: "Loubiworld",
    subtitle: "9 ароматов",
    content: [
      {
        id: 1,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "Каждая парфюмерная композиция в коллекции LOUBIWORLD таит в себе личную историю, воспоминания и мечты ее создателя о путешествиях по миру.",
        ],
      },
      {
        id: 2,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "Кристиан Лубутен с детства проявлял неуемный интерес к людям и культурам всего мира. Легендарные путешествия дизайнера обуви подпитывают его творческий потенциал, и известно, что он находит вдохновение в самых отдаленных уголках земного шара!",
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_7.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIMAR",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_5.jpg",
          height: 500,
          width: 500,
        },
        title: "LOUBIHORSE",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_1.png",
          height: 800,
          width: 800,
        },
        title: "LOUBICROC",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_2.png",
          height: 500,
          width: 500,
        },
        title: "LOUBICROWN",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_3.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIDOO",
      },
      {
        id: 6,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_4.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIFUNK",
      },

      {
        id: 7,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_6.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIKISS",
      },
      {
        id: 8,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_8.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIRAJ",
      },
      {
        id: 9,
        url: {
          src: "/assets/images/brands/christianlouboutin/perfumes-gallery/loubiworld_9.png",
          height: 500,
          width: 500,
        },
        title: "LOUBIROUGE",
      },
    ],
  },
];

const christianlouboutinQuiz = [
  {
    question: "CHRISTIAN LOUBOUTIN родился в:",
    answers: [
      "Каир, Египет",
      "Париж, Франция",
      "Барселона, Испания",
      "Рим, Италия",
    ],
    correctAnswer: "Париж, Франция",
  },
  {
    question: "С чего началась история бренда:",
    answers: ["шпилька", "подошва", "сумка", "помада"],
    correctAnswer: "подошва",
  },
  {
    question: "Как назывался первый бьюти продукт бренда?",
    answers: ["Loubiworld", "Fetiche", "Rouge Louboutin", "La Laque"],
    correctAnswer: "La Laque",
  },
  {
    question:
      "Сколько парфюмерных вселенных существует в бренде CHRISTIAN LOUBOUTIN?",
    answers: ["3", "1", "2", "4"],
    correctAnswer: "2",
  },
  {
    question: "Назовите 2 основные ноты в аромате LOUBIDOO:",
    answers: [
      "Ирис и Роза",
      "Пачули и Ваниль",
      "Нероли и Клубника",
      "Роза и Клубника",
    ],
    correctAnswer: "Роза и Клубника",
  },
  {
    question: "Аромат LOUBIMAR:",
    answers: [
      "Цветочный, цитрусовый",
      "Фруктовый, амбровый",
      "Цветочный, древесный",
      "Амбровый, гурманский",
    ],
    correctAnswer: "Цветочный, цитрусовый",
  },
  {
    question: "Назовите 2 основные ноты в аромате Le Cuir:",
    answers: ["Кожа, роза", "Кожа, османтус", "Кожа, персик", "Кедр, мускус"],
    correctAnswer: "Кожа, османтус",
  },
  {
    question: "Аромат L'IRIS?",
    answers: [
      "Цветочный, древесный",
      "Цитрусовый, амбровый",
      "Цветочный, шипровый",
      "Цветочный, цветочный",
    ],
    correctAnswer: "Цветочный, шипровый",
  },
  {
    question: "Какой ноты НЕТ в аромате L'AMBRE:",
    answers: ["Перуанский бальзам", "Морская соль", "Тубероза", "Амбра"],
    correctAnswer: "Морская соль",
  },
  {
    question: "Назовите 2 основные ноты в аромате L'ENCENS:",
    answers: [
      "Ладан, сандал",
      "Ладан, черный перец",
      "Ладан, тубероза",
      "Сандал, уд",
    ],
    correctAnswer: "Ладан, черный перец",
  },
];

const christianlouboutinHistorySliderItems: SliderItem[] = [
  {
    year: 1974,
    content:
      "Кристиан Лубутен обнаруживает знак «На каблуках нельзя» в Музее африканского и океанического искусства (Palais de la Porte Dorée).",
  },
  {
    year: 1991,
    content:
      "Кристиан Лубутен запустил одноимённый бренд и открыл первый бутик в парижском Galerie Véro-Dodat.",
  },
  { year: 1992, content: "Появление красной подошвы, символа бренда." },
  {
    year: 1995,
    content:
      "Начало сотрудничества в качестве создателя обуви для показов с такими брендами, как Jean Paul Gaultier, Givenchy, Lanvin, Chloe и другие.",
  },
  {
    year: 2000,
    content:
      "Лубутен зарегистрировал товарный знак на красную подошву во Франции.",
  },
  { year: 2003, content: "Начало производства сумок." },
  {
    year: 2006,
    content:
      "Лубутен открыл мастерскую специальных заказов, где вручную изготавливают обувь по индивидуальным меркам.",
  },
  { year: 2009, content: "Запуск линии мужской обуви." },
  {
    year: 2011,
    content:
      "Создание туфель So Kate для свадьбы Кейт Мосс и выпуск их в продажу.",
  },
  {
    year: 2014,
    content:
      "Запуск Christian Louboutin Beauty, появление первого бьюти продукта, лака для ногтей La Laque.",
  },
  {
    year: 2020,
    content: "Появление невероятной коллекции ароматов Loubiworld",
  },
  {
    year: 2024,
    content: "Запуск парфюмерной коллекции Fetiche",
  },
];

export const christianlouboutinImagesGallery: ImageGalleryItem[] = [
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/1.jpg",
    width: 562,
    height: 720,
    altText: "Image-1",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/2.jpg",
    width: 562,
    height: 720,
    altText: "Image-2",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/3.jpg",
    width: 562,
    height: 720,
    altText: "Image-3",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/4.jpg",
    width: 562,
    height: 720,
    altText: "Image-4",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/5.jpg",
    width: 562,
    height: 720,
    altText: "Image-5",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/6.jpg",
    width: 562,
    height: 720,
    altText: "Image-6",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/7.jpg",
    width: 562,
    height: 720,
    altText: "Image-7",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/8.jpg",
    width: 562,
    height: 720,
    altText: "Image-8",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/9.jpg",
    width: 562,
    height: 720,
    altText: "Image-9",
  },
  {
    src: "/assets/images/brands/christianlouboutin/images-gallery/10.jpg",
    width: 562,
    height: 720,
    altText: "Image-10",
  },
];

export const christianlouboutinBrandContent: BrandContentType = {
  heroSection: {
    videoSrc: "/assets/video/brands/christianlouboutin/hero.mp4",
    title: "Christian Louboutin",
  },
  historySliderSection: christianlouboutinHistorySliderItems,
  bioSection: {
    content: {
      visible: [
        {
          id: 1,
          type: ContentBlockType.TEXT,
          paragraphs: [
            "Если задуматься, то все началось с туфель. А если точнее, то с подошвы. Та самая неприметная поверхность, которую однажды один творец смог прозорливо изменить уверенным штрихом красного лака для ногтей. Это простое, но в то же время смелое движение подчеркнуло подошву туфель, превратив ее в легко узнаваемое и незабываемое произведение искусства с авторским характерным почерком. И это все благодаря одному цвету, вызывающему невообразимо мощный резонанс. Ведь каждый знает, что, если появляются сомнения, всегда нужно надевать красное.",
            "Фурор, который Кристиан Лубутен произвел в мире красоты, начался с красного цвета — его почерка. Хотя бренд Christian Louboutin Beauty был основан в 2012-м, идея его создания восходит к 1992 году, когда модельер разработал коллекцию обуви Pensées. Не имея подходящего материала под рукой, он совершенно случайно нанес штрих красного лака для ногтей на подошву туфель. Вуаля! Так появилась легендарная красная лакированная подошва, и теперь туфли на шпильке, как и мир красоты, никогда не будут прежними.",
          ],
        },
      ],
      hidden: [
        {
          id: 2,
          type: ContentBlockType.TEXT,
          paragraphs: [
            "Но почему туфли стали для маэстро настоящим источником вдохновения? Ответ на этот вопрос заложен в детстве юного Кристиана. В 1974 Кристиан Лубутен обнаруживает знак «На каблуках нельзя» в Музее африканского и океанического искусства (Palais de la Porte Dorée). Изображение датируется 1950-ми годами и было предназначено для защиты деревянного пола музея от повреждений, вызванных каблуками посетителей. Кристиан никогда не видел такой обуви, которая своей изящностью резко контрастировала с преобладающей тенденцией 1970-х годов на туфли на плоском или толстом каблуке. Изображение очаровало его, и именно тогда Кристиан начал рисовать эскизы обуви.",
            "Тесная связь с красным цветом стала движущей силой для создания Christian Louboutin Beauty — в парижском доме красоты этот цвет возвышают и восхваляют. Это больше, чем просто оттенок палитры, это мировоззрение. Он отражает главные качества, вдохновившие Кристиана Лубутена на создание бренда, — независимость, сопричастность, креатив и, конечно же, игривость!",
            "В соответствии с представлением Кристиана Лубутена о красоте как объекте искусства, предметы из коллекции Christian Louboutin Beauty заключены в замысловатые упаковки. Например, металлический корпус губной помады Rouge Louboutin Velvet, созданный по мотивам ближневосточных реликвий и стиля ар-деко, напоминает драгоценный сосуд. Колпачок помады в форме башенки декорирован небольшим кольцом с продетой в него шелковой лентой, превращающим губную помаду в кулон.",
            "В то же время флакон лака для ногтей La Laque отличает эффектная высота в 20 сантиметров. Нa его создание маэстро вдохновили самые высокие каблуки туфель Ballerina Ultima. Культовый лак заключен в рифленый стеклянный флакон с уникальным эффектом омбре. Граненый сосуд дополнен высоким тонким колпачком, дизайн которого отсылает к искусству каллиграфии. Его уникальная форма вдохновила на создание целой коллекции ароматов Fetiche, которая стала ольфакторным предметом вожделения. Коллекция, которая раскрывает самые тайные грани или приглашает попробовать их примерить на себя.",
            "Мир ярких ольфакторных красок передает и еще одна уникальная парфюмерная коллекция Loubiworld, - настоящее ароматическое путешествие по самым любимым странам самого маэстро, где он, безусловно, любит черпать свое вдохновение для создания новых фешн-икон.",
            "Добро пожаловать в Мир Christian Louboutin!",
          ],
        },
      ],
    },
    video: [
      {
        id: 1,
        type: ContentBlockType.VIDEO,
        src: "/assets/video/brands/christianlouboutin/bio.mp4",
        previewSrc: "/assets/video/brands/christianlouboutin/bio_preview.jpg",
      },
    ],
  },
  videoGallerySection: [
    {
      previewImg:
        "/assets/video/brands/christianlouboutin/video-gallery/1_preview.jpg",
      videoSrc: "/assets/video/brands/christianlouboutin/video-gallery/1.mp4",
    },
    {
      previewImg:
        "/assets/video/brands/christianlouboutin/video-gallery/2_preview.jpg",
      videoSrc: "/assets/video/brands/christianlouboutin/video-gallery/2.mp4",
    },
    {
      previewImg:
        "/assets/video/brands/christianlouboutin/video-gallery/3_preview.jpg",
      videoSrc: "/assets/video/brands/christianlouboutin/video-gallery/3.mp4",
    },
  ],
  imagesSliderSection: christianlouboutinImagesGallery,
  perfumesSection: christianlouboutinPerfumeUniverses,
  quizSection: {
    title: "Christian Louboutin",
    steps: christianlouboutinQuiz,
  },
};
