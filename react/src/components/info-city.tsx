import React, { } from 'react';
import { ICityData } from './main-container'

interface IProps {
  name: string,
  data: ICityData
}

export function FavoriteCity(props: IProps): JSX.Element {
  return (
    <div className="favorite-city">
      <div className="favorite-name">{props.name}</div>
      <div className="favorite-data">
        {Object.entries(props.data).map(([key, val]: [string, string]) => <div className="favorite-item">{key} {val}</div>)}
      </div>
    </div>
  );
}