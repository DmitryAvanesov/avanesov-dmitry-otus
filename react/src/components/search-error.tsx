import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

export const SearchError = () => {
  let errorMessage = useSelector((state: any) => state.errorMessage);

  return (
    <div className="search-error">{errorMessage}</div>
  );
}