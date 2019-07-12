interface IItem {
    text: string;
    color: string;
}

export interface ICard {
    name: string;
    items: IItem[],
    isDark: boolean
}

const experienceList : IItem[] = [
  {
    text: '2012 - iOS Internship',
    color: '#FF0000',
  },
  {
    text: '2013 - iOS Developer',
    color: '#FF0000',
  },
  {
    text: '2014 - Mobile Developer',
    color: '#FF0000',
  },
  {
    text: '2015 - Mobile Developer & Analyst',
    color: '#FF0000',
  },
  {
    text: '2016 - Mobile Developer, Analyst Designer',
    color: '#FF0000',
  },
  {
    text: '2017 - Mobile Lead',
    color: '#FF0000',
  },
  {
    text: '2018 - Frontend Developer',
    color: '#00D1FF',
  },
  {
    text: 'Now - Senior Frontend Developer',
    color: '#00D1FF',
  },
];

const skillsList : IItem[] = [
  {
    text: 'iOS - [Obj-C, Swift, React Native]',
    color: '#FF0000',
  },
  {
    text: 'Android - [Java, Swift, React Native]',
    color: '#FF0000',
  },
  {
    text: 'Web - [Vue, React]',
    color: '#00D1FF',
  },
  {
    text: 'Unit Testing - [Jest]',
    color: '#00D1FF',
  },
  {
    text: 'E2E Testing - [Cypress]',
    color: '#00D1FF',
  },
  {
    text: 'Design - [Invision Studio, Sketch, Photoshop]',
    color: '#151616',
  },
  {
    text: 'CI/CD - [Travis CI, Circle CI, CodeClimate, Jenkins, Heroku]',
    color: '#151616',
  },
  {
    text: 'Devops - [Docker, Kubernetes]',
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
