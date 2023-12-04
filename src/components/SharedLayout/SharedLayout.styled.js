import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing(4)};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  height: 60px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: ${p => p.theme.spacing(2)};
`;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.burgundy};
  font-weight: 700;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(5)};
  border-radius: ${p => p.theme.radii.md};

  &.active {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.orange};
  }
`;
