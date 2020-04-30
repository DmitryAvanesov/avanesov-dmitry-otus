import React, { useState, Dispatch, SetStateAction } from 'react';
import { FavoriteCity } from './favorite-city';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';

export const FavoriteContainer = () => {
  const cities = useSelector((state: IRootState) => state.search.added);

  return (
    <div className="favorite-container">
      {cities.map((city: string, index: number) => <FavoriteCity key={index} index={index} />)}
    </div>
  );
}