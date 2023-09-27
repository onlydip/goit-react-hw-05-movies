import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../components/Service/ApiKey';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/index';
import { CreditsPlug } from './Cast.styled';
import { CastList } from '../../components/Cast/CastList';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response.data.cast);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCredits();
    setIsLoading(true);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {credits.length > 0 ? (
        <CastList credits={credits}></CastList>
      ) : (
        <CreditsPlug> We don't have any cast for this movie. </CreditsPlug>
      )}
    </>
  );
}

export default Cast;
