import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { SearchInput } from './seacrh-input';
import { SearchButton } from './search-button';
import { SearchError } from './search-error';

interface IProps {
  cities: Array<string>,
  callbackAddToFavorite: (city: string) => void
}

export function SearchContainer(props: IProps): JSX.Element {
  const [added, setAdded]: [Array<string>, Dispatch<SetStateAction<Array<string>>>] = useState(new Array<string>());
  const [query, setQuery]: [string, Dispatch<SetStateAction<string>>] = useState('');
  const [errorMessage, setErrorMessage]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSearchButtonClick = (): void => {
    if (props.cities.includes(query)) {
      if (added.includes(query)) {
        setErrorMessage('This city is already in favorites list');
      }
      else {
        const newSelected = [...added];
        newSelected.push(query);
        setAdded(newSelected);
        setErrorMessage('');

        props.callbackAddToFavorite(query);
      }
    }
    else {
      setErrorMessage('Error: city not found');
    }
  };

  return (
    <div className="search-container">
      <SearchInput />
      <SearchButton callbackSearchButtonClick={handleSearchButtonClick} />
      <SearchError message={errorMessage} />
    </div>
  );
}