import styled from 'styled-components';

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  max-height: 200px;
  max-width: 200px;
  border: 1px solid #eee;
  border-radius: 10%;
  display: flex;
`;

export const ImageBox = styled.div`
  margin: 60px 20px;
  padding: 15px;
  border: 0.5px solid #eee;
  width: 250px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  button {
    width: 100%;
    height: 30px;
    border-radius: 8px;
    background-color: transparent;
    color: #335;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ConfigsMenu = styled.div`
  background-color: #ddd;
  border: 1px solid #335;
  border-radius: 1.5px;
  min-width: 250px;
  min-height: 100px;
  margin: 60px 20px;
  max-height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-all;

  span {
    border-bottom: 1px solid #bbb;
    width: 90%;
    padding: 10px 0;
    margin-bottom: 3px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: #335;
  }
  ul {
    flex: 1;
    list-style: none;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileList = styled.ul`
  list-style: none;
  li {
    max-width: 300px;
    display: inline-block;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
