import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../components/Service/ApiKey';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container/index';
import { Title, LoaderWrapper } from './Home.styled';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/index';
import { MovieList } from '../../components/MovieList/index';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    getMovies();
    setIsLoading(true);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        movies && <MovieList movies={movies} location={location} />
      )}
    </Container>
  );
}

