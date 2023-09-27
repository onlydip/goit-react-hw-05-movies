import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 90px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieListItem = styled.li`
  text-decoration: none;
  margin-bottom: 5px;
`;

export const MovieListLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
  margin-bottom: 10px;
`;

export const Title = styled.p`
  margin-right: auto;
  margin-left: auto;
  font-weight: 500;
`;

export const PosterPlug = styled.img`
  width: 300px;
  height: 450px;
  margin-bottom: 10px;
`;
