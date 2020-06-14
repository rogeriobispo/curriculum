import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

import Conteiner from './style';

const Address: React.FC = () => (
  <Conteiner>
    <address>
      <div>
        <FaMapMarkedAlt />
        <p>
          Rua. Dr. Nelson de Souza Campos n° 18 CEP- 05743-200 - São Paulo - SP
        </p>
      </div>
      <div id="phone">
        <FaPhoneAlt />
        <p>(11) 975507042</p>
      </div>
      <div id="email">
        <FaEnvelope />
        <p>rogeriopd10@gmail.com</p>
      </div>
    </address>
  </Conteiner>
);

export default Address;
