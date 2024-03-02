import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Box } from './../Box';
import styled from 'styled-components';
import { Triangle } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <Box>
      <Box as="header" borderBottom="1px solid blue">
        <Box as="nav" display="flex" gridGap={20}>
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
              color="blue"
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
  font-size: 22px;
  padding: 20px 0;

  &.active {
    color: blue; 

  }

  :hover:not(.active) {
    color: navy;
  }
`;

