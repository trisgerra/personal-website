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
];

export const squareCards : ISquareItem[][] = [
  [{
    title: 'GIT',
    color: '#151616',
    url: 'https://github.com/trisgerra',
  },
  {
    title: 'LINKEDIN',
    color: '#2D2F2F',
    url: 'https://www.linkedin.com/in/a-digiacomo/',
  },
  {
    title: 'PROTEIT',
    color: '#494A4A',
    url: 'https://apps.apple.com/it/app/proteit/id1149272279?l=en',
  },
  {
    title: 'VAPOR',
    color: '#6C6C6C',
    url: 'https://play.google.com/store/apps/details?id=it.asfitness.android.app.vapor.vapor&hl=it',
  }],
  [{
    title: 'BLOG',
    color: '#6C6C6C',
    url: '',
  },
  {
    title: 'FITNESS',
    color: '#494A4A',
    url: '',
  },
  {
    title: 'CONTACT',
    color: '#2D2F2F',
    url: 'mailto:andrea.digiacomo@live.it',
  },
  {
    title: ':)',
    color: '#151616',
    url: '',
  }],
];
