import React from 'react';
import { Link } from "react-router-dom"
import { HeaderContainer, Nav } from './Header.styled';

const Header = ({ homeLink, moviesLink }) => {

    return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <Link to={homeLink}>Home</Link>
          </li>
          <li>
            <Link to={moviesLink}>Movies</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header