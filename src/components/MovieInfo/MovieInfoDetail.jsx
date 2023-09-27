import {
  MainInfo,
  InfoWrapper,
  Poster,
  PosterPlug,
  UserScoreText,
  Title,
  TitleYear,
} from './MovieInfoDetail.styled';
import poster_plug from '../../images/poster_plug.jpg';

export function MovieInfoDetail({ movie }) {
  const releaseDate = new Date(movie.release_date).getFullYear();

  return (
    <MainInfo>
      {movie.poster_path ? (
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></Poster>
      ) : (
        <PosterPlug src={poster_plug} alt="Poster Plug"></PosterPlug>
      )}
      <InfoWrapper>
        <Title>
          {movie.title}
          <TitleYear>({releaseDate})</TitleYear>
        </Title>
        <UserScoreText>
          User Score: {`${Number(movie.vote_average).toFixed(1) * 10}%`}
        </UserScoreText>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres
            ? movie.genres.map(genre => genre.name).join(', ')
            : 'There are no genres!'}
        </p>
      </InfoWrapper>
    </MainInfo>
  );
}
