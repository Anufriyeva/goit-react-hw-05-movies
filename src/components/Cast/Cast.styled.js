import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 20px;
  background-color: rgb(1, 1, 1);
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const CastCard = styled.li`
  width: 150px;
  margin: 10px;
  text-align: center;
  background-color: #1e1e1f;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ActorImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

export const ActorName = styled.p`
  padding: 10px;
  margin: 0;
  font-weight: bold;
`;