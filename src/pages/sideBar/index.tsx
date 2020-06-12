import React from 'react';

import Medias from '../../components/medias';
import Titles from '../../components/title';
import Container from './style';

const SideBar: React.FC = () => (
  <Container>
    <Medias />
    <Titles />
  </Container>
);

export default SideBar;
