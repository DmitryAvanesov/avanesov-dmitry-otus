import React, { } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';

interface IProps {
  key: number,
  index: number
}

export const FavoriteCity = ({ index }: IProps) => {
  const name = useSelector((state: IRootState) => state.search.added[index]);

  return (
    <div className="favorite-city" onClick={() => { }}>{name}</div>
  );
}