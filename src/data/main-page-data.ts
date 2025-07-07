import {
  ImageGalleryItem,
  MultiStepQuizStep,
  SliderItem,
  ValueCardType,
} from "@/lib/types/components";

/*----------------------------------------*/
/*  Данные для главной страницы
/*----------------------------------------*/

export const mainPageHistorySliderItems: SliderItem[] = [
  {
    year: 1914,
    content: "Антонио Пуч Кастелло открывает компанию Antonio Puig S.A.",
  },
  {
    year: 1922,
    content: "В продажу поступила Milady, первая испанская губная помада.",
  },
  {
    year: 1940,
    content:
      "Запуск аромата Agua Lavanda Puig, который быстро станет символом успеха компании.",
  },
  {
    year: 1946,
    content:
      "Начинается строительство новой фабрики и здания головного офиса компании в Барселоне на улице Travessera de Gr\xe0cia",
  },
  {
    year: 1948,
    content:
      "Запуск аромата L'Air du Temps, который стал образцом для парфюмерной индустрии. Спустя 50 лет дом Nina Ricci войдет в состав компании Puig.",
  },
  {
    year: 1950,
    content:
      "Сыновья основателя (Антонио, Мариано, Жозе Мария и Энрике) присоединяются к семейному бизнесу. Основатель постепенно передает управление в их руки.",
  },
  {
    year: 1960,
    content:
      "Под управлением Мариано Пуча строится фабрика в Bes\xf3s industrial park для скорейшего выхода компании на международный рынок.",
  },
  {
    year: 1962,
    content: "Puig открывает офис в США.",
  },
  {
    year: 1968,
    content:
      "Запуск Agua Brava. Дизайнер Пако Рабан создает парфюмерный бизнес под собственной маркой во Франции.",
  },
  {
    year: 1969,
    content: "Создание Calandre ― первого женского аромата от Paco Rabanne.",
  },
  {
    year: 1972,
    content: "Открытие представительства компании Puig в Великобритании.",
  },
  {
    year: 1973,
    content:
      "Создание революционного мужского аромата Paco Rabanne pour Homme.",
  },
  {
    year: 1976,
    content: "Открытие фабрики Puig во Франции, в городе Шартр.",
  },
  {
    year: 1979,
    content: "Открытие представительства компании Puig в Панаме.",
  },
  {
    year: 1988,
    content:
      "Начало сотрудничества с Каролиной Эррера и запуск первого аромата Carolina Herrera.",
  },
  {
    year: 1995,
    content: "Приобретение Дома моды Carolina Herrera New York.",
  },
  {
    year: 1997,
    content:
      "Puig и Антонио Бандерас подписывают партнерское соглашение о производстве парфюмерии, выходит аромат Diavolo.",
  },
  {
    year: 1998,
    content: "Приобретение Дома моды Nina Ricci.",
  },
  {
    year: 2002,
    content:
      "Создание Calandre ― первого женского аромата от Paco Rabanne.Подписание соглашения о производстве парфюмерии для Comme des Gar\xe7ons.",
  },
  {
    year: 2004,
    content: "Марк Пуч назначен генеральным директором компании.",
  },
  {
    year: 2008,
    content:
      "Запуск аромата 1 Million от Paco Rabanne. Puig подписывает соглашение с певицей Шакирой о совместном производстве парфюмерии.",
  },
  {
    year: 2010,
    content: "Puig открывает дочернюю компанию в Росcии.",
  },
  {
    year: 2011,
    content: "Приобретение Дома моды Jean Paul Gaultier.",
  },
  {
    year: 2014,
    content:
      "В Барселоне завершено строительство 22-этажной Puig Tower для головного офиса компании. Компания отмечает свое 100-летие.",
  },
  {
    year: 2015,
    content:
      "Puig приобретает нишевые бренды Penhaligon’s и L’Artisan Parfumeur.",
  },
  {
    year: 2016,
    content: "Появление нишевой категории ароматов в России.",
  },
  {
    year: 2018,
    content: "Приобретение модного дома Dries Van Noten.",
  },
  {
    year: 2019,
    content: "Подписание соглашения с брендом Christian Louboutin Beauty.",
  },
  {
    year: 2019,
    content:
      "Запуск инновационной коллекции ароматов от Paco Rabanne – Pacollection.",
  },
  {
    year: 2020,
    content: "PUIG приобретает Charlotte Tilbury.",
  },
  {
    year: 2022,
    content: "PUIG приобретает Byredo.",
  },
];

export const mainPageImagesGallery: ImageGalleryItem[] = [
  {
    src: "/assets/images/main-gallery/1.webp",
    width: 562,
    height: 720,
    altText: "Image-1",
  },
  {
    src: "/assets/images/main-gallery/2.webp",
    width: 562,
    height: 720,
    altText: "Image-2",
  },
  {
    src: "/assets/images/main-gallery/3.webp",
    width: 562,
    height: 720,
    altText: "Image-3",
  },
  {
    src: "/assets/images/main-gallery/4.webp",
    width: 562,
    height: 720,
    altText: "Image-4",
  },
  {
    src: "/assets/images/main-gallery/5.webp",
    width: 562,
    height: 720,
    altText: "Image-5",
  },
];

export const mainPagePortfolioGroups = [
  {
    title: "Niche",
    items: [
      "Penhaligon's",
      "L'Artisan Parfumeur",
      "Byredo",
      "Herrera Confidential",
      "Christian Louboutin Beauty",
    ],
  },
  {
    title: "Prestige",
    items: ["Rabanne", "Carolina Herrera", "Nina Ricci", "Jean Paul Gaultier"],
  },
  {
    title: "Lifestyle",
    items: ["Banderas", "United Colors of Benetton", "Shakira"],
  },
];

export const mainPageMultiStepQuiz: MultiStepQuizStep[] = [
  {
    question: "В каком году основана компания PUIG?",
    answers: ["1984", "1922", "1956", "1914"],
    correctAnswer: "1914",
  },
  {
    question: "Кем была основана компания PUIG?",
    answers: ["Марк Пуч", "Марио Пуч", "Антонио Пуч", "Сантьяго Пуч"],
    correctAnswer: "Антонио Пуч",
  },
  {
    question: "Какой первый продукт был выпущен компанией PUIG?",
    answers: [
      "Аромат Aqua Lavanda",
      "Губная помада Milady",
      "Аромат Aqua Brava",
      "Аромат Calandre",
    ],
    correctAnswer: "Губная помада Milady",
  },
  {
    question: "Как назывался первый аромат, выпущенный PUIG в 1940г.?",
    answers: ["Pour Homme", "Aqua Brava", "Aqua Lavanda", "Mediterraneo"],
    correctAnswer: "Aqua Lavanda",
  },
  {
    question: "Какие Дома моды принадлежат PUIG:",
    answers: [
      "Nina Ricci, Antonio Banderas, Jean Paul Gaultier, Herrera Confidential",
      "Carolina Herrera, Paco Rabanne, Penhaligon's, Dries Van Noten",
      "Nina Ricci, Carolina Herrera, Paco Rabanne, Jean Paul Gaultier, Dries Van Noten",
      "Nina Ricci, Carolina Herrera, Benettone",
    ],
    correctAnswer:
      "Nina Ricci, Carolina Herrera, Paco Rabanne, Jean Paul Gaultier, Dries Van Noten",
  },
];

export const valueCards: ValueCardType[] = [
  {
    image: "/assets/images/values/1.png",
    title: "Постоянный Интерес",
    description:
      "Неустанно ищет возможности и идеи, которые формируют будущее, балансируя между смелостью и мудростью для достижения совершенства.",
  },
  {
    image: "/assets/images/values/2.png",
    title: "Заразительный Энтузиазм",
    description:
      "Бесконечная энергия, креативность и целеустремленность, которые позволяют нам чувствовать себя способными достичь большего и выразить свою подлинную сущность.",
  },
  {
    image: "/assets/images/values/3.png",
    title: "Справедливость и Уважение",
    description:
      "Всегда относиться друг к другу честно, прозрачно и искренне уважать наши обязательства, определяющие наше взаимодействие.",
  },
  {
    image: "/assets/images/values/4.png",
    title: "Предпринимательская Смелость",
    description:
      "Дом с основателями, содействующий предпринимательству на каждом этапе, стремящийся к революционным изменениям и инновациям, гибким, ориентированным на действия и устойчивое развитие.",
  },
  {
    image: "/assets/images/values/5.png",
    title: "Формирование Будущего",
    description:
      "Стремясь к созданию долгосрочных ценностей и выступая в качестве движущей силы устойчивых изменений для людей и планеты, мы создаем компанию, способную прослужить долгие годы, оставив невероятное наследие.",
  },
];
