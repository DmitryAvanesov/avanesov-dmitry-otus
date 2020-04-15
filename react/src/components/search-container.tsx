import React, { useState, Dispatch, SetStateAction, ChangeEvent, MouseEvent } from 'react';
import { SearchInput } from './seacrh-input';
import { SearchButton } from './search-button';

interface IProps {
  cities: Array<string>,
  callbackAddToFavorite: (city: string) => void
}

export function SearchContainer(props: IProps): JSX.Element {
  const [selected, setSelected]: [Array<string>, Dispatch<SetStateAction<Array<string>>>] = useState(new Array<string>());
  const [query, setQuery]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSearchButtonClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
    console.log(selected, query);

    if (props.cities.includes(query)) {
      if (selected.includes(query)) {
        alert('This city is already in favorites list');
      }
      else {
        const newSelected = [...selected];
        newSelected.push(query);
        setSelected(newSelected);

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