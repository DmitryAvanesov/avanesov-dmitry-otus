import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../redux/actions';

export const SearchInput = () => {
  const dispatch = useDispatch();

  return (
    <input className="search-input" onChange={e => { dispatch(changeSearchInput(e.target.value)) }}></input>
  );
}