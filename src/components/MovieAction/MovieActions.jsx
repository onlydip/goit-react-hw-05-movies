import {
  AddInfoWrapper,
  AddInfoList,
  AddInfoItem,
  AddInfoLink,
} from './MovieActions.styled';

export function MovieActions({ location }) {
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <AddInfoWrapper>
      <h3>Additional information</h3>
      <AddInfoList>
        <AddInfoItem>
          <AddInfoLink to={'credits'} state={{ from: backLinkHref }}>
            {'>'} Cast
          </AddInfoLink>
        </AddInfoItem>
        <AddInfoItem>
          <AddInfoLink to="reviews" state={{ from: backLinkHref }}>
            {'>'} Reviews
          </AddInfoLink>
        </AddInfoItem>
      </AddInfoList>
    </AddInfoWrapper>
  );
}
