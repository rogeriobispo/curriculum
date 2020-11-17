import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';
import SideBar from './pages/sideBar';
import MainContent from './pages/main';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SideBar />
    <MainContent>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MainContent>
  </>
);
export default App;
