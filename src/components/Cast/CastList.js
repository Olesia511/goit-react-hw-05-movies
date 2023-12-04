import { ActorList } from './Cast.styled';
import { ActorCard } from './CastCard';

export const CastList = ({ cast }) => {
  return (
    <ActorList>
      {cast.length > 0 &&
        cast.map(actor => <ActorCard key={actor.id} actor={actor} />)}
    </ActorList>
  );
};
