import styled from 'styled-components';
import { mainBackgroundColor } from '../../styles/variables';

const Container = styled.div`
  margin-top: 0%;
  height: 80px;
  width: 550px;
  color: black;
  background-color: ${mainBackgroundColor};

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    margin-bottom: 0;
  }

  h2,
  h3 {
    margin-top: 0;
    font-size: 18px;
    margin-bottom: 0;
  }

  h3 {
    font-size: 16px;
  }
`;

export default Container;
