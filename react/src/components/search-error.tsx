import React, { ChangeEvent } from 'react';

interface IProps {
  message: string
}

export function SearchError(props: IProps): JSX.Element {
  return (
    <div className="search-error">{props.message}</div>
  );
}