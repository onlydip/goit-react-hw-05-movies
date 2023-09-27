import { NavLink, Outlet } from 'react-router-dom';
import { Container, NavList, NavLiItem } from './Layout.styled.jsx';

export const Layout = () => {
  return (
    <Container>
      <NavList>
        <NavLiItem>
          <NavLink to="/">Home</NavLink>
        </NavLiItem>

        <NavLiItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavLiItem>
      </NavList>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
