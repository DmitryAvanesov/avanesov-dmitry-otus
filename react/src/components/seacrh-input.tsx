import React, { ChangeEvent } from 'react';

interface IProps {
  callbackSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput(props: IProps): JSX.Element {
  return (
    <input className="search-input" onChange={e => { props.callbackSearchInputChange(e) }}></input>
  );
}