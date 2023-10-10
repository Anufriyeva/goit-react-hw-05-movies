import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
`;

export const BackButton = styled.button`
  background-color: #0073e6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #005bbd;
  }
`;

export const PosterImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CastButton = styled.button`
  background-color: #0073e6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #005bbd;
  }
`;

export const ReviewsButton = styled.button`
  background-color: #0073e6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005bbd;
  }
`;