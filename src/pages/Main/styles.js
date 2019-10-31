import styled from 'styled-components'

/*
#E6007E
#FCF2FF
#039DE5
#E39AC2
#EDCABC
*/

export const MainDivs = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: ${props => props.inputHeight || "100%"};
  background-color: ${props => props.inputColor || "#ffffff"};

  pre {
    color: #ffffff;
    font-size: 18px;
    max-width: 500px;
    white-space: pre-wrap;
    text-align: center;

    p {
      font-weight: bold;
      font-size: 24px;
      text-align: center;
      margin: 10px 10px;
      margin-bottom: 30px;
    }

  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    margin-top: 20px;
    font-family: monospace;
    transition: 0.25s;
    &:hover {
      background-color:#039DE5;
      padding: 5px 0px;
      border-radius: 5px;
    }
  }
`

export const DivsList = styled.ul`
  list-style: none;
  background-color: blue;
`
export const DivIMG = styled.img`
  max-width: ${props => props.maxWidth || "200px"};
  max-height: ${props => props.maxHeight || "200px"};
  width: ${props => props.inputWidth || "100%"};
  height: ${props => props.inputHeight || "100%"};
  border-radius: 10px;
`;
