import styled from 'styled-components'

export const InputForm = styled.div`
  margin: 5px;
  width: ${props => props.customWidth || "50%"};

  p, label {
    width: 200px;
    font-size: 14px;
    color: #333;
    margin-bottom: 3px;
    margin-top: 20px;
  }
  input {
    padding-left: 5px;
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
  span {
    margin-top: 8px;
    color: rgba(255, 39, 39, 0.5);
  }

  textarea {
    padding-left: 5px;
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