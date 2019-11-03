import styled from 'styled-components';

export const DefaultFlexDiv = styled.div`
  width: ${props => props.correctWidth || "fit-content"};
  height: ${props => props.correctHeight || "80%"};
  align-self: center;
  justify-self: center;
  border: 1px solid ${props => props.borderColor || "transparent"};
  border-radius: 10px;
  background-color: ${props => props.bgColor || "inherit"};
  padding: 0 5%;

  display: flex;
  flex-direction: ${props => props.flexDir || "row"};
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;