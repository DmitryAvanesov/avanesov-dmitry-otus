import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { SearchInput } from './seacrh-input';
import { SearchButton } from './search-button';
import { SearchError } from './search-error';

interface IProps {
  cities: Array<string>,
  callbackAddToFavorite: (city: string) => void
}

export function SearchContainer(props: IProps): JSX.Element {
  return (
    <div className="search-container">
      <SearchInput />
      <SearchButton />
      <SearchError />
    </div>
  );
}