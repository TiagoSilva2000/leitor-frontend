import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 50%;
  min-height: 80%;
  padding-bottom: 10%;
  background-color: #ffffff;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


export const FormWrapper = styled.div`
  width: 100%;
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
  margin: 3% 0;
  padding-top: 3%;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 3%;
  button {
    width: 45%;
    margin: 2% 2%;
    margin-top: 5%;
    &:hover {
      padding: initial;
    }
  }

  .lineBreaker {
    flex-basis: 60%;
  }
`;