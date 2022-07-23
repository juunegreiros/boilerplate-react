import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4.25rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
`;

export const Navbar = styled.nav`
  align-items: center;
  display: flex;
`;

export const List = styled.ul<{ bigSpace?: boolean }>`
  display: flex;
  list-style: none;
  gap: ${({ bigSpace }) => (bigSpace ? '3rem' : '1.75rem')};
  padding: 0;
`;

export const ImageLink = styled(Link)`
  height: auto;
  width: 290px;

  svg {
    height: inherit;
    width: inherit;
  }
`;

export const HeaderLink = styled(NavLink)`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.dark},
    ${({ theme }) => theme.colors.dark}
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 10%;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  transition-property: color background-size;
  transition-duration: 0.3s;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.orange};
    background-size: 100% 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.dark};
    height: 30px;
    width: 30px;

    &:hover {
      fill: ${({ theme }) => theme.colors.dark};
    }
  }
`;

export const Toggle = styled.label`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: block;
  height: 30px;
  padding: 2px;
  position: relative;
  width: 60px;

  &::before {
    background-color: ${({ theme }) => theme.colors.orange};
    transition: transform 0.2s;
    border-radius: 50%;
    content: '';
    height: 24px;
    position: absolute;
    right: 3px;
    top: 3px;
    width: 24px;
  }
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Toggle}::before {
    transform: translateX(-30px);
  }
`;
