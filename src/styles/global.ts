import { createGlobalStyle } from 'styled-components';
import { mainBackgroundColor } from './variables';

export default createGlobalStyle`
html body * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: ${mainBackgroundColor};
  -webkit-font-smoothing: antialiased
}
`;
