import styled from 'styled-components';

export const SearchMovieCard = styled.li`
  width: 30%;
  height: 660px;
  text-align: center;
  color: ${p => p.theme.colors.orange};
  background-color: ${p => p.theme.colors.burgundy};
`;

export const TitleSearchMovieCard = styled.h3`
  font-weight: 600;
  height: 70px;
  padding: ${p => p.theme.spacing(3)};
`;

export const PosterMovie = styled.img`
  width: 500px;
`;
