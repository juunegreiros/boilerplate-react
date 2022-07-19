import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Toggle = styled.label`
  background-color: ${({ theme }) => theme.colors.color20};
  border-radius: 1rem;
  cursor: pointer;
  height: 30px;
  padding: 2px;
  position: relative;
  width: 60px;

  &::before {
    background-color: ${({ theme }) => theme.colors.color70};
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
