import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    gap: 4rem;
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3.438rem;

  @media (min-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: row;
    font-size: 1.5rem;
  }
`;

export const ProfilePicture = styled.img`
  height: 445px;
  max-height: 40vh;
  width: auto;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-height: unset;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 700px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    gap: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const Emph = styled.strong`
  font-weight: 500;
  font-style: italic;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
  text-decoration: none;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.orange},
    ${({ theme }) => theme.colors.orange}
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 10%;
`;
