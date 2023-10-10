import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReviewAuthor = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.div`
  font-size: 16px;
  line-height: 1.4;
`;