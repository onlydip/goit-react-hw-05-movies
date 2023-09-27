import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddInfoWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const AddInfoList = styled.ul`
  margin-bottom: 20px;
`;

export const AddInfoItem = styled.li`
  text-decoration: none;
  margin-bottom: 5px;
`;

export const AddInfoLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #551a8b;
  &:hover {
    color: blueviolet;
  }
`;
