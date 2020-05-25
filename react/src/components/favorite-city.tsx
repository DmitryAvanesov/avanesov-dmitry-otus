import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, IData } from '../api';

interface IRootState {
  search: {
    added: Array<string>,
    data: IData
  }
}

interface IProps {
  key: number,
  index: number
}

export const FavoriteCity = ({ index }: IProps) => {
  const name = useSelector((state: IRootState) => state.search.added[index]);
  const data = useSelector((state: IRootState) => state.search.data);
  const dispatch = useDispatch();

  return (
    <Link to={`/${name}`} onClick={() => dispatch(fetchPosts(name, data))}>
      <div className="favorite-city">{name}</div>
    </Link>
  );
}