import React from 'react';

import Medias from '../../components/medias';
import Titles from '../../components/title';
import Address from '../../components/address';
import Menu from '../../components/menu';
import Container from './style';

const SideBar: React.FC = () => (
  <Container>
    <Medias />
    <Titles />
    <Address />
    <Menu />
  </Container>
);

export default SideBar;
