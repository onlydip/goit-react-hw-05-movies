import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const ListItem = styled.li`
  list-style: inside;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
`;
