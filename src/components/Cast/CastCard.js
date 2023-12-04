import noPhoto from '../../images/no-photo-min.png';
export const ActorCard = ({ actor }) => {
  const { character, name, profile_path } = actor;
  return (
    <li>
      {character && <h3>Character: {character}</h3>}

      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
        />
      ) : (
        <img src={noPhoto} alt={name} />
      )}
      {name && <h3>Name: {name} </h3>}
    </li>
  );
};
