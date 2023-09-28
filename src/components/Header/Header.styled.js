import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

 const HeaderBar = styled.header`
  padding: 15px;
  border-bottom: 1px solid black;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3),
    0px 2px 1px -1px rgba(0, 0, 0, 0.3);
`;

 const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  &.active {
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blueviolet;
  }
`;
export {HeaderBar, NavItem};