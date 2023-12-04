import { GlobalStyle } from '../GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Header, Layout, NavList, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies"> MOVIES</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Layout>
  );
};
