import axios from 'axios';

export interface IData {
  city: {
    name: string
  },
  list: [
    {
      clouds: {
        all: number
      },
      dt_txt: string,
      main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number
      },
      weather: [
        {
          description: string
        }
      ],
      wind: {
        speed: number
      }
    }
  ]
}

const apiKey = 'a4cc353dc36bff37ce82c85684d0d6e1';

export const fetchApiCall = async (name: string): Promise<IData> => {
  const json = await axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}&units=metric`,
    responseType: 'json'
  });

  return json.data;
}