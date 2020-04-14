import React, { } from 'react';

interface IProps {
  name: string
}

export function FavoriteCity(props: IProps): JSX.Element {
  return (
    <div className="favorite-city">{props.name}</div>
  );
}