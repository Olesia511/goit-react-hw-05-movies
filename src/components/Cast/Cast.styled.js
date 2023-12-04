import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 700;
  gap: ${p => p.theme.spacing(5)};
`;

export const StyledActorCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  width: 160px;
  height: 420px;
  text-align: center;
  background-color: ${p => p.theme.colors.burgundy};

  border-radius: ${p => p.theme.radii.md};
`;

export const ActorRole = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: ${p => p.theme.colors.orange};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(5)};
`;

export const StyledImgActor = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.radii.md};
`;
