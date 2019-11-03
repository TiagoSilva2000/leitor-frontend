import styled from 'styled-components';


export const PubWrapper = styled.div`
  width: 100%;
  align-self: center;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    list-style: none;
    margin-bottom: 2%;
    margin-top: 1%;
    color: #8f8f8f;
    width: 80%;

    li {
      background-color: ${props => props.status};
      max-height: 80%;
      min-width: 100%;
      border-radius: 3px;
      margin: 3% 0;

      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      ~li {
        border-top: 1px solid #e6bad2;
      }

    span {
        text-align: center;
        margin: 2% 4%;
        max-width: 16%;
        min-width: 5%;
        min-height: 100%;
        width: 25%;

      button {
        width:30px;
        height:30px;

        font-size: 16px;
        font-weight: lighter;
        border: 0px hidden transparent;
        border-radius: 50%;
        background-color: #039DE5;
        color: #FCF2FF;
        margin-left: 30px;
        transition: 0.20s;


        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          font-weight: bold;
          background-color: #0490d1;
        }
      }

      a {
        color: #039DE5;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin: 2% 0;
        margin-right: 4%;
        transition: 0.25s;
        width: 100%;
        height: 40px;
        border: 0.001em solid #e6bad2;
        border-radius: 5px;
        padding: 3px;

        &:hover {
          background-color: #ededed;
          color: #e897c3;
          font-weight: bolder;
          border-width: 0.2em;
        }
      }
    }
  }
}
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  align-self: center;
  background-color: #eeeeee;
  border: 1px solid #ed5fad;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;