import React, { ChangeEvent, MouseEvent } from 'react';
import { SearchInput } from './seacrh-input';
import { SearchButton } from './search-button';

interface IProps {
  cities: Array<string>,
  callbackAddToFavorite: (city: string) => void
}

export function SearchContainer(props: IProps): JSX.Element {
  const selected = new Array<string>();
  let query: string = '';

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    query = event.target.value;
  };

  const handleSearchButtonClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
    if (props.cities.includes(query)) {
      if (selected.includes(query)) {
        alert('This city is already in favorites list');
      }
      else {
        selected.push(query);
        props.callbackAddToFavorite(query);
      }
    }
    else {
      alert('Error: city not found');
    }
  };

  return (
    <div>
      <SearchInput callbackSearchInputChange={handleSearchInputChange} />
      <SearchButton callbackSearchButtonClick={handleSearchButtonClick} />
    </div>
  );
}