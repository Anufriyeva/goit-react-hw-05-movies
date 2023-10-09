import React, { useEffect, useState } from 'react';
import {
  StyledAppContainer,
  // StyledImageList,
} from './App.styled';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// import Layout from './Layout/Layout';


const App = () => {

  const homeLink = '/';
  const moviesLink = '/movies';
  

  return (
    <StyledAppContainer>
      <Header homeLink={homeLink} moviesLink={moviesLink} />
      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
        <Route path={homeLink} element={<Home />} />
        <Route path={moviesLink} element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
          </Route>
        {/* </Route> */}
        </Routes>
      
    </StyledAppContainer>
  );
};

export default App;
