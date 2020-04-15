import React, { } from 'react';

interface IProps {
  name: string,
  callbackFavoriteCityClick: (city: string) => void
}

export function FavoriteCity(props: IProps): JSX.Element {
  return (
    <div className="favorite-city" onClick={() => { props.callbackFavoriteCityClick(props.name) }}>{props.name}</div>
  );
}