import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  font-weight: 900;
  color: ${p => p.theme.colors.orange};
  padding: 12px 20px;
  height: 60px;
  border-radius: 8px;

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  background-color: ${p => p.theme.colors.brown};
  color: ${p => p.theme.colors.burgundy};
  line-height: 1.5;
  letter-spacing: 0.1em;
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MovieCastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${p => p.theme.colors.orange};
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 20px;
  height: 44px;
  border-radius: 8px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  color: ${p => p.theme.colors.orange};
  padding: 12px 20px;
  height: 60px;
  border-radius: 8px;

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
  }
`;
