import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

import Container from './styles';

const Title: React.FC = () => (
  <Container>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/rogeriobispo" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rog%C3%A9rio-dos-santos-bispo-34a63615/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/rbispo.santos" target="blank">
            <FaFacebook />
          </a>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Title;
