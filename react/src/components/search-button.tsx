import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickSearchButton, updateData } from '../redux/actions';
import { Link, useParams } from 'react-router-dom';
import { fetchApiCall, IData, fetchPosts } from '../api';
import { Dispatch } from 'redux';

interface IState {
  search: {
    query: string,
    errorMessage: string,
    data: IData | undefined
  }
}

export const SearchButton = () => {
  const query = useSelector((state: IState) => state.search.query);
  const data = useSelector((state: IState) => state.search.data);
  const dispatch = useDispatch();

  const dispatchAll = (query: string, data: IData) => {
    dispatch(clickSearchButton());
    dispatch(fetchPosts(query, data));
  };

  return (
    <Link to={`/${query}`}>
      <button className="search-button" onClick={() => dispatchAll(query, data)}>Search</button>
    </Link>
  );
}