import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MovieCard = styled.div`
  max-width: 200px;
  text-align: center;
  border: 1px solid #df3b01;
  border-radius: 3px;
  padding: 10px;
  background-color: #1e1e1f;

  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
    color: #df3b01;
  }
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;