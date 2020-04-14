import React, { MouseEvent } from 'react';

interface IProps {
  callbackSearchButtonClick: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

export function SearchButton(props: IProps): JSX.Element {
  return (
    <button className="search-button" onClick={e => { props.callbackSearchButtonClick(e) }}>Search</button>
  );
}