import React, { useEffect } from 'react';
import { ICityData } from './main-container'

interface IProps {
  name: string,
  data: ICityData
}

export function Info(props: IProps): JSX.Element {
  return (
    <div className="info">
      <div className="info-name">{props.name}</div>
      <div className="info-data">
        {props.data ? Object.entries(props.data).map(([objKey, objVal]: [string, string], index: number) => <div key={index} className="info-data-item">{objKey} {objVal}</div>) : ''}
      </div>
    </div>
  );
}