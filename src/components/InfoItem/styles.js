import styled from 'styled-components';

export const Item = styled.div`
  margin-left: 100px;
  width: 300px;
  height: auto;
  max-height: 100px;
  border-bottom: 0.1em solid rgba(230, 186, 210, 0.5);
  border-left: 0.1em solid rgba(230, 186, 210, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  word-break: break-all;

  span {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
    opacity: 0.8;
    width: 100%;
    height: 50%;
    margin-bottom: 2px;
    color: #abcbd1;
    padding: 5px 5px 0 5px;
    margin-top: 8px;
    padding-top: 15px;
  }

  p {
    color: #5a5a5a;
    text-align: center;
    width: 100%;
    font-size: 15px;
    padding: 0px 5px;
  }

`;
