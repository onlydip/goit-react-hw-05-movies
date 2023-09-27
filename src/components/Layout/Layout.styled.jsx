import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 40px;

  list-style: none;

  background-color: gainsboro;
  border: 2px solid bisque;
  border-radius: 8px;
`;

const NavLiItem = styled.li`
  margin-left: 20px;
`;

const CustomNavLink = styled.a`
  padding: 5px;
  border: 2px solid black;
  border-radius: 4px;

  .active {
    background-color: orange;
  }
`;

export { Container, NavList, NavLiItem, CustomNavLink };