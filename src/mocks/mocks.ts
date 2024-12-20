import Html_Css from "@/public/assets/coursesListBlock/html_css.webp";
import MentorLogo from "@/public/assets/coursesListBlock/mentor.webp";
import ReactLogo from "@/public/assets/coursesListBlock/Reactjs.webp";
import { StaticImageData } from "next/image";

export type TInstructor = {
  name: string;
  image: string;
  rank: string;
};

export type TCourseInfo = {
  id: string;
  topic: string;
  name: string;
  title: string;
  seo_description: string;
  shortDescription: string;
  students: number;
  isComingSoon?: boolean;
  isFree?: boolean;
  lastUpdated: string;
  price: string;
  discountPrice?: string;
  discountEndDateTimer?: string;
  discountEndDate?: string;
  invoiceUrl: string;
  offerId: number;
  rating: number;
  link: string;
  videoLink: string;
  image: StaticImageData;
  description: string;
  keyPoints: string[];
  expectations?: string[];
  lessons: {
    lessonTopic: string;
    // lessonsList: string[];
    lessonsDescription: string;
  }[];
  courseDuration: number;
};

export const courseInstructor: TInstructor = {
  name: "Mykola Kipniak",
  rank: "Lead Front-End engineer",
  image: "/assets/header/img_2.png",
};

export const coursesInfoList: TCourseInfo[] = [
  {
    id: "easy-start-1-0",
    link: "https://mii-proekt-testovyi.kwiga.com/courses/front-end-start",
    invoiceUrl: "https://secure.wayforpay.com/button/bf498bc400faa",
    videoLink: "https://www.youtube.com/embed/7g7lSAWLJVI?si=a5byt2q6zFRnO-wg",
    offerId: 144598,
    image: Html_Css,
    topic: "Front-end",
    name: "Легкий старт 1.0",
    shortDescription:
      "Зробіть свій перший крок у світ веб-розробки та дізнайтесь, чи це ваше покликання.",
    title: "Легкий старт 1.0 | Курс програмування для початківців | Codeway",
    seo_description:
      "Почніть шлях в IT з курсу Легкий старт 1.0 від Codeway. Вивчайте основи Front-end розробки з нуля: HTML, CSS, JavaScript.",
    students: 378,
    lastUpdated: "10/08/24",
    rating: 5,
    price: "3000 грн",
    isFree: true,
    discountEndDateTimer: "2024-12-10T00:00:00",
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
        // lessonsList: [
        //   "Що таке інтернет і як він працює",
        //   "Як працюють веб сайти і для чого потрібні HTML, CSS, JavaScript",
        //   "Інструменти для веб розробки",
        //   "HTML теги",
        //   "Семантика в HTML",
        //   "Структура HTML",
        //   "Списки HTML",
        //   "Додавання зображень в HTML",
        //   "Додавання посилань в HTML",
        //   "HTML таблиці",
        //   "HTML форми",
        //   "​​IFrame",
        // ],
        lessonsDescription:
          "У цьому розділі ви дізнаєтесь основи веб-розробки: як працює Інтернет і веб-сайти, навіщо потрібні HTML та CSS. Ви освоїте використання основних HTML-тегів для створення структури веб-сторінок, включаючи заголовки, списки, зображення, посилання, таблиці та форми. Крім того, ви зрозумієте, як правильно організувати семантику HTML для кращого розуміння коду браузерами.",
      },
      {
        lessonTopic: "Базовий CSS",
        // lessonsList: [
        //   "Вступ до CSS",
        //   "Вбудований CSS",
        //   "Внутрішній CSS",
        //   "Зовнішній CSS",
        //   "Class селектор",
        //   "ID селектор",
        //   "Псевдо-класи та псевдо-елементи",
        // ],
        lessonsDescription:
          "У цьому розділі ви дізнаєтесь, що таке CSS та як він працює. Ви навчитесь використовувати різні способи підключення стилів до веб-сторінки: вбудований, внутрішній та зовнішній CSS. Також ви освоїте основи роботи з селекторами, зокрема з class і id, та навчитесь застосовувати псевдо-класи і псевдо-елементи для більш гнучкого та ефективного оформлення елементів на веб-сторінці.",
      },
      {
        lessonTopic: "Просунутий CSS",
        // lessonsList: [
        //   "Стилізація CV веб сайту",
        //   "Що таке favicons",
        //   "HTML div",
        //   "Стилізація за допомогою бокс моделі",
        //   "Властивість CSS - display",
        //   "CSS float and clear",
        //   "Статичне і відносне позиціонування",
        //   " Абсолютне позиціонування",
        //   " Розташування елементів по центру",
        //   " Шрифти для веб сайту",
        //   " CSS Sizing",
        //   " Media queries",
        // ],
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з просунутими техніками стилізації веб-сторінок за допомогою CSS. Ви навчитесь створювати та стилізувати макети за допомогою бокс-моделі, використовувати властивості display, float і clear для розміщення елементів, а також освоїте методи позиціонування, такі як статичне, відносне та абсолютне. Ви дізнаєтесь, як правильно центрувати елементи, обирати шрифти для веб-сайту, налаштовувати розміри елементів (CSS Sizing) і застосовувати медіа-запити (Media Queries) для адаптивної верстки.",
      },
      {
        lessonTopic: "FlexBox & Grid",
        // lessonsList: [
        //   "Flex",
        //   "Flex direction",
        //   "Flex layout",
        //   "Flex sizing",
        //   "Grid",
        //   "Grid sizing",
        //   "Grid placement",
        // ],
        lessonsDescription:
          "У цьому розділі ви поглибите свої знання про сучасні методи розташування елементів на веб-сторінках. Ви дізнаєтесь, як ефективно використовувати Flexbox для створення гнучких макетів, освоїте управління напрямком, розкладом та розмірами елементів за допомогою Flex. Ви також навчитесь працювати з CSS Grid для створення складніших макетів, зрозумієте, як налаштовувати розміри сітки та розміщення елементів у решітці.",
      },
    ],
  },

  {
    id: "front-end-360",
    link: "https://mii-proekt-testovyi.kwiga.com/courses/front-end-pro",
    invoiceUrl: "https://secure.wayforpay.com/button/bf2cd076d531b",
    videoLink: "https://www.youtube.com/embed/NRH4_MWe270?si=S63CGU2gBR9-lwXl",
    offerId: 16585,
    image: ReactLogo,
    topic: "Front-end",
    name: "Front-end 360°",
    shortDescription:
      "Отримайте всі необхідні навички для створення сучасних веб-сайтів і станьте професійним фронтенд-розробником.",
    title:
      "Front-end 360° | Комплексний курс для майбутніх фронтенд-розробників від Codeway",
    seo_description:
      "Започніть свій шлях у Front-end розробці з курсом «Front-end 360°» від Codeway. Опануйте всі ключові навички для створення сучасних веб-сайтів, від основ HTML, CSS та JavaScript до просунутих концепцій React.",
    students: 1378,
    lastUpdated: "10/09/24",
    rating: 5,
    price: "8000 грн",
    discountPrice: "5500грн",
    discountEndDateTimer: "2025-12-10T00:00:00",
    discountEndDate: "11.10.2025",
    courseDuration: 144,
    description:
      "«Front-end 360°» — це комплексна програма, що охоплює всі аспекти фронтенд-розробки, починаючи з системи контролю версій і закінчуючи основами React. Курс призначений для тих, хто хоче отримати глибокі знання у веб-розробці та навички, необхідні для створення сучасних веб-сайтів. Ви дізнаєтеся про основи JavaScript, обробку подій, асинхронне програмування, об’єктно-орієнтоване програмування та багато іншого.",
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
        // lessonsList: [
        //   "Командна строка",
        //   "Навігація у консолі",
        //   "Створення та видалення файлів",
        //   "Система контролю версій",
        //   "GitHub repo",
        //   "Branches, Merge",
        //   "Developer flow example",
        //   "Deploy website GitHub pages",
        // ],
        lessonsDescription:
          "У цьому розділі ви освоїте основи системи контролю версій Git і платформу GitHub. Ви навчитесь працювати з командною строкою та виконувати основні операції з файлами, такими як їх створення та видалення. Ви дізнаєтесь, як організовувати код за допомогою репозиторіїв GitHub, управляти гілками та злиттями (merge). Крім того, ви розглянете приклад робочого процесу розробника і дізнаєтесь, як розгортати веб-сайти за допомогою GitHub Pages.",
      },
      {
        lessonTopic: "JavaScript Basic",
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами JavaScript, основною мовою програмування для веб-розробки. Ви навчитесь працювати з різними типами даних, такими як числа, рядки, boolean значення та їх методами. Ви дізнаєтесь, як використовувати спеціальні конструкції, такі як шаблонні рядки та оператори порівняння. Також ви освоїте базові концепції умовних операторів, включаючи if else, switch case, і тернарний оператор, що дозволяють створювати логічні умови у вашому коді. У кінці розділу ви зможете ефективно запускати та тестувати ваш JavaScript код у різних сценаріях.",
      },
      {
        lessonTopic: "JavaScript - масиви, методи, цикли",
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся, як працювати з масивами в JavaScript: створювати та редагувати їх, використовувати різноманітні методи для маніпуляцій (додавання, видалення, злиття, реверсування) та освоїти принципи роботи з об'єктами. Ви навчитеся використовувати цикли для автоматизації процесів, включаючи for, while, та for...of, а також дізнаєтеся про різницю між масивами і об'єктами, способи їх порівняння і властивості. Опанування цих тем допоможе вам створювати більш ефективний і динамічний код.",
      },
      {
        lessonTopic: "JavaScript - області видимості",
        lessonsDescription:
          "У цьому розділі ви навчитеся основам функцій у JavaScript, включаючи їх створення, аргументи, та значення, яке вони повертають. Ви дізнаєтеся про область видимості функцій, блочну та лексичну область видимості, а також про функціональні вирази і функції вищого порядку. Ви освоїте поняття callback-функцій, hoisting, а також методи масивів, такі як forEach, map, find, filter, every, some, sort і reduce, а також різницю між звичайними і стрілочними функціями.",
      },
      {
        lessonTopic: "JavaScript - нові методи. This",
        // lessonsList: [
        //   "Параметри функції за замовченням",
        //   "Spread аргументів функції",
        //   "Spread масивів",
        //   "Spread об'єктів",
        //   "Об'єкт Arguments",
        //   "Rest аргументів функції",
        //   "Деструктуризація масивів",
        //   "Деструктуризація об'єктів",
        //   "Деструктуризація параметрів функції",
        //   "Скорочений запис властивостей об'єкта",
        //   "Обчислювальні властивості об'єкта",
        //   "Додавання методів у об'єкт",
        //   "Об'єкт This",
        //   "This у методах",
        //   "Контекст This",
        //   "Motivation App",
        // ],
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся про нові можливості JavaScript, такі як параметри функцій за замовченням і використання оператора spread для масивів та об'єктів. Ви освоїте концепцію об'єкта Arguments, функціональність rest аргументів, а також деструктуризацію масивів, об'єктів і параметрів функцій. Ви також навчитеся використовувати скорочений запис властивостей об'єкта, обчислювальні властивості, додавати методи до об'єкта, і розбиратися в контексті this в методах та функціях.",
      },
      {
        lessonTopic: "DOM - вибір і маніпуляція елементами",
        // lessonsList: [
        //   "Dom intro",
        //   "Document object",
        //   "Get by ID",
        //   "GetElementsByTagName",
        //   "Get by class name",
        //   "QuerySelector",
        //   "InnerText, textContent",
        //   "InnerHTML",
        //   "Атрибути eлементів",
        //   "GetAttribute, setAttribute",
        //   "Доступ до елементів навколо",
        //   "Стилізація елементів",
        //   "Обчислювальні стилі",
        //   "ClassList",
        //   "Створення елементів у JavaScript",
        //   "Додавання елементів у DOM",
        //   "Видалення елементів з DOM",
        //   "Додаток Statistics",
        // ],
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся, як працювати з Document Object Model (DOM) для вибору та маніпуляції елементами на веб-сторінці. Ви освоїте основи DOM, такі як доступ до елементів за ID, тегом або класом, використання querySelector, а також управління текстом та HTML вмістом. Ви навчитеся працювати з атрибутами елементів, змінювати стилі, маніпулювати класами через classList, а також створювати, додавати і видаляти елементи в DOM.",
      },
      {
        lessonTopic: "JavaScript Events",
        // lessonsList: [
        //   "Events вступ",
        //   "Event властивість",
        //   "AddEventListener",
        //   "Додавання подій до кількох елементів",
        //   "Об'єкт події",
        //   "Keypress, keyup, keydown",
        //   "Події форми, PreventDefault",
        //   "Події input, change",
        // ],
        lessonsDescription:
          "У цьому розділі ви вивчите основи обробки подій у JavaScript. Ви дізнаєтеся про властивості подій та використання addEventListener для прив’язки обробників подій до елементів. Ви навчитеся обробляти події з клавіатури, такі як keypress, keyup і keydown, а також події форм, включаючи preventDefault. Ви також ознайомитеся з подіями для елементів введення, такими як input і change.",
      },
      {
        lessonTopic: "Асинхронний JavaScript",
        // lessonsList: [
        //   "CallStack",
        //   "Однопоточний JavaScript",
        //   "Callback hell",
        //   "Promises",
        //   "Значення Resolve, Reject",
        //   "Ajax, JSON, XML",
        //   "XMLHttpRequest",
        //   "Fetch API",
        //   "Бібліотека Axios",
        //   "Асинхронні функції",
        //   "Ключове слово Await",
        //   "Multiple Awaits",
        // ],
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся про асинхронність у JavaScript, починаючи з основного принципу однопотоковості та стека викликів (CallStack). Ви вивчите, як уникнути 'callback hell' за допомогою промісів (Promises), а також значення resolve і reject. Ви ознайомитесь із запитами AJAX, форматом JSON, та різними способами роботи з даними через XMLHttpRequest і Fetch API. Ви також дізнаєтеся про бібліотеку Axios для роботи з HTTP-запитами та освоїте асинхронні функції (async/await), включаючи використання await для обробки декількох асинхронних запитів.",
      },
      {
        lessonTopic: "Об’єктно орієнтовний JavaScript",
        // lessonsList: [
        //   "Що таке прототипи",
        //   "Вступ до ООП",
        //   "Функція Фабрика",
        //   "Патерн Конструктор",
        //   "JavaScript класи",
        //   "Ще трохи JavaScript класів",
        //   "Підклас, наслідування, метод Super",
        // ],
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами об'єктно-орієнтованого програмування (ООП) в JavaScript. Ви дізнаєтесь, що таке прототипи і як вони працюють. Ви почнете з основних концепцій ООП і вивчите функції-фабрики для створення об'єктів. Далі ви розглянете патерн конструкторів та JavaScript класи, а також більш складні аспекти, такі як наслідування через підкласи та використання методу super для доступу до властивостей та методів батьківських класів.",
      },
      {
        lessonTopic: "Basic React",
        // lessonsList: [
        //   "Що таке React?",
        //   "React JSX",
        //   "npm, yarn",
        //   "Import, export, MUI",
        //   "React props",
        //   "Умови в React",
        //   "Списки в React, react dev tools",
        //   "Стилізація в React",
        //   "Події в React",
        //   "Стан у React",
        // ],
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами React, популярної бібліотеки для створення інтерфейсів користувача. Ви дізнаєтесь, що таке React і як використовувати JSX для написання компонентів. Ви також освоїте основи роботи з пакетними менеджерами, такими як npm і yarn. Ви навчитесь імпортувати та експортувати модулі, використовувати MUI для стилізації компонентів, а також передавати дані через props. Ви розглянете умови рендерингу, роботи зі списками і використання React Dev Tools для налагодження. Ви дізнаєтесь про різні методи стилізації в React, обробку подій і управління станом компонентів.",
      },
      {
        lessonTopic: "Intermediate React",
        // lessonsList: [
        //   "useEffect hook",
        //   "useMemo, useCallback, useRef",
        //   "Custom hooks",
        //   "Навігація в react, React Router",
        //   "Додаємо навігацію до проекту",
        //   "React Context API",
        // ],
        lessonsDescription:
          "У цьому розділі ви поглибите свої знання з React, освоївши важливі хуки та концепції. Ви дізнаєтесь що таке хук та навчитесь використовувати їх у компонентах. Ви дізнаєтесь, як використовувати useMemo, useCallback та useRef для оптимізації рендерингу та зберігання посилань на DOM елементи. Ви освоїте створення та використання власних кастомних хуків для повторного використання логіки між компонентами. Ви також дізнаєтесь, як організувати навігацію у вашому React додатку з допомогою React Router, і як інтегрувати її у ваш проект. Останнім, але не менш важливим, є вивчення React Context API для управління глобальним станом вашого додатку та передавання даних між компонентами без пропсів.",
      },
    ],
  },
  {
    id: "tviy-mentor",
    link: "https://mii-proekt-testovyi.kwiga.com/courses/front-end-start",
    invoiceUrl: "https://secure.wayforpay.com/button/b0a9d2b9ac6f5",
    videoLink: "",
    offerId: 116480,
    image: MentorLogo,
    topic: "Front-end",
    name: "Твій Ментор",
    shortDescription:
      "Стань фронт-енд розробником за підтримки спеціаліста: крок за кроком до успіху у Веб-розробці",
    title: "Твій Ментор | Комплексний курс Front-end із професійною підтримкою",
    seo_description:
      "Стартуй кар'єру фронтенд-розробника з курсом «Твій Ментор». Отримай глибоке знання HTML, CSS, JavaScript та React під керівництвом досвідченого ментора. Запишись на курс вже сьогодні!",
    students: 4,
    lastUpdated: "16/09/24",
    rating: 5,
    price: "2000$",
    courseDuration: 168,
    description:
      "Привіт! Я Микола Кіпняк, фронтенд-розробник із 13 роками досвіду. Я тут, щоб допомогти тобі освоїти HTML, CSS та JavaScript – три ключові технології для створення сучасних та ефективних веб-сайтів. Я допоможу тобі освоїти найпопулярнішу бібліотеку для розробки веб-сайтів - Реакт. Якщо ти мрієш почати кар'єру в веб-розробці або просто хочеш поглибити свої знання, я допоможу тобі досягти мети.",
    keyPoints: [
      "Знайомство з основами веб-розробки: Вивчення принципів роботи інтернету, веб-сайтів та ролі HTML, CSS у створенні веб-сторінок",
      "Освоєння базових HTML тегів: Розуміння структури HTML-документа, робота з основними тегами для створення контенту, включаючи списки, зображення, посилання та таблиці",
      "Основи стилізації за допомогою CSS: Навчання застосування CSS для покращення зовнішнього вигляду веб-сторінок за допомогою вбудованих, внутрішніх та зовнішніх стилів",
      "Поглиблене використання CSS для стилізації: Робота з бокс-моделлю, позиціонуванням елементів, налаштуванням шрифтів і адаптивним дизайном за допомогою медіа-запитів",
      "Опанування FlexBox та Grid: Вивчення сучасних методів верстання для створення гнучких та адаптивних макетів веб-сторінок",
      "Основи JavaScript: вивчення базових концепцій JavaScript, включаючи змінні, типи даних, умови, цикли та функції.",
      "Області видимості та функції: глибоке розуміння функцій, їх аргументів, області видимості, а також використання функцій вищого порядку.",
      "Робота з масивами та об'єктами: навчання створення та маніпуляції масивами та об'єктами, а також використання методів для їх обробки.",
      "DOM-маніпуляції: освоєння роботи з елементами DOM, їх стилізацією та маніпуляцією через JavaScript.",
      "Система контролю версій: освоєння Git та GitHub для управління кодом та співпраці в командах.",
      "Обробка подій: навчання реагуванню на події, такі як кліки, введення тексту та інші взаємодії з користувачем.",
      "Асинхронне програмування: освоєння основ асинхронного JavaScript, включаючи проміси, async/await та AJAX-запити.",
      "Об’єктно-орієнтоване програмування: вивчення принципів ООП, створення класів та наслідування в JavaScript.",
      "Основи React: введення в React, включаючи JSX, компоненти, управління станом та обробку подій.",
      "Просунуті концепції React: освоєння хуків, навігації за допомогою React Router та створення кастомних хуків.",
    ],
    expectations: [
      "Онлайн сессії кожен тиждень",
      "Регулярні домашні завдання та їх перевірка",
      "Персональний чат з ментором у Телеграм",
      "Підготовка до співбесіди з HR спеціалістом",
      "Підготовка до технічної співбесіди",
      "За умови успішного навчання і освоєння матерілу - долучення до реального проекту від ментора з подальшою можливістю працевлаштування",
    ],
    lessons: [
      {
        lessonTopic: "HTML",
        lessonsDescription:
          "У цьому розділі ви дізнаєтесь основи веб-розробки: як працює Інтернет і веб-сайти, навіщо потрібні HTML та CSS. Ви освоїте використання основних HTML-тегів для створення структури веб-сторінок, включаючи заголовки, списки, зображення, посилання, таблиці та форми. Крім того, ви зрозумієте, як правильно організувати семантику HTML для кращого розуміння коду браузерами.",
      },
      {
        lessonTopic: "Базовий CSS",
        lessonsDescription:
          "У цьому розділі ви дізнаєтесь, що таке CSS та як він працює. Ви навчитесь використовувати різні способи підключення стилів до веб-сторінки: вбудований, внутрішній та зовнішній CSS. Також ви освоїте основи роботи з селекторами, зокрема з class і id, та навчитесь застосовувати псевдо-класи і псевдо-елементи для більш гнучкого та ефективного оформлення елементів на веб-сторінці.",
      },
      {
        lessonTopic: "Просунутий CSS",
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з просунутими техніками стилізації веб-сторінок за допомогою CSS. Ви навчитесь створювати та стилізувати макети за допомогою бокс-моделі, використовувати властивості display, float і clear для розміщення елементів, а також освоїте методи позиціонування, такі як статичне, відносне та абсолютне. Ви дізнаєтесь, як правильно центрувати елементи, обирати шрифти для веб-сайту, налаштовувати розміри елементів (CSS Sizing) і застосовувати медіа-запити (Media Queries) для адаптивної верстки.",
      },
      {
        lessonTopic: "FlexBox & Grid",
        lessonsDescription:
          "У цьому розділі ви поглибите свої знання про сучасні методи розташування елементів на веб-сторінках. Ви дізнаєтесь, як ефективно використовувати Flexbox для створення гнучких макетів, освоїте управління напрямком, розкладом та розмірами елементів за допомогою Flex. Ви також навчитесь працювати з CSS Grid для створення складніших макетів, зрозумієте, як налаштовувати розміри сітки та розміщення елементів у решітці.",
      },
      {
        lessonTopic: "Система контролю версій git, GitHub",
        lessonsDescription:
          "У цьому розділі ви освоїте основи системи контролю версій Git і платформу GitHub. Ви навчитесь працювати з командною строкою та виконувати основні операції з файлами, такими як їх створення та видалення. Ви дізнаєтесь, як організовувати код за допомогою репозиторіїв GitHub, управляти гілками та злиттями (merge). Крім того, ви розглянете приклад робочого процесу розробника і дізнаєтесь, як розгортати веб-сайти за допомогою GitHub Pages.",
      },
      {
        lessonTopic: "JavaScript Basic",
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами JavaScript, основною мовою програмування для веб-розробки. Ви навчитесь працювати з різними типами даних, такими як числа, рядки, boolean значення та їх методами. Ви дізнаєтесь, як використовувати спеціальні конструкції, такі як шаблонні рядки та оператори порівняння. Також ви освоїте базові концепції умовних операторів, включаючи if else, switch case, і тернарний оператор, що дозволяють створювати логічні умови у вашому коді. У кінці розділу ви зможете ефективно запускати та тестувати ваш JavaScript код у різних сценаріях.",
      },
      {
        lessonTopic: "JavaScript - масиви, методи, цикли",
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся, як працювати з масивами в JavaScript: створювати та редагувати їх, використовувати різноманітні методи для маніпуляцій (додавання, видалення, злиття, реверсування) та освоїти принципи роботи з об'єктами. Ви навчитеся використовувати цикли для автоматизації процесів, включаючи for, while, та for...of, а також дізнаєтеся про різницю між масивами і об'єктами, способи їх порівняння і властивості. Опанування цих тем допоможе вам створювати більш ефективний і динамічний код.",
      },
      {
        lessonTopic: "JavaScript - області видимості",
        lessonsDescription:
          "У цьому розділі ви навчитеся основам функцій у JavaScript, включаючи їх створення, аргументи, та значення, яке вони повертають. Ви дізнаєтеся про область видимості функцій, блочну та лексичну область видимості, а також про функціональні вирази і функції вищого порядку. Ви освоїте поняття callback-функцій, hoisting, а також методи масивів, такі як forEach, map, find, filter, every, some, sort і reduce, а також різницю між звичайними і стрілочними функціями.",
      },
      {
        lessonTopic: "JavaScript - нові методи. This",
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся про нові можливості JavaScript, такі як параметри функцій за замовченням і використання оператора spread для масивів та об'єктів. Ви освоїте концепцію об'єкта Arguments, функціональність rest аргументів, а також деструктуризацію масивів, об'єктів і параметрів функцій. Ви також навчитеся використовувати скорочений запис властивостей об'єкта, обчислювальні властивості, додавати методи до об'єкта, і розбиратися в контексті this в методах та функціях.",
      },
      {
        lessonTopic: "DOM - вибір і маніпуляція елементами",
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся, як працювати з Document Object Model (DOM) для вибору та маніпуляції елементами на веб-сторінці. Ви освоїте основи DOM, такі як доступ до елементів за ID, тегом або класом, використання querySelector, а також управління текстом та HTML вмістом. Ви навчитеся працювати з атрибутами елементів, змінювати стилі, маніпулювати класами через classList, а також створювати, додавати і видаляти елементи в DOM.",
      },
      {
        lessonTopic: "JavaScript Events",
        lessonsDescription:
          "У цьому розділі ви вивчите основи обробки подій у JavaScript. Ви дізнаєтеся про властивості подій та використання addEventListener для прив’язки обробників подій до елементів. Ви навчитеся обробляти події з клавіатури, такі як keypress, keyup і keydown, а також події форм, включаючи preventDefault. Ви також ознайомитеся з подіями для елементів введення, такими як input і change.",
      },
      {
        lessonTopic: "Асинхронний JavaScript",
        lessonsDescription:
          "У цьому розділі ви дізнаєтеся про асинхронність у JavaScript, починаючи з основного принципу однопотоковості та стека викликів (CallStack). Ви вивчите, як уникнути 'callback hell' за допомогою промісів (Promises), а також значення resolve і reject. Ви ознайомитесь із запитами AJAX, форматом JSON, та різними способами роботи з даними через XMLHttpRequest і Fetch API. Ви також дізнаєтеся про бібліотеку Axios для роботи з HTTP-запитами та освоїте асинхронні функції (async/await), включаючи використання await для обробки декількох асинхронних запитів.",
      },
      {
        lessonTopic: "Об’єктно орієнтовний JavaScript",

        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами об'єктно-орієнтованого програмування (ООП) в JavaScript. Ви дізнаєтесь, що таке прототипи і як вони працюють. Ви почнете з основних концепцій ООП і вивчите функції-фабрики для створення об'єктів. Далі ви розглянете патерн конструкторів та JavaScript класи, а також більш складні аспекти, такі як наслідування через підкласи та використання методу super для доступу до властивостей та методів батьківських класів.",
      },
      {
        lessonTopic: "Basic React",
        lessonsDescription:
          "У цьому розділі ви ознайомитесь з основами React, популярної бібліотеки для створення інтерфейсів користувача. Ви дізнаєтесь, що таке React і як використовувати JSX для написання компонентів. Ви також освоїте основи роботи з пакетними менеджерами, такими як npm і yarn. Ви навчитесь імпортувати та експортувати модулі, використовувати MUI для стилізації компонентів, а також передавати дані через props. Ви розглянете умови рендерингу, роботи зі списками і використання React Dev Tools для налагодження. Ви дізнаєтесь про різні методи стилізації в React, обробку подій і управління станом компонентів.",
      },
      {
        lessonTopic: "Intermediate React",
        lessonsDescription:
          "У цьому розділі ви поглибите свої знання з React, освоївши важливі хуки та концепції. Ви дізнаєтесь що таке хук та навчитесь використовувати їх у компонентах. Ви дізнаєтесь, як використовувати useMemo, useCallback та useRef для оптимізації рендерингу та зберігання посилань на DOM елементи. Ви освоїте створення та використання власних кастомних хуків для повторного використання логіки між компонентами. Ви також дізнаєтесь, як організувати навігацію у вашому React додатку з допомогою React Router, і як інтегрувати її у ваш проект. Останнім, але не менш важливим, є вивчення React Context API для управління глобальним станом вашого додатку та передавання даних між компонентами без пропсів.",
      },
      {
        lessonTopic: "Advanced React",
        lessonsDescription:
          "У цьому розділі ви вдосконалите свої знання з React та більш детально розберетесь як взаємодіяти з різними бібліотекамі для отримання крутого результату",
      },
    ],
  },
];
