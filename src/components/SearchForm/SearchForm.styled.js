import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 33px;
  width: 250px;

  margin-right: 10px;
  font-size: 20px;
  border: solid 1px #483d8b;
  border-radius: 6px;
  padding-left: 10px;
  margin-bottom: 15px;
`;

export const SearchBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 3.5px 10px;
  color: #483d8b;
  background-color: lightgray;
  border: solid 1px #483d8b;
  border-radius: 6px;
  &:hover,
  &:focus {
    background-color: #483d8b;
    color: lightgray;
  }
`;
