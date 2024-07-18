export type TCourse = {
  id: number;
  name: string;
  price: string;
  rating: number;
  link: string;
  image: string;
};

export const coursesList: TCourse[] = [
  {
    id: 0,
    name: "UI/UX Design for Web and Mobile for Kids UI/UX Design for Web and Mobile for Kids",
    price: "$39.99",
    rating: 4.5,
    link: "link",
    image:
      "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/schoolgirl-using-tablet-computer-at-home-learning-having-fun-online-1024x682.jpg",
  },
  {
    id: 1,
    name: "Introduction to Python Programming",
    price: "$39.99",
    rating: 4.5,
    link: "link",
    image:
      "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/happy-female-student-using-desktop-pc-during-computer-class-and-looking-at-camera--1024x682.jpg",
  },
  // {
  //   name: "Data Science and Machine Learning Essentials",
  //   price: "$39.99",
  //   rating: 4.5,
  //   link: "link",
  //   image:
  //     "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/team-of-innovators--1024x691.jpg",
  // },
  // {
  //   name: "Ethical Hacking and Penetration Testing",
  //   price: "$39.99",
  //   rating: 4.5,
  //   link: "link",
  //   image:
  //     "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/happy-black-student-using-laptop-while-learning-with-her-friends-in-a-cafe--1024x682.jpg",
  // },
  // {
  //   name: "UI/UX Design for Web and Mobile for Kids",
  //   price: "$39.99",
  //   rating: 4.5,
  //   link: "link",
  //   image:
  //     "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/schoolgirl-using-tablet-computer-at-home-learning-having-fun-online-1024x682.jpg",
  // },
  // {
  //   name: "Introduction to Python Programming",
  //   price: "$39.99",
  //   rating: 4.5,
  //   link: "link",
  //   image:
  //     "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/happy-female-student-using-desktop-pc-during-computer-class-and-looking-at-camera--1024x682.jpg",
  // },
  // {
  //   name: "Data Science and Machine Learning Essentials",
  //   price: "$39.99",
  //   rating: 4.5,
  //   link: "link",
  //   image:
  //     "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/team-of-innovators--1024x691.jpg",
  // },
];

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
  image: string;
  description: string;
  keyPoints: string[];
  lessons: {
    lessonTopic: string;
    lessonsList: {
      id: number;
      lessonName: string;
      lessonDescription: string;
    }[];
  }[];
  instructor: {
    name: string;
    image: string;
    rank: string;
  };
  courseDuration: number;
};

export const coursesInfoList: TCourseInfo[] = [
  {
    id: 0,
    topic: "DATA SCIENCE AND AI",
    name: "UI/UX Design for Web and Mobile for Kids UI/UX Design for Web and Mobile for Kids",
    shortDescription:
      "Ultricies cubilia fermentum nascetur metus torquent finibus semper curae conubia sociosqu tempus molestie viverra",
    students: 4721,
    lastUpdated: "25/7/2024",
    price: "$39.99",
    rating: 4.5,
    link: "link",
    image:
      "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/schoolgirl-using-tablet-computer-at-home-learning-having-fun-online-1024x682.jpg",
    description:
      "Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. Tristique libero pretium platea maecenas fermentum dolor eros montes diam si. \t Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. Tristique libero pretium platea maecenas fermentum dolor eros montes diam si.",
    keyPoints: [
      "Fusce himenaeos imperdiet sodales aptent dictum ex volutpat",
      "Consequat elementum ornare ligula viverra libero",
      "Ullamcorper nam habitant blandit finibus dis tempus gravida",
      "Fusce himenaeos imperdiet sodales aptent dictum ex volutpat",
      "Consequat elementum ornare ligula viverra libero",
      "Ullamcorper nam habitant blandit finibus dis tempus gravida",
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Cras eu ultricies lorem maximus nulla vitae dapibus duis",
        lessonDescription:
          "Torquent placerat sagittis platea a morbi dapibus est nunc libero. Ante facilisi duis purus inceptos natoque massa per nunc. Accumsan euismod lorem justo sem egestas facilisi aptent feugiat pharetra class.",
      },
    ],
    instructor: {
      name: "Joshua Hamilton",
      image:
        "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/3.jpg",
      rank: "Data Science Expert",
    },
    courseDuration: 62,
  },
  {
    id: 1,
    topic: "Python for begginers",
    name: "Introduction to Python Programming",
    shortDescription:
      "Ultricies cubilia fermentum nascetur metus torquent finibus semper curae conubia sociosqu tempus molestie viverra",
    students: 4721,
    lastUpdated: "25/7/2024",
    price: "$39.99",
    rating: 4.5,
    link: "link",
    image:
      "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/happy-female-student-using-desktop-pc-during-computer-class-and-looking-at-camera--1024x682.jpg",
    description:
      "Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. Tristique libero pretium platea maecenas fermentum dolor eros montes diam si. \t Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. Tristique libero pretium platea maecenas fermentum dolor eros montes diam si.",
    keyPoints: [
      "Fusce himenaeos imperdiet sodales aptent dictum ex volutpat",
      "Consequat elementum ornare ligula viverra libero",
      "Ullamcorper nam habitant blandit finibus dis tempus gravida",
      "Fusce himenaeos imperdiet sodales aptent dictum ex volutpat",
      "Consequat elementum ornare ligula viverra libero",
      "Ullamcorper nam habitant blandit finibus dis tempus gravida",
    ],
    lessons: [
      {
        lessonTopic: "html",
        lessonsList: [
          {
            id: 1,
            lessonName:
              "Cras eu ultricies lorem maximus nulla vitae dapibus duis",
            lessonDescription:
              "Torquent placerat sagittis platea a morbi dapibus est nunc libero. Ante facilisi duis purus inceptos natoque massa per nunc. Accumsan euismod lorem justo sem egestas facilisi aptent feugiat pharetra class.",
          },
          {
            id: 2,
            lessonName: "Dictum platea eu rutrum congue tortor augue fames vel",
            lessonDescription:
              "Torquent placerat sagittis platea a morbi dapibus est nunc libero. Ante facilisi duis purus inceptos natoque massa per nunc. Accumsan euismod lorem justo sem egestas facilisi aptent feugiat pharetra class.",
          },
        ],
      },
      {
        lessonTopic: "css",
        lessonsList: [
          {
            id: 3,
            lessonName: "Viverra fusce iaculis aenean ultricies",
            lessonDescription:
              "Torquent placerat sagittis platea a morbi dapibus est nunc libero. Ante facilisi duis purus inceptos natoque massa per nunc. Accumsan euismod lorem justo sem egestas facilisi aptent feugiat pharetra class.",
          },
          {
            id: 4,
            lessonName: "Viverra fusce iaculis aenean ultricies",
            lessonDescription:
              "Torquent placerat sagittis platea a morbi dapibus est nunc libero. Ante facilisi duis purus inceptos natoque massa per nunc. Accumsan euismod lorem justo sem egestas facilisi aptent feugiat pharetra class.",
          },
        ],
      },
    ],
    instructor: {
      name: "Joshua Hamilton",
      image:
        "https://kitdemo.moxcreative.com/byteskill/wp-content/uploads/sites/9/2023/07/3.jpg",
      rank: "Data Science Expert",
    },
    courseDuration: 62,
  },
];
