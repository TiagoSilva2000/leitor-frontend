import styled from 'styled-components';

export const DefaultFlexDiv = styled.div`
  width: fit-content;
  height: 600px;
  align-self: center;
  justify-self: center;
  border: 1px solid ${props => props.borderColor || "transparent"};
  border-radius: 10px;
  background-color: ${props => props.bgColor || "inherit"};

  display: flex;
  flex-direction: ${props => props.flexDir || "row"};
  flex: 1;
  justify-content: center;
  align-items: center;
`;