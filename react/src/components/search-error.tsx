import React, { } from 'react';
import { useSelector } from 'react-redux';

interface IState {
  search: {
    errorMessage: string
  }
}

export const SearchError = () => {
  const errorMessage = useSelector((state: IState) => state.search.errorMessage);

  return (
    <div className="search-error">{errorMessage}</div>
  );
}