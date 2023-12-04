import noPhoto from '../../images/no-photo-min.png';
import { ActorRole, StyledActorCard, StyledImgActor } from './Cast.styled';

export const ActorCard = ({ actor }) => {
  const { character, name, profile_path } = actor;
  return (
    <StyledActorCard>
      {profile_path ? (
        <StyledImgActor
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
        />
      ) : (
        <StyledImgActor src={noPhoto} alt={name} />
      )}
      {name && <ActorRole>{name} </ActorRole>}
      {character && <ActorRole>Character: {character}</ActorRole>}
    </StyledActorCard>
  );
};
