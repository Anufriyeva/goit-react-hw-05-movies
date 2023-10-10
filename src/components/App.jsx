import React, { Suspense, lazy } from 'react';
import {
  StyledAppContainer,
} from './App.styled';
import { Route, Routes } from 'react-router-dom';

// import Header from './Header/Header';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Layout from './Layout/Layout';

const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


const App = () => {

  const homeLink = '/';
  const moviesLink = '/movies';
  

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
    <StyledAppContainer>
      <Header homeLink={homeLink} moviesLink={moviesLink} />
      
        <Routes>
          <Route path={homeLink} element={<Home />} />
          <Route path={moviesLink} element={<Movies />} />
          <Route path='/movies/:movieId/*' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Routes>
      
      </StyledAppContainer>
      </Suspense>
  );
};

export default App;
