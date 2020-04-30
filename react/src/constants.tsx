interface IData {
  [key: string]: {
    temperature: string,
    wind: string,
    pressure: string,
    humidity: string
  };
}

export const data: IData = {
  'moscow': {
    temperature: '+7.3',
    wind: '1 m/s western',
    pressure: '735 mmHg',
    humidity: '45%'
  },
  'saint petersburg': {
    temperature: '+1.1',
    wind: '2 m/s southern',
    pressure: '746 mmHg',
    humidity: '76%'
  },
  'kazan': {
    temperature: '+6.3',
    wind: '0 m/s calm',
    pressure: '752 mmHg',
    humidity: '64%'
  },
  'tomsk': {
    temperature: '+7.7',
    wind: '1 m/s southern',
    pressure: '750 mmHg',
    humidity: '42%'
  }
};