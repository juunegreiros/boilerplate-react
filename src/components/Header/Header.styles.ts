import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
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
