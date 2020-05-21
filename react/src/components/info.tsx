import React, { } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { IData, fetchApiCall, fetchPosts } from '../api';
import { useSelector, useDispatch } from 'react-redux';

interface IState {
  search: {
    data: IData
  }
}

export const Info = () => {
  const data = useSelector((state: IState) => state.search.data);
  const { name } = useParams();
  const dispatch = useDispatch();

  dispatch(fetchPosts(name, data));

  return (
    <Switch>
      <Route exact path='/'>
        <div className="info">
          {<div>Data will be displayed here</div>}
        </div>
      </Route>
      <Route path={`/${name}`}>
        {data ? <div className="info-name">{data.city.name}</div> : <div>{name}</div>}
        {data ? data.list.map((item, index) =>
          <div key={index} className="info-block">
            <div className='info-item'>
              <span className='info-key'>Date</span>
              <span>{item.dt_txt}</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Temperature</span>
              <span>{item.main.temp}°C</span>
              <span>(feels like {item.main.feels_like}°C)</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Humidity</span>
              <span>{item.main.humidity}%</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Pressure</span>
              <span>{item.main.pressure} hPa</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Wind speed</span>
              <span>{item.wind.speed} meter/sec</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Cloudiness</span>
              <span>{item.clouds.all}%</span>
            </div>
            <div className='info-item'>
              <span className='info-key'>Weather</span>
              <span>{item.weather[0].description}</span>
            </div>
          </div>) : <div>No data found</div>}
      </Route>
    </Switch>
  );
}