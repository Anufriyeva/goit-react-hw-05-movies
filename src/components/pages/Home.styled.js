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
  border: 1px solid #ccc;
  padding: 10px;
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;