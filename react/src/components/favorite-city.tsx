import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickFavoriteCity } from '../redux/actions'

interface IRootState {
  search: {
    added: Array<string>
  }
}

interface IProps {
  key: number,
  index: number
}

export const FavoriteCity = ({ index }: IProps) => {
  const name = useSelector((state: IRootState) => state.search.added[index]);
  const dispatch = useDispatch();

  return (
    <div className="favorite-city" onClick={() => dispatch(clickFavoriteCity(name))}>{name}</div>
  );
}