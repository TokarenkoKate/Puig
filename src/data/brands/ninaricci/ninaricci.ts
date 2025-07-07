import { ImageGalleryItem, SliderItem } from "@/lib/types/components";
import { BrandContentType, PerfumeUniverse } from "@/lib/types/general";

export const ninaricciPerfumeUniverses: PerfumeUniverse[] = [
  {
    title: "Nina",
    subtitle: "8 ароматов",
    content: [
      {
        text: "Самая волшебная сказка и самая романтическая мечта воплотились в культовой парфюмерной вселенной Les Belles de Nina от модного дома Nina Ricci. Композиции представлены в знаменитом флаконе-яблоке, который является современной вариацией невероятного и незабываемого хрустального флакона аромата Filles d’Eve, созданного компанией Lalique еще в 1952 году. Очарование, магия и волшебство ароматов вселенной Les Belles de Nina наполняют каждый флакон этой коллекции.",
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe1.webp",
          height: 800,
          width: 800,
        },
        title: "NINA",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe2.webp",
          height: 800,
          width: 800,
        },
        title: "NINA ROUGE",
      },
      {
        id: 3,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe3.webp",
          height: 800,
          width: 800,
        },
        title: "NINA ROSE",
      },
      {
        id: 4,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe4.webp",
          height: 500,
          width: 500,
        },
        title: "NINA EXTRA ROUGE",
      },
      {
        id: 5,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe5.webp",
          height: 500,
          width: 500,
        },
        title: "NINA FLEUR",
      },
      {
        id: 6,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe6.webp",
          height: 800,
          width: 800,
        },
        title: "NINA LE PARFUM",
      },
      {
        id: 7,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe7.webp",
          height: 800,
          width: 800,
        },
        title: "NINA ILLUSION",
      },
      {
        id: 8,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/universe8.png",
          height: 800,
          width: 800,
        },
        title: "NINA ROUGE CRUSH",
      },
    ],
  },
  {
    title: "Classic",
    subtitle: "2 аромата",
    content: [
      {
        text: "Классическая вселенная ароматов от Nina Ricci непросто подчеркивает естественную красоту каждой женщины, но и раскрывает ее. Гармония роскоши и простоты, чарующее сочетание естественности и кокетливой игры, дух времени, истории, ольфакторной нитью переплетены с традициями и современностью, превнося в образ каждой женщины свою собственную, обворожительную историю от Нина Риччи.",
      },
    ],
    images: [
      {
        id: 1,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/classic_1.webp",
          height: 800,
          width: 800,
        },
        title: "L'AIR DU TEMPS EDT",
      },
      {
        id: 2,
        url: {
          src: "/assets/images/brands/ninaricci/perfumes-gallery/classic_2.webp",
          height: 800,
          width: 800,
        },
        title: "L'AIR DU TEMPS EDP",
      },
    ],
  },
];

const ninaricciHistorySliderItems: SliderItem[] = [
  {
    year: 1883,
    content: "Рождение Марии Аделаиды Ньели, известной как Нина Риччи.",
  },
  { year: 1932, content: "Открытие Дома высокой моды Nina Ricci." },
  { year: 1948, content: "Запуск аромата L'Air du Temps." },
  { year: 1998, content: "Приобретение Дома моды Nina Ricci компанией Puig." },
  { year: 2006, content: "Запуск аромата Nina." },
  { year: 2022, content: "Новый креативный директор Харрис Рид." },
];

const ninaricciQuiz = [
  {
    question: "В каком году был основан Дом моды Nina Ricci?:",
    answers: ["1922", "1952", "1932", "1912"],
    correctAnswer: "1932",
  },
  {
    question: "Назовите лишнее для бренда Nina Ricci?:",
    answers: ["Утонченность", "Женственность", "Романтизм", "Эпатаж"],
    correctAnswer: "Эпатаж",
  },
  {
    question: "Nina Ricci это:",
    answers: [
      "Итальянский бренд",
      "Французский бренд",
      "Испанский бренд",
      "Английский бренд",
    ],
    correctAnswer: "Французский бренд",
  },
  {
    question: "Креативный директор Дома моды сегодня:",
    answers: ["Жульен Доссена", "Робер Риччи", "Оливье Кресп", "Харрис Рид"],
    correctAnswer: "Харрис Рид",
  },
  {
    question: "Выберите лишнее из ДНК модного дома:",
    answers: [
      "Металлические элементы",
      "Яркие цвета",
      "Цветочные мотивы",
      "Горох",
    ],
    correctAnswer: "Металлические элементы",
  },
  {
    question: "Как звучит на французском название аромата 'Дух времени':",
    answers: ["Fille D'Even", "Capricci", "Coeur Joie", "L'Air du Temps "],
    correctAnswer: "L'Air du Temps ",
  },
  {
    question: "В каком году был выпущен аромат NINA от NINA RICCI:",
    answers: ["2006", "2007", "2009", "2010"],
    correctAnswer: "2006",
  },
  {
    question: "Во всех ароматах вселенной NINA от NINA RICCI используется:",
    answers: [
      "Переработанные цветы апельсина",
      "Переработанный итальянский лимон",
      "Переработанное яблоко",
      "Переработанный лайм",
    ],
    correctAnswer: "Переработанный итальянский лимон",
  },
  {
    question: "Отметьте ключевые ноты аромата NINA от NINA RICCI:",
    answers: [
      "Лайм, жасмин, мускус",
      "Лайм, роза, сандал ",
      "Лимон, жасмин, амбра",
      "Лимон, яблоко в карамели, кедр",
    ],
    correctAnswer: "Лимон, яблоко в карамели, кедр",
  },
  {
    question: "Какой % натуральный ингредиентов в ароматах вселенной NINA:",
    answers: ["до 50%", "до 60%", "от 90%", "100%"],
    correctAnswer: "от 90%",
  },
];

export const ninaricciImagesGallery: ImageGalleryItem[] = [
  {
    src: "/assets/images/brands/ninaricci/images-gallery/1.webp",
    width: 562,
    height: 720,
    altText: "Image-1",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/2.webp",
    width: 562,
    height: 720,
    altText: "Image-2",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/3.webp",
    width: 562,
    height: 720,
    altText: "Image-3",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/4.webp",
    width: 562,
    height: 720,
    altText: "Image-4",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/5.webp",
    width: 562,
    height: 720,
    altText: "Image-5",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/6.webp",
    width: 562,
    height: 720,
    altText: "Image-6",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/7.webp",
    width: 562,
    height: 720,
    altText: "Image-7",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/8.webp",
    width: 562,
    height: 720,
    altText: "Image-8",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/9.webp",
    width: 562,
    height: 720,
    altText: "Image-9",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/10.webp",
    width: 562,
    height: 720,
    altText: "Image-10",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/11.webp",
    width: 562,
    height: 720,
    altText: "Image-11",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/12.jpg",
    width: 562,
    height: 720,
    altText: "Image-12",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/13.jpg",
    width: 562,
    height: 720,
    altText: "Image-13",
  },
  {
    src: "/assets/images/brands/ninaricci/images-gallery/14.jpg",
    width: 562,
    height: 720,
    altText: "Image-14",
  },
];

export const ninaricciBrandContent: BrandContentType = {
  heroSection: {
    videoSrc: "/assets/video/brands/ninaricci/hero.mp4",
    title: "Nina Ricci",
  },
  historySliderSection: ninaricciHistorySliderItems,
  bioSection: {
    content: [
      "Парижский Дом моды Nina Ricci с 1932 года создает дизайнерскую одежду и ароматы для женщин. Каждое творение бренда передаёт дух свободы и любовь к самым чувственным проявлениям женщин, подчёркивает деликатность, волшебство момента и настроение времени. Нет ничего более волнующего, чем настоящая женщина. Нет ничего более захватывающего, чем жизнь. Легкость, чуткость, чувственность. Красота без искусственности, и женственность как знамя. История французского модного дома Nina Ricci начинается в далеком 1932 году. Мадам Нина Риччи, итальянка по происхождению, родилась в семье лучшего в городе сапожника.Спустя несколько лет после рождения Нины семья перебралась на постоянное местожительства поближе к центру моды ― на Французскую Ривьеру. Именно там, по мнению ее отца, можно было обзавестись полезными знакомствами и обрасти огромным количеством новых заказчиков. Собственно, именно так все и вышло, уже через пару лет семья Нины Риччи имела вполне приличный достаток и ни в чем не нуждалась.",
      "От своего отца Нина Риччи унаследовала не только страсть к красоте и роскоши, но и умение много и кропотливо работать. В возрасте 12 лет она стала подрабатывать у портнихи, мечтала о славе знаменитой модистки и открытии собственного ателье. Разве могла юная Нина тогда знать, что спустя 37 лет ее Дом мод будет располагаться в самом престижном районе Парижа ― на бульваре Капуцинов, а ее роскошные платья почтут за честь носить состоятельные дамы Франции. Нина Риччи занималась изготовлением одежды, а ее сын Робер отвечал за коммерческую сторону ведения бизнеса. У Нины Риччи был прирожденный талант создавать настоящие шедевры из самых простых вещей.Ориентируясь на предпочтения своих клиентов, модельер взяла за основу женственные силуэты, подчеркивающие линию талии, стала использовать различные драпировки и аппликации, украшать наряды бантами и рюшами. Добавив декоративных деталей, она превращала банальную блузку или платье в произведение искусства.",
      "Использование атласных лент, бантов и пуговиц стало фирменным стилем мадам Риччи, а успех каждой ее коллекции строился на необыкновенной женственности, исключительной изысканности, завершенности силуэта и использовании лучших материалов ― шелка, бархата, органзы и кружев.После того, как Дом Ricci завоевал репутацию самого элегантного в Париже, под маркой Nina Ricci выходит и первая линия ароматов, которая появилась на свет благодаря ее сыну ― Роберу Риччи. В 1946 году Модный дом презентовал свой первый парфюм Coeur Joir (Кёр Жуа). Для его создания Робер Риччи пригласил известную женщину-парфюмера Жермен Селье. В результате был представлен цветочный аромат с нотами нероли, бергамота, ириса, фиалки, жасмина и розы. Флакон, выполненный в форме сердца, изготовил мастер по работе со стеклом Марк Лалик, школьный друг Робера. Над дизайном работал Кристиан Берар.",
    ],
    videoSrc: "/assets/video/brands/ninaricci/hero.mp4",
    paragraphs: [
      "В 1948 году Nina Ricci выпустили второй цветочный аромат L`Air Du Temps (Лер Дю Там), созданный парфюмером Франсисом Фаброном. Согласно легенде, новая композиция была предназначена для возлюбленной Робера Риччи, а любовь, как известно, не стареет никогда. Поэтому каждые 5 секунд кто-то на земном шаре покупает эти духи для любимой. Марк Лалик украсил колпачок флакона имитацией двух голубей. Дизайн сосуда также разрабатывал Кристиан Берар. Аромат L`Air Du Temps имел ошеломительный успех. И сейчас эта вечная, элегантная классика радует и очаровывает обладательниц данного аромата.",
      "В 1952 году Nina Ricci выпустили женский аромат Fille d’Eve, флакон которого был выполнен в форме яблока.В 1965 году был выпущен первый мужской аромат Signoricci группы фужерные зеленые.В 1979 году Nina Ricci переехала с улицы Капуцинов на авеню Монтань, в один из наиболее престижных парижских кварталов.",
    ],
    bioTimelineData: [
      "Таким образом, главный офис Nina Ricci ― пять этажей офисов, дизайн-студий, мастерских, бутиков, салонов и несколько залов для показов, стали стратегической базой компании, откуда осуществляется руководство всеми видами деятельности империи Nina Ricci: производством одежды, изделий из кожи, часов и аксессуаров, ювелирных изделий и многого другого.",
      "В 1998 году компания перестала быть чисто семейным бизнесом и объединилась с компанией Puig. Преображение бренда Nina Ricci является частью стратегии развития, имеющей своей целью усилить проникновение на рынок, повысить престиж марки Nina Ricci и подчеркнуть романтический дух ее международного успеха.",
      " 2006 год стал годом рождения настоящей международной парфюмерной иконы ― аромата Nina, созданного для дома Nina Ricci парфюмерами Жаком Кавалье и Оливье Креспом. Аромат был посвящен самой создательнице, Нине Риччи. Nina ― нежное, соблазнительное и жизнеутверждающее имя. От соблазнения к страсти ― свежий цветочно-фруктовый аромат с аппетитными нотками завоевывает сердце. Флакон ― как ювелирное украшение, вдохновленное наследием дома Риччи. Современная сказка, полная магии. Волшебный, чарующий аромат, соединивший в себе искушение, женственность и современность.",
      " За время существования Nina Ricci во главе творческого руководства успели побывать такие именитые дизайнеры как Ларс Нильсон, Натали Жерве, Питер Коппинг, Оливье Тискенс и Гийом Анри. Анри, придерживающийся более строгого стиля, пробыл в марке три года: в последний раз он вышел на поклон на показе сезона Осень/Зима 2018.",
      "С августа 2018 года должность креативного директора впервые в истории Nina Ricci разделили два человека ― Лиси Херребрюг и Рушеми Боттер из экспериментальной марки мужской одежды Botter. Их приход ознаменовал новую веху в развитии бренда ― дуэт привнес в его стиль каплю иронии и игривости.",
      "В сентябре 2022 года на пост креативного директора назначен Харрис Рид. Харрис Рид настолько дитя соцсетей, что устроил для своей первой коллекции Nina Ricci самый настоящий прогрев. Его первое платье, созданное во французском ателье, мы увидели уже в декабре 2022-го — на Адель. На этом Рид не остановился, в конце концов, дружба со звездами и умение создавать инфоповоды — его главные козыри.",
      "Кутюр Nina Ricci и правда вдохновил Харриса Рида больше, чем все остальное. Дизайнер выделил жирным шрифтом кутюрные коды Nina Ricci. Огромные цветы-чокеры, пышные платья, начиненные перьями и тюлем, банты, максимально приталенный силуэт в платьях и костюмах, вертикальная полоска, горох и, конечно же, шляпы — все это напоминает, какой был Nina Ricci в 1980-е и 1990-е.",
    ],
  },
  videoGallerySection: [
    {
      previewImg:
        "/assets/images/brands/ninaricci/video-gallery/videogallery1.webp",
      videoSrc:
        "/assets/video/brands/ninaricci/video-gallery/videogallery1.mp4",
    },
    {
      previewImg:
        "/assets/images/brands/ninaricci/video-gallery/videogallery2.webp",
      videoSrc:
        "/assets/video/brands/ninaricci/video-gallery/videogallery2.mp4",
    },
  ],
  imagesSliderSection: ninaricciImagesGallery,
  perfumesSection: ninaricciPerfumeUniverses,
  quizSection: {
    title: "Nina Ricci",
    steps: ninaricciQuiz,
  },
};
