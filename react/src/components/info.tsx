import React, { } from 'react';
import { ICityData } from './main-container'

interface IProps {
  name: string,
  data: ICityData
}

export function Info(props: IProps): JSX.Element {
  return (
    <div className="info">
      <div className="info-name">{props.name}</div>
      {props.data ? Object.entries(props.data).map(([objKey, objVal]: [string, string], index: number) => <div key={index} className="info-item"><span className="info-key">{objKey}</span> <span className="info-val">{objVal}</span></div>) : <div>Data will be displayed here</div>}
    </div>
  );
}