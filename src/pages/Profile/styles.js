import styled from 'styled-components';

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  max-height: 200px;
  max-width: 200px;
  border: 1px solid #eee;
  border-radius: 50%;
  display: flex;
`;

export const ImageBox = styled.div`
  margin: 10px 20px 20px 20px;
  padding: 15px;
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  button {
    width: 200px;
    height: 42px;
    border: 0px hidden transparent;
    border-radius: 15px;
    font-size: 16px;
    font-weight: lighter;
    transition: 0.20s;
    background-color: #039DE5;
    color: #FCF2FF;

    &:hover {
      font-weight: bold;
      background-color: #0490d1;
    }
  }

  p {
    width: 200px;
    /* border-top: 1px solid #b2e7c8; */
    border-top: 1px solid #e6bad2;    
    padding-top: 10px;
    text-align: left;
    color: black;
    span {
      color: #8989ff;
      font-weight: bold;
    }
  }

  #answered {
    color: #4eff4e;
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
    border-bottom: 1px solid #e6bad2;
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

export const ProfileList = styled.div`
  margin-right: 80px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
