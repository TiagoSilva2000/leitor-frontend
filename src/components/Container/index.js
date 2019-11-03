import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: ${props => props.bgColor || "white"};
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: ${props => props.nFlexDirection || "column"};
  justify-content: space-between;
  flex-wrap: wrap;
`;