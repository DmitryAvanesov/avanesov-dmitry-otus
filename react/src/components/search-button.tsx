import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickSearchButton } from '../redux/actions';
import { Link } from 'react-router-dom';

interface IState {
  search: {
    query: string
  }
}

export const SearchButton = () => {
  const query = useSelector((state: IState) => state.search.query);
  const dispatch = useDispatch();

  return (
    <Link to={`/${query}`}>
      <button className="search-button" onClick={() => dispatch(clickSearchButton())}>Search</button>
    </Link>
  );
}