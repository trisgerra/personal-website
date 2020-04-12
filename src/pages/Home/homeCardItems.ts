interface IItem {
    text: string;
    color: string;
}

export interface ICard {
    name: string;
    items: IItem[],
    isDark: boolean
}

export interface ISquareItem {
  title: string;
  color: string;
  url: string;
}

const experienceList : IItem[] = [
  {
    text: '<b>2012</b> - iOS Internship',
    color: '#FF0000',
  },
  {
    text: '<b>2013</b> - iOS Developer',
    color: '#FF0000',
  },
  {
    text: '<b>2014</b> - Mobile Developer',
    color: '#FF0000',
  },
  {
    text: '<b>2015</b> - Mobile Developer & Analyst',
    color: '#FF0000',
  },
  {
    text: '<b>2016</b> - Mobile Developer, Analyst Designer',
    color: '#FF0000',
  },
  {
    text: '<b>2017</b> - Mobile Lead',
    color: '#FF0000',
  },
  {
    text: '<b>2018</b> - Frontend Developer',
    color: '#00D1FF',
  },
  {
    text: '<b>Now</b> - Senior Frontend Developer',
    color: '#00D1FF',
  },
];

const skillsList : IItem[] = [
  {
    text: '<b>iOS</b> - [Obj-C, Swift, React Native]',
    color: '#FF0000',
  },
  {
    text: '<b>Android</b> - [Java, Swift, React Native]',
    color: '#FF0000',
  },
  {
    text: '<b>Web</b> - [Vue, React]',
    color: '#00D1FF',
  },
  {
    text: '<b>Unit Testing</b> - [Jest]',
    color: '#00D1FF',
  },
  {
    text: '<b>E2E Testing</b> - [Cypress]',
    color: '#00D1FF',
  },
  {
    text: '<b>Design</b> - [Invision Studio, Sketch, Photoshop]',
    color: '#151616',
  },
  {
    text: '<b>CI/CD</b> - [Travis CI, Circle CI, CodeClimate, Jenkins, Heroku]',
    color: '#151616',
  },
  {
    text: '<b>Devops</b> - [Docker, Kubernetes]',
    color: '#151616',
  },
];

const hobbiesList : IItem[] = [
  {
    text: '<b>Vaping</b>',
    color: '#FF0000',
  },
  {
    text: '<b>Drive simulator</b>',
    color: '#FF0000',
  },
  {
    text: '<b>Fitness</b>',
    color: '#00D1FF',
  },
  {
    text: '<b>Politics</b>',
    color: '#00D1FF',
  },
  {
    text: '<b>Cryptocurrencies</b>',
    color: '#00D1FF',
  },
];

export const homeCards : ICard[] = [
  {
    name: 'WORK EXPERIENCE',
    items: experienceList,
    isDark: true,
  },
  {
    name: 'SKILLS',
    items: skillsList,
    isDark: false,
  },
  {
    name: 'HOBBIES',
    items: hobbiesList,
    isDark: true,
  },
];

export const squareCards : ISquareItem[][] = [
  [{
    title: 'GITHUB',
    color: '#151616',
    url: 'https://github.com/trisgerra',
  },
  {
    title: 'LINKEDIN',
    color: '#2D2F2F',
    url: 'https://www.linkedin.com/in/a-digiacomo/',
  },
  {
    title: 'TWITCH',
    color: '#494A4A',
    url: 'https://www.twitch.tv/asraces',
  },
  {
    title: 'CONTACT',
    color: '#2D2F2F',
    url: 'mailto:andrea.digiacomo@live.it',
  }],
];
