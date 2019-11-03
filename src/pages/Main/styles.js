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
  max-height: ${props => props.inputHeight || "100%"};
  background-color: ${props => props.inputColor || "#fff1f3"};
  padding: ${props => props.inputPadding || "7% 0"};

  h2 {
    min-width: 100%;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    margin: 4% 1%;
    margin-bottom: 6%;
    color: #262626;
    text-align: left;
  }

  pre {
    color: #fff1f3;
    font-size: 18px;
    max-width: 40%;
    white-space: pre-wrap;
    text-align: center;

    p {
      min-width: 100%;
      font-weight: bold;
      font-size: 24px;
      text-align: center;
      margin-bottom: 6%;
    }

  }

  a {
    color: #fff1f3;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    margin-top: 4%;
    font-family: monospace;
    transition: 0.25s;
    &:hover {
      background-color:#039DE5;
      padding: 1% 0;
      border-radius: 3%;
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
