import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 180px;
  justify-content: space-between;
  &:hover {
    transform: scale(1.06);
  }
`;

export const CastChar = styled.p`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: navy;
`;
export const CastName = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;

// import styled from "styled-components";

// export const ActorsList = styled.ul`
// list-style: none;
// display: flex;
// gap: 15px;
// flex-wrap: wrap
// `
// export const ActorsItem = styled.li`
// width: 200px`

// export const ActorName = styled.h2`
// margin-bottom: 5px;
// font-size: 20px`