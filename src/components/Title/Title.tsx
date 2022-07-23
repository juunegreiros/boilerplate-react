import styled from 'styled-components';
import circle from '../../assets/circle.png';

const Title = styled.h1`
  align-items: center;
  background-image: url(${circle});
  background-repeat: no-repeat;
  display: flex;
  font-size: 4rem;
  font-weight: 600;
  height: 125px;
  padding-left: 40px;
  text-align: center;
`;

export default Title;
