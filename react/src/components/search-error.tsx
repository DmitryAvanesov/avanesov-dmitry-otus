import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { IRootState } from '../redux/store';

export const SearchError = () => {
  const errorMessage = useSelector((state: IRootState) => state.search.errorMessage);

  return (
    <div className="search-error">{errorMessage}</div>
  );
}