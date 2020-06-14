import React, { ReactNode } from 'react';

import Conteiner from './style';

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = ({ children }: Props) => (
  <Conteiner>{children}</Conteiner>
);

export default Main;
