import { HeaderBar, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBar>
      <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </nav>
    </HeaderBar>
  );
};
