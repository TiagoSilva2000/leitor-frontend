import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: space-between;
  justify-content: center;
  max-height: 35px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;

  li {
    background-color: #ccc;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border-radius: 5px;

    &:hover {
      background-color: #c96740;
      a {
        color: #7d2f44;
        font-size: 18px;
      }
    }

    & + li {
      border-left: 1px solid #dddd;
    }
    a {
      color: #335;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      padding: 5px 0;
      font-weight: 600;
    }
  }
`;
