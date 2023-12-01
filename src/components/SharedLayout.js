import { GlobalStyle } from './GlobalStyle';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Layout>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME link</NavLink>
            </li>
            <li>
              <NavLink to="/movies"> Movies link </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Layout>
  );
};
