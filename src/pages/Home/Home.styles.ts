import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  width: 70vw;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color50};
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const TitleEmph = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  font-weight: 600;

  .Typewriter {
    display: inline;
  }
`;

export const TitleTypewritter = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;
