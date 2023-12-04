import styled from 'styled-components';

export const TrendCard = styled.li`
  width: 216px;
  height: 360px;
  text-align: center;
`;

export const TitleTrendCard = styled.h3`
  font-weight: 600;
  height: 70px;
  padding: ${p => p.theme.spacing(3)};

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.orange};
  }
`;
