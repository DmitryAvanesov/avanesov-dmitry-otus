import React, { } from 'react';
import { useSelector } from 'react-redux';
import { data } from '../constants';

interface IState {
  favorite: {
    selected: string
  }
}

export const Info = () => {
  const name = useSelector((state: IState) => state.favorite.selected);

  return (
    <div className="info">
      <div className="info-name">{name}</div>
      {name ? Object.entries(data[name]).map(([objKey, objVal]: [string, string], index: number) => <div key={index} className="info-item"><span className="info-key">{objKey}</span> <span className="info-val">{objVal}</span></div>) : <div>Data will be displayed here</div>}
    </div>
  );
}