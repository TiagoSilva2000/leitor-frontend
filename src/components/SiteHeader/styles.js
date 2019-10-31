import styled from 'styled-components'

export const Displayer = styled.div`
  display: flex;
  text-align: center;
  background-color: #019EE6;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #ffffff;
`;

export const HeaderList = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 10px 10px;
    transition: 0.3s;
    a {
      font-size: 16px;
      color: #009EE9;
      text-decoration: none;
      font-weight: 501;
    }
  }

  li:hover {
    a {
      color: #ff91cd;
    }
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 2px 10px;
  margin-left: 30px;
`;

export const Title = styled.h1`
  display: inline;
  margin-top: 35px;
  margin-left: 30px;
  color: white;
`;
