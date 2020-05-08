import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../redux/actions';

interface IState {
  search: {
    query: string
  }
}

export const SearchInput = () => {
  const query = useSelector((state: IState) => state.search.query);
  const dispatch = useDispatch();

  return (
  <input className="search-input" value={query} onChange={e => dispatch(changeSearchInput(e.target.value))}></input>
  );
}