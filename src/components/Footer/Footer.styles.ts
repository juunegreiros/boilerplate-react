import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;

export const Item = styled.li``;

export const IconWrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.secondary};
    height: 30px;
    width: 30px;

    &:hover {
      fill: ${({ theme }) => theme.colors.green};
    }
  }
`;
