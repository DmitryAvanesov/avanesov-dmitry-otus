import React, { useEffect } from 'react';
import { FavoriteCity } from './favorite-city';

interface IProps {
  cities: Array<string>
}

export function FavoriteContainer(props: IProps): JSX.Element {
  return (
    <div className="favorite-container">
      {/* {props.cities.map((city: string) => <FavoriteCity name={city} />)} */}
      {props.cities.length}
    </div>
  );
}