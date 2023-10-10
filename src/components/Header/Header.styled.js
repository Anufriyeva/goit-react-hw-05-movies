import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #1e1e1f;
  color: white;
  padding: 10px;
  border-radius: 3px;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 30px;
    text-transform: uppercase;
    
    

    li {
      margin: 0 10px;

      a {
        color: #df3b01;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;