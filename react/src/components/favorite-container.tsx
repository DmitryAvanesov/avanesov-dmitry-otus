import React, { useState, Dispatch, SetStateAction } from 'react';
import { FavoriteCity } from './favorite-city';

interface IProps {
  cities: Array<string>,
  callbackChangeSelected: (city: string) => void
}

export function FavoriteContainer(props: IProps): JSX.Element {
  const [selected, setSelected]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const handleFavoriteCityClick = (city: string) => {
    if (city != selected) {
      setSelected(city);
      props.callbackChangeSelected(city);
    }
  };

  return (
    <div className="favorite-container">
      {props.cities.map((city: string, index: number) => <FavoriteCity key={index} name={city} callbackFavoriteCityClick={handleFavoriteCityClick} />)}
    </div>
  );
}