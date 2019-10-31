import styled from 'styled-components';

export const PagesIndexWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-self: center;
  justify-content: center;
  max-width: 900px;
  min-width: 900px;
  a {
    color: #79b7d4;
    text-decoration: none;
    transition: 0.15s;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 18px;

    &:hover {
      color: #f02996;
    }
  }

`;

export const PagesIndexList = styled.ul`

    li {
      display: inline-block;
      margin: 0 4px;

      a {
        margin: inherit;
      }

    }


`;

export const PageButton = styled.button`
  background-color: inherit;
  width: fit-content;
  height: fit-content;
  border: 0px solid transparent;
  color: ${props => (props.specialColor ? "#f02996" : "#79b7d4")};
  text-decoration: none;
  transition: 0.15s;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 18px;
  &:hover {
    color: #f02996;
  }

  &:disabled {
    color: #8f8f8f;
    cursor: not-allowed;
  }
`;