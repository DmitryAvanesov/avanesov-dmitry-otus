import React, { } from 'react';
import { SearchContainer } from './search-container';
import { FavoriteContainer } from './favorite-container';
import { Info } from './info';

export const MainContainer = () => {
  return (
    <div className='main-container'>
      <SearchContainer />
      <FavoriteContainer />
      <Info />
    </div>
  );
}