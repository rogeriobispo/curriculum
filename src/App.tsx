import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';
import SideBar from './pages/sideBar';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SideBar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);
export default App;
