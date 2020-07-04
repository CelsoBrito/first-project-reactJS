import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositorios no Github</Title>
      <Form>
        <input placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62865560?s=460&u=19389ed6f87fb4890ebbeee24354c0dcc19736bf&v=4"
            alt="Celso Brito"
          />
          <div>
            <strong>rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62865560?s=460&u=19389ed6f87fb4890ebbeee24354c0dcc19736bf&v=4"
            alt="Celso Brito"
          />
          <div>
            <strong>rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62865560?s=460&u=19389ed6f87fb4890ebbeee24354c0dcc19736bf&v=4"
            alt="Celso Brito"
          />
          <div>
            <strong>rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
