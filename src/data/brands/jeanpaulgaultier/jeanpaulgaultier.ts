import {
  ContentBlockType,
  ImageGalleryItem,
  SliderItem,
} from "@/lib/types/components";
import { BrandContentType, PerfumeUniverse } from "@/lib/types/general";

export const jeanpaulgaultierPerfumeUniverses: PerfumeUniverse[] = [
  {
    title: "Classique \u0026 Le Male",
    subtitle: "5 ароматов",
    content: [
      {
        id: 1,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "Это настоящая любовная история а ля Готье, которая случилась в морском порту! История отдающая дань уважения символическим и иконическим кодам модного дома Готье: корсету и тельняшке.",
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/classiquelemale1.webp",
          height: 800,
          width: 800,
        },
        title: "CLASSIQUE EDT",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/classiquelemale2.webp",
          height: 800,
          width: 800,
        },
        title: "LE MALE EDT",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/classiquelemale3.webp",
          height: 800,
          width: 800,
        },
        title: "LE MALE LE PARFUM EDP",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/classiquelemale4.webp",
          height: 800,
          width: 800,
        },
        title: "LE MALE ELIXIR",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/classiquelemale5.png",
          height: 800,
          width: 800,
        },
        title: "LE MALE ELIXIR ABSOLU",
      },
    ],
  },
  {
    title: "La Belle \u0026 Le Beau",
    subtitle: "5 ароматов",
    content: [
      {
        id: 1,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "LA BELLE \u0026 LE BEAU — фантазия дизайнера о райских садах. Готье, подобному создателю, в течении 7 дней воплощал нашу идеальную пару в реальность, используя свой безграничный творческий потенциал!",
        ],
      },
    ],

    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/labellelebeau1.webp",
          height: 800,
          width: 800,
        },
        title: "LA BELLE EDP",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/labellelebeau2.webp",
          height: 800,
          width: 800,
        },
        title: "LE BEAU EDT",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/labellelebeau3.webp",
          height: 800,
          width: 800,
        },
        title: "LA BELLE LE PARFUM EDP",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/labellelebeau4.webp",
          height: 800,
          width: 800,
        },
        title: "LE BEAU PARADISE GARDEN",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/labellelebeau5.webp",
          height: 800,
          width: 800,
        },
        title: "LA BELLE PARADISE GARDEN",
      },
    ],
  },
  {
    title: "Scandal",
    subtitle: "5 ароматов",
    content: [
      {
        id: 1,
        type: ContentBlockType.TEXT,
        paragraphs: [
          "Жан-Поль Готье нарядил мужчин в юбки! Скандал!\nОн одел Мадонну в конусообразный бюстгальтер! Скандал!\nОн привел моделей с улиц для своих показов! Скандал!\nОн первым отверг гендерные границы! Скандал!\nОн назвал коллекцию весна/лето 1988 «Консьерж на лестнице»! Скандал!\nОн всегда находил «политически корректное» скучным.\nЖан-Поль Готье был первым кто знал, как создать...Скандал.\nИ только он мог создать...Scandal!",
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/scandal1.webp",
          height: 800,
          width: 800,
        },
        title: "SCANDAL EDP",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/scandal2.webp",
          height: 500,
          width: 500,
        },
        title: "SO SCANDAL EDP",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/scandal3.webp",
          height: 500,
          width: 500,
        },
        title: "SCANDAL POUR HOMME",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/scandal4.webp",
          height: 800,
          width: 800,
        },
        title: "SCANDAL LE PARFUM",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/jeanpaulgaultier/perfumes-gallery/scandal5.webp",
          height: 800,
          width: 800,
        },
        title: "SCANDAL POUR HOMME LE PARFUM",
      },
    ],
  },
];

const jeanpaulgaultierHistorySliderItems: SliderItem[] = [
  { year: 1976, content: "Первая модная коллекция и первый показ." },
  {
    year: 1983,
    content: "Создание мужской коллекции. Создание первого корсета.",
  },
  { year: 1986, content: "Первая мужская юбка" },
  {
    year: 1990,
    content:
      "Создание сценических костюмов для Blond Ambition World Tour Мадонны",
  },
  { year: 1993, content: "Запуск первого женского аромата Classique" },
  { year: 1995, content: "Запуск мужского аромата Le Male." },
  { year: 1997, content: "Создание Gaultier Haute Couture" },
  {
    year: 2016,
    content:
      "Модный дом Jean Paul Gaultier полностью вошел в состав компании PUIG.",
  },
  { year: 2017, content: "Запуск нового аромата и вселенной Scandal." },
  { year: 2018, content: "Премьера эпатажного Fashion Freak Show." },
  { year: 2019, content: "Запуск парных ароматов La Belle и Le Beau." },
  { year: 2021, content: "Запуск мужского аромата Scandal pour homme." },
];

const jeanpaulgaultierQuiz = [
  {
    question: "В каком году был основан модный дом Jean Paul Gaultier?:",
    answers: ["1976", "1978", "1980", "1982"],
    correctAnswer: "1976",
  },
  {
    question: "В чем/ком находил будущий маэстро свое вдохновение?:",
    answers: [
      "Медвежонок Нана, сладости, игра в футбол",
      "Бабушкины рассказы, общение с друзьями, кино",
      "Медвежонок Нана, кабаре, бабушка",
      "Песни, кино, кабаре",
    ],
    correctAnswer: "Медвежонок Нана, кабаре, бабушка",
  },
  {
    question: "Какой новый мужской предмет гардероба Готье внес в 1986 году?:",
    answers: ["Тельняшка", "Корсет", "Юбка", "Шапка моряка"],
    correctAnswer: "Юбка",
  },
  {
    question:
      "Какой предмет женского гардероба стал знаковым для многих коллекций Готье:",
    answers: ["Корсет", "Чулки", "Шляпа", "Очки"],
    correctAnswer: "Корсет",
  },
  {
    question: "Когда появился первый аромат и как он назывался?:",
    answers: [
      "1998, Classique",
      "1995, Le Male",
      "1993, Classique",
      "1990, Scandal",
    ],
    correctAnswer: "1993, Classique",
  },
  {
    question: "Сколько парфюмерных вселенных в бренде:",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Назовите ключевые ноты аромата Le Male:",
    answers: [
      "Мята, бергамот, имбирь",
      "Мята, лаванда, ваниль",
      "Мята, бергамот, ваниль",
      "Лаванда, грейпфрут, кедр",
    ],
    correctAnswer: "Мята, лаванда, ваниль",
  },
  {
    question: "Овердоза в аромате SCANDAL:",
    answers: ["Пралине", "Гардения", "Цветы апельсина", "Мед"],
    correctAnswer: "Мед",
  },
  {
    question: "Овердоза в аромате SCANDAL POUR HOMME?:",
    answers: ["Бобы тонка", "Сандал", "Ветивер", "Карамель"],
    correctAnswer: "Бобы тонка",
  },
  {
    question: "Назовите ноты в аромате LA BELLE:",
    answers: [
      "Ваниль, груша, роза, яблоко, бергамот, ветивер",
      "Груша, тубероза, ваниль, карамель, бобы тонка",
      "Яблоко, груша, малина, жасмин, кедр",
      "Бергамот, груша, уд, сандал, тубероза",
    ],
    correctAnswer: "Ваниль, груша, роза, яблоко, бергамот, ветивер",
  },
];

export const jeanpaulgaultierImagesGallery: ImageGalleryItem[] = [
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/1.webp",
    width: 562,
    height: 720,
    altText: "Image-1",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/2.webp",
    width: 562,
    height: 720,
    altText: "Image-2",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/3.webp",
    width: 562,
    height: 720,
    altText: "Image-3",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/4.webp",
    width: 562,
    height: 720,
    altText: "Image-4",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/5.webp",
    width: 562,
    height: 720,
    altText: "Image-5",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/6.webp",
    width: 562,
    height: 720,
    altText: "Image-6",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/7.webp",
    width: 562,
    height: 720,
    altText: "Image-7",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/8.webp",
    width: 562,
    height: 720,
    altText: "Image-8",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/9.webp",
    width: 562,
    height: 720,
    altText: "Image-9",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/10.webp",
    width: 562,
    height: 720,
    altText: "Image-10",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/11.webp",
    width: 562,
    height: 720,
    altText: "Image-11",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/12.webp",
    width: 562,
    height: 720,
    altText: "Image-12",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/13.webp",
    width: 562,
    height: 720,
    altText: "Image-13",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/14.webp",
    width: 562,
    height: 720,
    altText: "Image-14",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/15.webp",
    width: 562,
    height: 720,
    altText: "Image-15",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/16.webp",
    width: 562,
    height: 720,
    altText: "Image-16",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/17.webp",
    width: 562,
    height: 720,
    altText: "Image-17",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/18.webp",
    width: 562,
    height: 720,
    altText: "Image-18",
  },
  {
    src: "/assets/images/brands/jeanpaulgaultier/images-gallery/19.webp",
    width: 562,
    height: 720,
    altText: "Image-19",
  },
];

export const jeanpaulgaultierBrandContent: BrandContentType = {
  heroSection: {
    videoSrc: "/assets/video/brands/jeanpaulgaultier/hero.mp4",
    title: "Jean Paul Gaultier",
  },
  historySliderSection: jeanpaulgaultierHistorySliderItems,
  bioSection: {
    content: {
      visible: [
        {
          id: 1,
          type: ContentBlockType.TEXT,
          paragraphs: [
            "От рабочей униформы до невероятных платьев, украшающих его показы, Жан-Поль Готье уверен, что в нашей жизни мода занимает особенное место: «Важно быть узнаваемым». Великий кутюрье видит себя скорее революционером, подвергая сомнению нормы и клише, стандарты и коды, правила и традиции. Он меняет их как захочет, разрушая, но стремясь изобрести заново.Сам себя Готье называет вуайеристом, он любопытен, очарован неизвестностью. Его мода не тронута стандартами — это и есть основа его самовыражения.Париж месье Готье — это театр жизни. Как кутюрье, он никогда не устает раскрывать богатство этого города, который бесконечное количество раз вдохновлял художников. Готье явно мало мерцания роскоши среди ярких огней большого города. Он влюблен в серо-белую дымку, мокрый асфальт, рабочие кварталы и мрачные закоулки.",
            "Его вдохновляет улица, ее герои, мусор, пластик, старая джинса – все это бесконечный источник его вдохновения. СИМВОЛ ГОТЬЕ В работе Жана-Поля Готье можно выделить несколько знаковых элементов: он заново изобрел корсет, вдохнул вторую жизнь в тельняшку, сделал юбку частью мужского гардероба и вывел на подиум моделей самых разных размеров.Безусловный хит Готье — это знаменитый cone-bra или бюстгальтер с чашечками-конусами. В 1984 году он включил платье-бюстье с таким элементом в коллекцию своей марки, а в 1990 году этот бюстгальтер стал звездой во время мирового тура Мадонны Blond Ambition World Tour, и это по сей день ее самый известный образ. Вокруг создания этого бра ходит множество легенд, но сам Готье признается, что его вдохновением была его бабушка, а первым, кто примерил бра из газеты был игрушечный мишка маленького Жана-Поля.",
            "ОДА ТЕЛУ Жан-Поль Готье увлекался различными жанрами, охватывая все от гиперсексуальности до трансгендерности. Его голос — это голос свободы: быть собой, вне зависимости от того, что было даровано природой или навязано нормами! Он всегда сотрудничал с нестандартными моделями. В дополнении к уже привычным высоким и худым моделям, в его показах всегда участвовали модели со стрит кастинга.Оформление флаконов его первых ароматов — это ода телу и его любимым предметам гардероба — корсету и тельняшке. Первый аромат женский Classique появился в 1993 году. Каким же был флакон? Конечно! Флакон в форме женского тела, затянутого в корсет. Позже в 1995 году появился знаменитый мужской аромат Le Male — мужской торс в тельняшке.",
          ],
        },
      ],
      hidden: [
        {
          id: 2,
          type: ContentBlockType.TEXT,
          paragraphs: [
            "Флаконы ароматов бренда вместо обычных картонных коробок всегда заключены в консервные банки, это отсыл к знаменитому «мусорному платью», аксессуарами для которого стали консервные банки без дна.",
            "ШОУ — ЭТО ЛЮБОВЬ‍ Будучи ребенком, Жан-Поль Готье любил кино, мюзиклы и кабаре. Его медвежонок Нана испытывал на себе все творческие прихоти будущего маэстро, а бабушка была главной музой. Мода для Готье всегда была интересна, он начал творить со школьной парты и с тех пор уже не останавливался. В 2007 году кутюрье заполучил премию Fashion GroupInternational как дизайнер, сумевший сломать клише и устранить модные границы.",
            "Готье автор нарядов для большого количества фильмов, спектаклей и постановок и сам снялся в некоторых из них. На его счету 48 ролей-камео и 6 художественных фильмов. Самыми известными стали признанные шедевры — «Пятый элемент» и «Повар, вор, его жена и ее любовник». Готье всегда любил кино и отлично понимал силу влияния кинопленки на судьбу модного бренда. В 2012 году дизайнер вошел в состав жюри Каннского кинофестиваля. Некоторое время Жан-Поль вел очень популярное ТВ-шоу EUROTRASH.",
          ],
        },
      ],
    },
    video: {
      src: "/assets/video/brands/jeanpaulgaultier/bio.mp4",
    },
  },
  imagesSliderSection: jeanpaulgaultierImagesGallery,
  perfumesSection: jeanpaulgaultierPerfumeUniverses,
  quizSection: {
    title: "Jean Paul Gaultier",
    steps: jeanpaulgaultierQuiz,
  },
};
