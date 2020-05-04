import React, { } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { IData, fetchApiCall } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../redux/actions';

interface IState {
  search: {
    data: IData
  }
}

export const Info = () => {
  const data = useSelector((state: IState) => state.search.data);
  const dispatch = useDispatch();
  const { name } = useParams();

  const fetchPosts = () => {
    return async () => {
      const res = await fetchApiCall(name);

      if (!res) {
        dispatch(updateData(undefined));
      }
      else if (!data || res.city.name != data.city.name) {
        dispatch(updateData(res));
      }
    };
  }

  fetchPosts()();

  return (
    <Switch>
      <Route exact path='/'>
        <div className="info">
          {<div>Data will be displayed here</div>}
        </div>
      </Route>
      <Route path={`/${name}`}>
        <div className="info">
          {data ? <div className="info-name">{data.city.name}</div> : <div>{name}</div>}
          {data ? <div>{data.list[0].weather[0].description}</div> : <div>No data found</div>}
        </div>
      </Route>
    </Switch>
  );
}