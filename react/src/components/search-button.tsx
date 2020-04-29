import React, { } from 'react';
import { useDispatch } from 'react-redux';
import { clickSearchButton } from '../redux/actions';

export const SearchButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="search-button" onClick={() => dispatch(clickSearchButton())}>Search</button>
  );
}