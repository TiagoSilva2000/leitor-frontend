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
  width: 40%;
  height: 100%;
  margin: 2% 4% 4% 4%;
  padding: 0 3%;
  padding-top: 5%;
  padding-bottom: 5%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  button {
    width: 90%;
    height: 12%;
    min-height: 40px;
    min-width: 100px;
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
    width: 100%;
    margin-top: 3%;
    border-top: 1px solid #e6bad2;    
    padding-top: 5%;
    text-align: left;
    color: #404040;
    span {
      color: #8989ff;
      font-weight: bold;
    }
  }

  #answered {
    color: #4eff4e;
  }
`;

export const ProfileList = styled.div`
  margin-right: 1%;
  margin: 0 5%;
  width: 35%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  align-self: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  border: 1px solid;
  border-color: #ed5fad;
  border-radius: 10px;
`;