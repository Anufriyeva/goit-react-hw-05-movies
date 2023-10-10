import styled from 'styled-components';

export const MoviesContainer = styled.div`
  text-align: center;
`;

export const SearchForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='text'] {
    flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  }

  button[type='submit'] {
    background-color: #df3b01;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  /* padding: 10px; */
  font-size: 16px;
  border-radius: 4px;
  margin-left: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }
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
  padding: 10px;
  background-color: #1e1e1f;
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
    /* color: #df3b01; */
  }
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;