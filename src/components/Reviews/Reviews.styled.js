import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
`;

export const StyledReviewsCard = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
  width: 100%;
  color: ${p => p.theme.colors.orange};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.burgundy};
  border-radius: ${p => p.theme.radii.md};
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: ${p => p.theme.radii.md};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(4)};
  width: 70%;
`;
export const ImgContainer = styled.div`
  width: 25%;
`;

export const AuthorName = styled.h3`
  white-space: nowrap;
  margin-bottom: ${p => p.theme.spacing(5)};
`;
