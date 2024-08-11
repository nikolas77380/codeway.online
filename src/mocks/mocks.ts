import Html_Css from "@/public/assets/coursesListBlock/html_css.png";
import ReactLogo from "@/public/assets/coursesListBlock/Reactjs.png";
import { StaticImageData } from "next/image";

export type TInstructor = {
  name: string;
  image: string;
  rank: string;
};

export type TCourseInfo = {
  id: number;
  topic: string;
  name: string;
  shortDescription: string;
  students: number;
  lastUpdated: string;
  price: string;
  rating: number;
  link: string;
  videoLink: string;
  image: StaticImageData;
  description: string;
  keyPoints: string[];
  lessons: {
    lessonTopic: string;
    lessonsList: string[];
  }[];
  courseDuration: number;
};

export const courseInstructor: TInstructor = {
  name: "Nik",
  rank: "senior",
  image: "/assets/header/img_2.png",
};

export const coursesInfoList: TCourseInfo[] = [
  {
    id: 0,
    link: "/",
    videoLink: "",
    image: Html_Css,
    topic: "Front-end",
    name: "Легкий старт 1.0",
    shortDescription:
      "Зробіть свій перший крок у світ веб-розробки та дізнайтесь, чи це ваше покликання.",
    students: 378,
    lastUpdated: "10/08/24",
    rating: 5,
    price: "555.55",
    courseDuration: 38,
    description:
      "«ЛЕГКИЙ СТАРТ 1.0» — це базовий курс для тих, хто хоче зробити перші кроки у веб-розробці та зрозуміти, чи підходить їм ця сфера. Курс допоможе освоїти основи HTML і CSS, створити свій перший простий веб-сайт, і визначити, чи є у вас здібності та інтерес до розробки. Ви отримаєте базові знання про те, як працює інтернет, веб-сайти, а також як правильно структуризувати та стилізувати контент. Курс розділений на чотири модулі, кожен з яких поступово занурює вас у різні аспекти веб-розробки, від основ до більш просунутих тем. Цей курс є ідеальним вибором для початківців, які бажають отримати уявлення про веб-розробку та зробити перший крок у цій захоплюючій сфері.",
    keyPoints: [
      "Знайомство з основами веб-розробки: Вивчення принципів роботи інтернету, веб-сайтів та ролі HTML, CSS у створенні веб-сторінок",
      "Освоєння базових HTML тегів: Розуміння структури HTML-документа, робота з основними тегами для створення контенту, включаючи списки, зображення, посилання та таблиці",
      "Основи стилізації за допомогою CSS: Навчання застосування CSS для покращення зовнішнього вигляду веб-сторінок за допомогою вбудованих, внутрішніх та зовнішніх стилів",
      "Поглиблене використання CSS для стилізації: Робота з бокс-моделлю, позиціонуванням елементів, налаштуванням шрифтів і адаптивним дизайном за допомогою медіа-запитів",
      "Опанування FlexBox та Grid: Вивчення сучасних методів верстання для створення гнучких та адаптивних макетів веб-сторінок",
      "Перевірка схильності до розробки: Курс допоможе зрозуміти, чи підходить вам веб-розробка, і чи варто продовжувати вивчати цю сферу на більш глибокому рівні.",
    ],
    lessons: [
      {
        lessonTopic: "HTML",
        lessonsList: [
          "Що таке інтернет і як він працює",
          "Як працюють веб сайти і для чого потрібні HTML, CSS, JavaScript",
          "Інструменти для веб розробки",
          "HTML теги",
          "Семантика в HTML",
          "Структура HTML",
          "Списки HTML",
          "Додавання зображень в HTML",
          "Додавання посилань в HTML",
          "HTML таблиці",
          "HTML форми",
          "​​IFrame",
        ],
      },
      {
        lessonTopic: "Базовий CSS",
        lessonsList: [
          "Вступ до CSS",
          "Вбудований CSS",
          "Внутрішній CSS",
          "Зовнішній CSS",
          "Class селектор",
          "ID селектор",
          "Псевдо-класи та псевдо-елементи",
        ],
      },
      {
        lessonTopic: "Просунутий CSS",
        lessonsList: [
          "Стилізація CV веб сайту",
          "Що таке favicons",
          "HTML div",
          "Стилізація за допомогою бокс моделі",
          "Властивість CSS - display",
          "CSS float and clear",
          "Статичне і відносне позиціонування",
          " Абсолютне позиціонування",
          " Розташування елементів по центру",
          " Шрифти для веб сайту",
          " CSS Sizing",
          " Media queries",
        ],
      },
      {
        lessonTopic: "FlexBox & Grid",
        lessonsList: [
          "Flex",
          "Flex direction",
          "Flex layout",
          "Flex sizing",
          "Grid",
          "Grid sizing",
          "Grid placement",
        ],
      },
    ],
  },

  {
    id: 1,
    link: "/",
    videoLink: "",
    image: ReactLogo,
    topic: "Front-end",
    name: "Повний Курс 2.0",
    shortDescription:
      "Отримайте всі необхідні навички для створення сучасних веб-сайтів і станьте професійним фронтенд-розробником.",
    students: 1378,
    lastUpdated: "10/09/24",
    rating: 5,
    price: "5555.55",
    courseDuration: 144,
    description:
      "«Повний Курс» — це комплексна програма, що охоплює всі аспекти фронтенд-розробки, починаючи з системи контролю версій і закінчуючи основами React. Курс призначений для тих, хто хоче отримати глибокі знання у веб-розробці та навички, необхідні для створення сучасних веб-сайтів. Ви дізнаєтеся про основи JavaScript, обробку подій, асинхронне програмування, об’єктно-орієнтоване програмування та багато іншого.",
    keyPoints: [
      "Основи JavaScript: вивчення базових концепцій JavaScript, включаючи змінні, типи даних, умови, цикли та функції.",
      "Області видимості та функції: глибоке розуміння функцій, їх аргументів, області видимості, а також використання функцій вищого порядку.",
      "Робота з масивами та об'єктами: навчання створення та маніпуляції масивами та об'єктами, а також використання методів для їх обробки.",
      "Обробка подій: навчання реагуванню на події, такі як кліки, введення тексту та інші взаємодії з користувачем.",
      "Асинхронне програмування: освоєння основ асинхронного JavaScript, включаючи проміси, async/await та AJAX-запити.",
      "Об’єктно-орієнтоване програмування: вивчення принципів ООП, створення класів та наслідування в JavaScript.",
      "Основи React: введення в React, включаючи JSX, компоненти, управління станом та обробку подій.",
      "Просунуті концепції React: освоєння хуків, навігації за допомогою React Router та створення кастомних хуків.",
      "DOM-маніпуляції: освоєння роботи з елементами DOM, їх стилізацією та маніпуляцією через JavaScript.",
      "Система контролю версій: освоєння Git та GitHub для управління кодом та співпраці в командах.",
    ],
    lessons: [
      {
        lessonTopic: "Система контролю версій git, GitHub",
        lessonsList: [
          "Командна строка",
          "Навігація у консолі",
          "Створення та видалення файлів",
          "Система контролю версій",
          "GitHub repo",
          "Branches, Merge",
          "Developer flow example",
          "Deploy website GitHub pages",
        ],
      },
      {
        lessonTopic: "JavaScript Basic",
        lessonsList: [
          "Вступ до JavaScript",
          "numbers | NaN | infinity",
          "Змінні у JavaScript",
          "boolean | string",
          "String методи",
          "Eкранування в середині string",
          "Шаблонні строки",
          "null | undefined",
          "Math object",
          "Методи для Number",
          "Boolean логіка | оператори порівняння",
          "Запуск коду JS",
          "Умова if else",
          "Логічні оператори",
          "Switch case умова",
          "Тернарний оператор",
        ],
      },
      {
        lessonTopic: "JavaScript - масиви, методи, цикли",
        lessonsList: [
          "Створення | редагування масивів",
          "Методи масивів ( push, pop, shift, unshift )",
          "Методи масивів ( concat, indexOf, includes )",
          "Методи масивів ( reverse, join )",
          "Метод масиву splice",
          "Метод масиву sort",
          "Типи даних посилання",
          "Const із масивами",
          "Об'єкти",
          "Доступ до властивостей об'єкту",
          "Додавання, редагування об'єктів",
          "Вкладені Об'єкти",
          "Порівняння масив та об'єктів",
          "Цикли в JavaScript",
          "Цикл For",
          "Нескінчений цикл",
          "Вкладені цикли",
          "Цикл While",
          "Ключове слово Break",
          "Цикл for...of",
          "for...of об'єктів",
          "Цикл for...in",
        ],
      },
      {
        lessonTopic: "JavaScript - області видимості",
        lessonsList: [
          "Що таке функції",
          "Гра у кубік",
          "Аргументи функцій",
          "Множина аргументів функції",
          "Return",
          "Область видимості функції",
          "Блочна область видимості",
          "Лексична область видимості",
          "Функціональний вираз",
          "Функції вищого порядку",
          "Функції як аргументи",
          "Функції як return value",
          "Callback",
          "Hoisting",
          "ForEach",
          "Map",
          "Arrow functions",
          "Find | Filter",
          "Every | Some",
          "Sort із функцією",
          "Reduce",
        ],
      },
      {
        lessonTopic: "JavaScript - нові методи. This",
        lessonsList: [
          "Параметри функції за замовченням",
          "Spread аргументів функції",
          "Spread масивів",
          "Spread об'єктів",
          "Об'єкт Arguments",
          "Rest аргументів функції",
          "Деструктуризація масивів",
          "Деструктуризація об'єктів",
          "Деструктуризація параметрів функції",
          "Скорочений запис властивостей об'єкта",
          "Обчислювальні властивості об'єкта",
          "Додавання методів у об'єкт",
          "Об'єкт This",
          "This у методах",
          "Контекст This",
          "Motivation App",
        ],
      },
      {
        lessonTopic: "DOM - вибір і маніпуляція елементами",
        lessonsList: [
          "Dom intro",
          "Document object",
          "Get by ID",
          "GetElementsByTagName",
          "Get by class name",
          "QuerySelector",
          "InnerText, textContent",
          "InnerHTML",
          "Атрибути eлементів",
          "GetAttribute, setAttribute",
          "Доступ до елементів навколо",
          "Стилізація елементів",
          "Обчислювальні стилі",
          "ClassList",
          "Створення елементів у JavaScript",
          "Додавання елементів у DOM",
          "Видалення елементів з DOM",
          "Додаток Statistics",
        ],
      },
      {
        lessonTopic: "JavaScript Events",
        lessonsList: [
          "Events вступ",
          "Event властивість",
          "AddEventListener",
          "Додавання подій до кількох елементів",
          "Об'єкт події",
          "Keypress, keyup, keydown",
          "Події форми, PreventDefault",
          "Події input, change",
        ],
      },
      {
        lessonTopic: "Асинхронний JavaScript",
        lessonsList: [
          "CallStack",
          "Однопоточний JavaScript",
          "Callback hell",
          "Promises",
          "Значення Resolve, Reject",
          "Ajax, JSON, XML",
          "XMLHttpRequest",
          "Fetch API",
          "Бібліотека Axios",
          "Асинхронні функції",
          "Ключове слово Await",
          "Multiple Awaits",
        ],
      },
      {
        lessonTopic: "Об’єктно орієнтовний JavaScript",
        lessonsList: [
          "Що таке прототипи",
          "Вступ до ООП",
          "Функція Фабрика",
          "Патерн Конструктор",
          "JavaScript класи",
          "Ще трохи JavaScript класів",
          "Підклас, наслідування, метод Super",
        ],
      },
      {
        lessonTopic: "Basic React",
        lessonsList: [
          "Що таке React?",
          "React JSX",
          "npm, yarn",
          "Import, export, MUI",
          "React props",
          "Умови в React",
          "Списки в React, react dev tools",
          "Стилізація в React",
          "Події в React",
          "Стан у React",
        ],
      },
      {
        lessonTopic: "Intermediate React",
        lessonsList: [
          "useEffect hook",
          "useMemo, useCallback, useRef",
          "Custom hooks",
          "Навігація в react, React Router",
          "Додаємо навігацію до проекту",
          "React Context API",
        ],
      },
      {
        lessonTopic: "Advanced React",
        lessonsList: ["tbd…"],
      },
    ],
  },
];
