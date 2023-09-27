import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../components/Service/ApiKey';
import { toast } from 'react-toastify';
import { ReviewPlug } from './Reviews.styled';
import { Loader } from '../../components/Loader/index';
import { ReviewsList } from '../../components/ReviewList';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.data.results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieReviews();
    setIsLoading(true);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ReviewsList reviews={reviews}></ReviewsList>
      {reviews.length === 0 && (
        <ReviewPlug> We don't have any reviews for this movie. </ReviewPlug>
      )}
    </>
  );
}

export default Reviews;
