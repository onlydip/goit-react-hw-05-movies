import {
  MovieListItem,
  MovieListLink,
  List,
  ImgWrapper,
  Poster,
  Title,
  PosterPlug,
} from './MovieList.styled';
import poster_plug from '../../images/poster_plug.jpg';

export function MovieList({ movies, location }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <MovieListItem key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            <ImgWrapper>
              {poster_path ? (
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                ></Poster>
              ) : (
                <PosterPlug src={poster_plug} alt="Poster Plug"></PosterPlug>
              )}
              <Title>{title}</Title>
            </ImgWrapper>
          </MovieListLink>
        </MovieListItem>
      ))}
    </List>
  );
}
