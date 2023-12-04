import { ActorCard } from './CastCard';

export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.length > 0 &&
        cast.map(actor => <ActorCard key={actor.id} actor={actor} />)}
    </ul>
  );
};
