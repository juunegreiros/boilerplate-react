import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.color30};
  text-decoration: none;
`;
