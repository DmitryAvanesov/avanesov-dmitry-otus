import React, { } from 'react';
import { SearchInput } from './seacrh-input';
import { SearchButton } from './search-button';
import { SearchError } from './search-error';

export function SearchContainer(): JSX.Element {
  return (
    <div className="search-container">
      <SearchInput />
      <SearchButton />
      <SearchError />
    </div>
  );
}