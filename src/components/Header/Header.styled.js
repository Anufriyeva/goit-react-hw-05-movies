import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;