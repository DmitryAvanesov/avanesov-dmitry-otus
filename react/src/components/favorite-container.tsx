import React, { } from 'react';
import { FavoriteCity } from './favorite-city';
import { useSelector } from 'react-redux';

interface IState {
  search: {
    added: Array<string>
  }
}

export const FavoriteContainer = () => {
  const cities = useSelector((state: IState) => state.search.added);

  return (
    <div className="favorite-container">
      {cities.map((city: string, index: number) => <FavoriteCity key={index} index={index} />)}
    </div>
  );
}