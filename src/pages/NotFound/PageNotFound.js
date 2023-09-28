import styled from '@emotion/styled'
import { GoBackLink } from '../../components/GoBack/GoBackLink';

const NotFoungPage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: red;
`;

function PageNotFound() {
  return (
    <>
      <GoBackLink to={'/'}>{'<'} Go to Homepage</GoBackLink>
      <NotFoungPage> Sorry, page not found! </NotFoungPage>;
    </>
  );
}

export default PageNotFound;
