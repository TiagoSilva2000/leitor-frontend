import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 70%;
  height: 10%;
  align-self: flex-start;
  justify-self: center;

  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 3%;

  button {
    border-radius: 15px;
    width: 80px;
    height: 35px;
    margin-top: 2%;
  }

  h2 {
    margin-top: 3%;
    padding-bottom: 8px;
    max-width: 50%;
    font-size: 30px;
    word-break: normal;
    color: ${props => props.answered ? "#62629d" : "#bb4444"};
    border-bottom: 1px solid #c8c8e4;
  }

  h3 {
    margin-left: 1%;
    margin-top: 5%;
    color: #8f8f8f;
  }

  p.linker {
    font-size: 16px;
    color: #9393ca;
    text-decoration: none;
    transition: 0.15s;
    width: 50%;
    text-align: center;
    margin-top: 2%;
    margin-bottom: auto;
    &:hover {
      text-decoration: underline;
      font-weight: bold;
      color: #aaaad5;
      cursor: pointer;
    }
  }
`;

export const StyledContent = styled.section`
  max-width: 50%;
  min-height: 10%;
  max-height: 30%;
  overflow-y: scroll;
  background-color:#eeeeee;
  color: #8f8f8f;
  margin-top: 3%;
  margin-bottom: 2%;
  word-break: break-all;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px 10px;

  display: flex;
  flex: 1;
  text-align: left;
  justify-content: flex-start;
  flex-wrap: wrap;
`;


export const StyledList = styled.ul`
  list-style: none;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    color: #888888;
    max-width: 80px;
    text-align: center;
    display: inline-block;
    margin-top: 3%;
    margin-left: 1%;
  }


`;