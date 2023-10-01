import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderBar = styled.header`
  background-color: skyblue;
  color: white;
  padding: 15px;
  border-bottom: 1px solid #666;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3),
    0px 2px 1px -1px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 10px 10px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  &:last-child {
    margin-right: 0px;
  }
  &.active {
    background-color: black;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: yellow;
  }
`;

export { HeaderBar, NavItem };
