import styled from 'styled-components';


export const PubWrapper = styled.div`
  align-self: center;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  min-width: 900px;

  ul {
    list-style: none;
    margin-bottom: 11px;
    margin-top: 7px;
    color: #8f8f8f;

    li {
      background-color: ${props => props.status};
      max-height: 400px;
      min-width: 800px;
      border-radius: 3px;
      margin: 15px 0;

      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      ~li {
        border-top: 1px solid #e6bad2;
      }

    span {
        text-align: center;
        margin: 10px 20px;
        max-width: 16%;
        min-width: 16%;
        min-height: 100%;

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
        margin: 10px 0; 
        margin-right: 20px;
        transition: 0.25s;
        width: 100px;
        height: 40px;
        border: 0.001em solid #e6bad2;
        border-radius: 5px;

        &:hover {
          background-color: #ededed;
          color: #e897c3;
          font-weight: bolder;
          border-width: 0.2em;
          /* background-color: #; */
        }
      }

    }
  }
}

`