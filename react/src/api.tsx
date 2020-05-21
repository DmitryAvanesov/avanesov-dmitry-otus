import axios from 'axios';
import { Dispatch } from 'react';
import { clickSearchButton, updateData } from './redux/actions';

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

export const fetchPosts = (name: string, data: IData) => {
  return async (dispatch: Dispatch<any>) => {
    const res = await fetchApiCall(name).catch(err => console.log(err));

    if (!res) {
      dispatch(updateData(undefined));
    }
    else if (!data || res.city.name != data.city.name) {
      dispatch(updateData(res));
    }
  };
}