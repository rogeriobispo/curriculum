import React, { ReactNode } from 'react';

import Conteiner from './style';

type Props = {
  children: ReactNode;
};

const Address: React.FC<Props> = ({ children }: Props) => (
  <Conteiner>
    <h1>{children}</h1>
  </Conteiner>
);

export default Address;
