import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  height: auto;
  max-height: 20%;

  margin-left: 50px;
  border-bottom: 0.1em solid rgba(230, 186, 210, 0.5);
  border-left: 0.1em solid rgba(230, 186, 210, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  word-break: break-all;
  flex-wrap: wrap;
  span {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
    opacity: 0.8;
    width: 100%;
    height: 50%;
    margin-bottom: 1%;
    color: #abcbd1;
    padding: 1% 1% 0 1%;
    margin-top: 2%;
    padding-top: 3%;
  }

  p {
    color: #5a5a5a;
    text-align: center;
    width: 100%;
    font-size: 15px;
    padding: 0 1%;
  }

`;
