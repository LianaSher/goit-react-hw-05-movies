import styled from 'styled-components';

export const MovieContainer = styled.div`
  padding: 40px 120px;
`;

export const Info = styled.div`
  display: flex;
  gap: 25px;
`;

export const Image = styled.img`
  width: 170px;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #483d8b;
`;

export const TextContent = styled.p`
  font-size: 20px;
  margin-bottom: 22px;
  font-weight: 400;
`;

export const SubTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
  color: #483d8b;
`;

export const GoBackBtn = styled.button`
  width: 120px;
  font-size: 20px;
  font-weight: 600;
  color: #483d8b;
  padding: 10px 15px;
  background-color: lightgrey;
  border: 1px solid #483d8b;
  border-radius: 6px;
  margin-bottom: 25px;
  &:hover,
  &:focus {
    background-color: #483d8b;
    color: lightgray;
  }
`;

export const ItemLink = styled.li`
  font-size: 25px;
  font-weight: 400;
  color: #212121;
  margin-bottom: 7px;
`;
