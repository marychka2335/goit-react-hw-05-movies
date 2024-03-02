import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Box } from './../Box';
import styled from 'styled-components';
import { Triangle } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <Box>
      <Box as="header" borderBottom="2px solid orange">
        <Box as="nav" display="flex" gridGap={15}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Box>
      </Box>
      <Suspense
        fallback={
          <div display="flex" > 
          {/* justifyContent="center" */}
            <Triangle
              height="80"
              width="80"
              color="orange"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};

const NavItem = styled(NavLink)`
  color: black;
  font-size: 28px;
  padding: 20px 0;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: orange;
  }
`;

// import { Outlet } from "react-router-dom";
// import { Container, Header, HeaderLink, Navigation } from './SharedLayout.styled';
// import { Suspense } from "react";

// export default function SharedLayout() {
//   return (
//     <Container>
//       <Header>
//       <Navigation>
//         <HeaderLink to='/'>Home</HeaderLink>
//         <HeaderLink to='/movies'>Movies</HeaderLink>
//       </Navigation>
//     </Header>
//    <Suspense fallback={<div>Loading...</div>}><Outlet /></Suspense>
//     </Container>
//   )
// }