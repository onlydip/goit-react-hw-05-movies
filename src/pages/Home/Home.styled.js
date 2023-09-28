import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

 const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

 const ListItem = styled.li`
  list-style: inside;
  text-decoration: none;
  margin-bottom: 5px;
`;

 const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

 const LoaderWrapper = styled.div`
  display: flex;
`;

export { Title, ListItem,StyledLink,LoaderWrapper};