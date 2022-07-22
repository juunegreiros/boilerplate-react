import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color50};
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  background-image: linear-gradient(
    transparent 80%,
    ${({ theme }) => theme.colors.green} 0 90%,
    transparent 0 100%
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: ${({ theme }) => theme.colors.green};
  display: inline-block;
  font-weight: 500;
  text-decoration: none;
  transition: background-size 0.25s;

  &:hover {
    background-size: 100% 100%;
  }
`;
