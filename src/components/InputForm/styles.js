import styled from 'styled-components'

export const InputForm = styled.div`
  margin: 5px;
  width: 50%;

  p, label {
    width: 200px;
    font-size: 14px;
    color: #333;
    margin-bottom: 3px;
    margin-top: 20px;
  }
  input {
    background-color: ${props => props.inputColor || "#eae1ed"};
    height: 20px;
    width: 100%;
    color: #333333;
    border: none;
    border-bottom: 1px solid #aaa;
    &::placeholder {
      color: #c9c0cc;
      font-weight: bold;
    }
    &:focus {
      border-color: #ff4fb0;
    }
  }

  textarea {
    background-color: #eae1ed;
    resize: none;
    width: 300px;
    margin: 5px 0;
    border: 1px solid #aaaaaa;
    border-radius: 4px;

    &:focus {
      border-color: #ff4fb0;
    }
  }
`;