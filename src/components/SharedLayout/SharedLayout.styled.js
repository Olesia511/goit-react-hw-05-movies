import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 60px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const StyledLink = styled(NavLink)`
  color: #15100a;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 8px;

  &.active {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.orange};
  }
`;
