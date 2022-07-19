import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color30};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Name = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.color40};
  text-decoration: underline;
  text-underline-offset: 0.75rem;
`;

export const Text = styled.p`
  line-height: 1.5;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.color30};
  text-decoration: none;
`;
