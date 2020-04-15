import React, { useState, Dispatch, SetStateAction } from 'react';
import { SearchContainer } from './search-container';
import { FavoriteContainer } from './favorite-container';
import { Info } from './info';

interface ICityDict {
  [key: string]: ICityData;
}

export interface ICityData {
  temperature: string,
  wind: string,
  pressure: string,
  humidity: string
}

export function MainContainer(): JSX.Element {
  const [favorites, setFavorites]: [Array<string>, Dispatch<SetStateAction<Array<string>>>] = useState(new Array<string>());
  const [shown, setShown]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const data: ICityDict = {
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

  const handleAddToFavorite = (city: string) => {
    const newFavorites = [...favorites];
    newFavorites.push(city);
    setFavorites(newFavorites);
  };

  const handleChangeSelected = (city: string) => {
    setShown(city);
  };

  return (
    <div>
      <SearchContainer cities={Object.keys(data)} callbackAddToFavorite={handleAddToFavorite} />
      <FavoriteContainer cities={favorites} callbackChangeSelected={handleChangeSelected} />
      <Info name={shown} data={data[shown]} />
    </div>
  );
}