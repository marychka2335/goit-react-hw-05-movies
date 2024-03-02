import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TrendCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 270px;
  justify-content: space-between;
  &:hover {
    transform: scale(1.06);
  }
`;
export const TitleLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;

export const BtnBack = styled.button`
  background-color: orange;
  color: black;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  margin-top: 10px;
  font-weight: 500;
  line-height: 1.33;
  font-size: 14px;
  &:hover {
    transform: scale(1.06);
  }
`;

export const TrendDesc = styled.p`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: grey;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;


// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const Wrapper = styled.div`
// padding: 10px 0`

// export const Films = styled.ul`
// list-style: none;
// display: flex;
// flex-direction: column;
// gap: 7px`

// export const Film = styled(Link)`
// text-decoration: none;
// color: black
// `