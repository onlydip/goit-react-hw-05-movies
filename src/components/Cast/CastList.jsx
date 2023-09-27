import {
  CreditsList,
  CreditsItem,
  CreditsImage,
  ActorPlug,
} from './CastList.styled';
import actor_plug from '../../images/actor_plug.jpg';

export function CastList({ credits }) {
  return (
    <CreditsList>
      {credits.slice(0, 20).map(({ id, name, profile_path, character }) => (
        <CreditsItem key={id}>
          {profile_path ? (
            <CreditsImage
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
          ) : (
            <ActorPlug src={actor_plug} alt="Actor Plug" />
          )}
          <div>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </div>
        </CreditsItem>
      ))}
    </CreditsList>
  );
}
