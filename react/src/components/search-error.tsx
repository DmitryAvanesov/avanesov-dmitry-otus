import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

export const SearchError = () => {
  const errorMessage = useSelector((state: RootStateOrAny) => state.search.errorMessage);

  return (
    <div className="search-error">{errorMessage}</div>
  );
}