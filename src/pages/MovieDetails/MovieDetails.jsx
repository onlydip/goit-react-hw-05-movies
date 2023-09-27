import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMoviesById } from '../../components/Service/ApiKey';
import { GoBackLink } from '../../components/GoBack/index';
import { useNavigate } from 'react-router-dom';
import { MovieInfoDetail } from '../../components/MovieInfo/index';
import { MovieActions } from '../../components/MovieAction/index';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieInfo();
  }, [movieId, navigate]);

  return (
    <main>
      <GoBackLink to={backLinkHref}>{'<'} Go back</GoBackLink>
      <MovieInfoDetail movie={movie}></MovieInfoDetail>
      <MovieActions location={location}></MovieActions>
      <Outlet />
    </main>
  );
}

