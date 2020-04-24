import React, { } from 'react';

interface IProps {
  callbackSearchButtonClick: () => void
}

export function SearchButton(props: IProps): JSX.Element {
  return (
    <button className="search-button" onClick={props.callbackSearchButtonClick}>Search</button>
  );
}