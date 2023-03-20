import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: lightgray;
  padding-top: 22px;
  padding-bottom: 22px;
`;

export const NavList = styled.ul`
  display: flex;
  margin-left: 50px;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 30px;
  color: #483d8b;
  font-weight: 800;
  margin-right: 50px;
  text-decoration: none;
  border: solid 1px #483d8b;
  padding: 7px 18px;

  border-radius: 6px;
  &.active {
    color: lightgray;
    background-color: #483d8b;
    border: solid 1px lightgray;
  }
`;
