import styled from 'styled-components';

export const FormPopup = styled.form`
  display: ${props => props.currDisplay ? "flex" : "none"};
  position: fixed;
  background-color: white;
  max-width: 300px;
  background-color: #95bad8;
  padding: 0 10px;
  border: 0px none transparent;
  border-radius: 20px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    font-size: 15px;
    color: white;
  }

  h3 {
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 20px;
  }

  input {
    padding-left: 5px;
    height: 30px;
    width: 100%;
    margin: 10px 0;
    box-shadow: 2px 2px 2px rgba(249, 201, 227, 0.7);
    &[type=file] {
      background-color: inherit;
      border: none;
      width: 100%;
      height: fit-content;
      box-shadow: none;
      color: white;
    }
  }

  textarea {
    width: 90%;
    box-shadow: 2px 2px 2px rgba(249, 201, 227, 0.7);
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center  ;
  }
`;
