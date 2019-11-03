import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  min-width: 40%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  justify-self: center;
  flex-wrap: wrap;
  margin-top: 3%;
`;



export const GenButton = styled.button`
  width: 140px;
  height: 35px;
  color: #ffffff;
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: ${props => props.inMarginLeft || "0"};
  background-color: #ed5fad;
  border: 1px solid ${props => props.inputColor || "#ed5fad"};
  border-radius: 30px;
  transition: 0.25s;
  box-shadow: 2px 2px 2px rgba(139, 192, 217, 0.7);


  &:hover {
    background-color: #E6007E;
    font-weight: bold;
  }

  &:disabled {
    opacity: 0.5;
    background-color: #c5c5c5;
    border-color: transparent;
    cursor: not-allowed;
    font-weight: inherit;
  }
`;