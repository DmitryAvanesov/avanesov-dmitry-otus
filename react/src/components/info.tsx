import React, { } from 'react';
import { useSelector } from 'react-redux';
import { data } from '../constants';
import { Switch, Route, useLocation } from 'react-router-dom';

interface IState {
  favorite: {
    selected: string
  }
}

export const Info = () => {
  const name = useLocation().pathname.substr(1);

  return (
    <Switch>
      <Route exact path='/'>
        <div className="info">
          {<div>Data will be displayed here</div>}
        </div>
      </Route>
      <Route path={`/${name}`}>
        <div className="info">
          <div className="info-name">{name}</div>
          {name ? Object.entries(data[name]).map(([objKey, objVal]: [string, string], index: number) => <div key={index} className="info-item"><span className="info-key">{objKey}</span> <span className="info-val">{objVal}</span></div>) : ''}
        </div>
      </Route>
    </Switch>
  );
}