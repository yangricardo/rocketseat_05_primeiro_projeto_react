import React from 'react';
import './styles.ts';
import logoImg from '../../assets/githubExplorerLogo.svg';
import { Title, Form } from './styles';
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
