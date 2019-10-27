import styled from 'styled-components';

export const ListItem = styled.li`
  margin: 2px 0;
  text-align: center;
  padding: 10px 0 0;
  transition: 0.3s;
  width: 80%;
  height: 100%;
  & + li {
    border-top: 1px solid #dddddd;
  }

  &:hover {
    background-color: ${props => props.stateColor};
    font-size: larger;
    border: 0.5px solid #dddddd;
    border-radius: 3px;
    cursor: pointer;
    p {
      font-size: 1em;
    }
  }

  p {
    font-weight: 200;
    font-size: 13px;
    color: #bbb;
  }
`;
