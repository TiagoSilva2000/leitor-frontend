import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 50%;
  min-height: 650px;
  /* align-self: center; */
  background-color: #ffffff;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* border: 1px solid #eae1ed;
  border-radius: 5px; */
`;


export const FormWrapper = styled.div`
  width: 700px;
  height: auto;
  background-color: #ffffff;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormDiv = styled.div`
  border-top: 1px solid #eae1ed;
  width: 70%;
  margin-top: 15px;
  padding-top: 15px;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 15px;
  button {
    width: 45%;
    margin: 5px 5px;
    margin-top: 10px;
    &:hover {
      padding: initial;
    }
  }

  .lineBreaker {
    flex-basis: 60%;
  }
`;